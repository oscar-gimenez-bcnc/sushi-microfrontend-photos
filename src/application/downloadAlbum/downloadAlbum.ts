import { type IAlbum } from '@/domain/models/IAlbum';
import { type IAlbumDownloader } from '@/domain/ports/IAlbumDownloader';

export function downloadAlbum(albumDownloader: IAlbumDownloader) {
  return async (album: IAlbum): Promise<void> => {
    await albumDownloader.download(album);
  };
}
