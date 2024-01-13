import { type IPhoto } from '@/domain/models/IPhoto';
import { type IPhotoRepository } from '@/domain/ports/IPhotoRepository';

// This adapter simulates an empty data source
export function createEmptyPhotoRepository(): IPhotoRepository {
  async function list(): Promise<IPhoto[]> {
    return [];
  }

  return { list };
}
