import { type IPhoto } from '../models/IPhoto';

export interface IPhotoDownloader {
  download: (Photo: IPhoto) => Promise<void>;
}
