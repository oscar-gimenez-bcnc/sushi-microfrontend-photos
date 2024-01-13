import { type IPhoto } from '@/domain/models/IPhoto';
import { type IPhotoRepository } from '@/domain/ports/IPhotoRepository';

// This adapter simulates a broken data source
export function createBrokenRepository(): IPhotoRepository {
  async function list(): Promise<IPhoto[]> {
    throw new Error(`You should know it ;-), you are pointing to a broken database.`);
  }

  return { list };
}
