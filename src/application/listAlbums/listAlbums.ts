import { type IAlbum } from '@/domain/models/IAlbum';
import { type IAlbumRepository } from '@/domain/ports/IAlbumRepository';

export function listAlbums(albumRepository: IAlbumRepository) {
  return async (): Promise<IAlbum[]> => {
    return await albumRepository.list();
  };
}
