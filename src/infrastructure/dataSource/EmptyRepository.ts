import { type IAlbum } from '@/domain/models/IAlbum';
import { type IAlbumRepository } from '@/domain/ports/IAlbumRepository';

// This adapter simulates an empty data source
export function createEmptyAlbumRepository(): IAlbumRepository {
  async function list(): Promise<IAlbum[]> {
    return [];
  }

  return { list };
}
