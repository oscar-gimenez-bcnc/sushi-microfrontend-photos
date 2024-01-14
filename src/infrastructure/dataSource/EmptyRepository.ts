import { type IPhoto } from '@/domain/models/IPhoto';
import { type IPhotoRepository } from '@/domain/ports/IPhotoRepository';

// This adapter simulates an empty data source
export const createEmptyPhotoRepository = (): IPhotoRepository => {
  const list = async (): Promise<IPhoto[]> => {
    return [];
  };

  return { list };
};
