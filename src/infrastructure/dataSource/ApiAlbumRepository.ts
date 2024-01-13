import { type IAlbum } from '@/domain/models/IAlbum';
import { type IAlbumRepository } from '@/domain/ports/IAlbumRepository';

export function createApiAlbumRepository(): IAlbumRepository {
  const cache = new Map<number, IAlbum>();

  async function list(): Promise<IAlbum[]> {
    const source = 'https://jsonplaceholder.typicode.com/albums';

    if (cache.size > 0) {
      return Array.from(cache.values());
    }

    const res = await fetch(source);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status} obtained from ${source}.`);
    }

    const albums = await res.json();
    albums.forEach((album: IAlbum) => cache.set(album.id, album));

    return albums;
  }

  return { list };
}
