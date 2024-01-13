import { type IAlbum } from '@/domain/models/IAlbum';
import { type IAlbumDownloader } from '@/domain/ports/IAlbumDownloader';
import { type DownloadFileProps, downloadFile } from './helper';

export function createCsvAlbumDownloader(): IAlbumDownloader {
  const convertAlbumToCsv = (album: IAlbum): string => {
    const headers = 'ID,Name,Username,Email,Street,Suite,City,Zipcode,Lat,Lng,Phone,Website,CompanyName,CatchPhrase,Bs';
    const row = [
      album.id,
      album.name,
      album.username,
      album.email,
      album.address.street,
      album.address.suite,
      album.address.city,
      album.address.zipcode,
      album.address.geo.lat,
      album.address.geo.lng,
      album.phone,
      album.website,
      album.company?.name,
      album.company?.catchPhrase,
      album.company?.bs
    ]
      .map((field) => `"${field}"`)
      .join(',');

    return `${headers}\n${row}`;
  };

  const download = async (album: IAlbum): Promise<void> => {
    const csvContent = convertAlbumToCsv(album);
    const options: DownloadFileProps = { id: album.id, content: csvContent, extension: 'csv' };
    await downloadFile(options);
  };

  return { download };
}
