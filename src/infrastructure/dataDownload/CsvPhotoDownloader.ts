import { type IPhoto } from '@/domain/models/IPhoto';
import { type IPhotoDownloader } from '@/domain/ports/IPhotoDownloader';
import { type DownloadFileProps, downloadFile } from './helper';

export const createCsvPhotoDownloader = (): IPhotoDownloader => {
  const convertPhotoToCsv = (photo: IPhoto): string => {
    const headers = 'Album ID,ID,Title,Url,ThumbnailUrl';
    const row = [photo.albumId, photo.id, photo.title, photo.url, photo.thumbnailUrl]
      .map((field) => `"${field}"`)
      .join(',');
    return `${headers}\n${row}`;
  };

  const download = async (photo: IPhoto): Promise<void> => {
    const csvContent = convertPhotoToCsv(photo);
    const options: DownloadFileProps = { id: photo.id, content: csvContent, extension: 'csv' };
    await downloadFile(options);
  };

  return { download };
};
