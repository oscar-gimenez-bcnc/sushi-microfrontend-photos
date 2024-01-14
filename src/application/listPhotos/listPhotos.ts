import { type IPhoto } from '@/domain/models/IPhoto';
import { type IPhotoRepository } from '@/domain/ports/IPhotoRepository';

export const listPhotos = (photoRepository: IPhotoRepository) => {
  return async (): Promise<IPhoto[]> => {
    return await photoRepository.list();
  };
};
