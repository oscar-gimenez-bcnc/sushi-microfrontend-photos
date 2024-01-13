import { type IAlbum } from '@/domain/models/IAlbum';
import { type IAlbumRepository } from '@/domain/ports/IAlbumRepository';

export function createHardcodedAlbumRepository(): IAlbumRepository {
  async function list(): Promise<IAlbum[]> {
    return [
      {
        userId: 1,
        id: 1,
        title: 'How to cook sushi'
      },
      {
        userId: 1,
        id: 2,
        title: 'Japanese kitchen for all'
      }
    ];
  }

  return { list };
}
