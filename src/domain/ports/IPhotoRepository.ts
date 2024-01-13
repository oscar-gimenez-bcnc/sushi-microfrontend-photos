import { type IPhoto } from '../models/IPhoto';

export interface IPhotoRepository {
  list: () => Promise<IPhoto[]>;
}
