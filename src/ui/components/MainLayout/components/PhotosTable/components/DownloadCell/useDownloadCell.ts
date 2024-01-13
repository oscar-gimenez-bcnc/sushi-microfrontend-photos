import { downloadPhoto } from '@/application/downloadPhoto/downloadPhoto';
import { type IPhoto } from '@/domain/models/IPhoto';
import { createCsvPhotoDownloader } from '@/infrastructure/dataDownload/CsvPhotoDownloader';
import { createJsonPhotoDownloader } from '@/infrastructure/dataDownload/JsonPhotoDownloader';
import { GlobalContext } from '@/ui/context/GlobalContext';
import { DownloadMethods } from '@/ui/shared/enums/enums';
import { type IHookResponse } from '@/ui/shared/types/types';
import { useContext } from 'react';

const useDownloadCell = (): IHookResponse => {
  const { downloadMethod } = useContext(GlobalContext);

  const handleDownloadClick = async (photo: IPhoto): Promise<void> => {
    const photoDownloader =
      downloadMethod === DownloadMethods.JSON ? createJsonPhotoDownloader() : createCsvPhotoDownloader();
    await downloadPhoto(photoDownloader)(photo);
  };

  return {
    actions: { handleDownloadClick }
  };
};

export default useDownloadCell;
