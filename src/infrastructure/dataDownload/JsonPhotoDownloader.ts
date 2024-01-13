import { type IPhoto } from '@/domain/models/IPhoto';
import { type IPhotoDownloader } from '@/domain/ports/IPhotoDownloader';
import { type DownloadFileProps, downloadFile } from './helper';

export function createJsonPhotoDownloader(): IPhotoDownloader {
  const convertPhotoToJson = (photo: IPhoto): string => {
    const jsonContent = JSON.stringify(photo, null, 2);
    return jsonContent;
  };

  async function download(photo: IPhoto): Promise<void> {
    const jsonContent = convertPhotoToJson(photo);
    const options: DownloadFileProps = { id: photo.id, content: jsonContent, extension: 'json' };
    await downloadFile(options);
  }

  return { download };
}
