import { type IPhoto } from '@/domain/models/IPhoto';
import { type IPhotoRepository } from '@/domain/ports/IPhotoRepository';

interface createApIPhotoRepositoryProps {
  cacheActions: ICacheActions;
}

export function createApiPhotoWithCacheRepository({ cacheActions }: createApIPhotoRepositoryProps): IPhotoRepository {
  async function list(): Promise<IPhoto[]> {
    const cache = cacheActions.getPhotosCacheData();

    if (cache !== undefined) {
      if (new Date().getTime() > cache.expiry.getTime()) {
        cacheActions.clearPhotosCache();
      } else {
        const x = Array.from(cache.photos.values());
        const cachedPhotos = x.map((photoCacheItem) => {
          return photoCacheItem.data;
        });

        console.log('Returned from cache');

        return cachedPhotos;
      }
    }

    console.log('Returned from source');
    const source = 'https://jsonplaceholder.typicode.com/photos';
    const res = await fetch(source);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status} obtained from ${source}.`);
    }

    const photos = await res.json();

    photos.forEach((photo: IPhoto) => {
      cacheActions.setPhotoCache(photo.id, photo);
      cacheActions.renewPhotosExpiryDate();
    });

    return photos;
  }

  return { list };
}
