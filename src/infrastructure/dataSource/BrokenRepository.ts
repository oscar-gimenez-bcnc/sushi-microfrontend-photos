import { type IAlbum } from '@/domain/models/IAlbum';
import { type IAlbumRepository } from '@/domain/ports/IAlbumRepository';

// This adapter simulates a broken data source
export function createBrokenRepository(): IAlbumRepository {
  async function list(): Promise<IAlbum[]> {
    throw new Error(`You should know it ;-), you are pointing to a broken database.`);
  }

  return { list };
}
