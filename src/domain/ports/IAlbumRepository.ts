import { type IAlbum } from '../models/IAlbum';

export interface IAlbumRepository {
  list: () => Promise<IAlbum[]>;
}
