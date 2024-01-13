import { type IAlbum } from '../models/IAlbum';

export interface IAlbumDownloader {
  download: (Album: IAlbum) => Promise<void>;
}
