import { type IPhoto } from '@/domain/models/IPhoto';
import { type IPhotoDownloader } from '@/domain/ports/IPhotoDownloader';

export function downloadPhoto(photoDownloader: IPhotoDownloader) {
  return async (photo: IPhoto): Promise<void> => {
    await photoDownloader.download(photo);
  };
}
