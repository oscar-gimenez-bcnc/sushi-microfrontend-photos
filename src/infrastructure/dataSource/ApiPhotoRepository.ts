import { type IPhoto } from '@/domain/models/IPhoto';
import { type IPhotoRepository } from '@/domain/ports/IPhotoRepository';

export function createApiPhotoRepository(): IPhotoRepository {
  const cache = new Map<number, IPhoto>();

  async function list(): Promise<IPhoto[]> {
    const source = 'https://jsonplaceholder.typicode.com/photos';

    if (cache.size > 0) {
      return Array.from(cache.values());
    }

    const res = await fetch(source);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status} obtained from ${source}.`);
    }

    const photos = await res.json();
    photos.forEach((photo: IPhoto) => cache.set(photo.id, photo));

    return photos;
  }

  return { list };
}
