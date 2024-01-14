import { GlobalContext } from '@/ui/contexts/GlobalContext';
import { type IHookResponse } from '@/ui/shared/types/types';
import { useContext, useEffect } from 'react';
import { PhotosTableContext } from './contexts/PhotosTableContext';
import { type IPhotoRepository } from '@/domain/ports/IPhotoRepository';
import { createApiPhotoRepository } from '@/infrastructure/dataSource/ApiPhotoRepository';
import { createBrokenRepository } from '@/infrastructure/dataSource/BrokenRepository';
import { createEmptyPhotoRepository } from '@/infrastructure/dataSource/EmptyRepository';
import { createHardcodedPhotoRepository } from '@/infrastructure/dataSource/HardcodedPhotoRepository';
import { DataSources } from '@/ui/shared/enums/enums';
import { listPhotos } from '@/application/listPhotos/listPhotos';
import { createApiPhotoWithCacheRepository } from '@/infrastructure/dataSource/ApiPhotoWithCacheRepository';

const usePhotosTable = (): IHookResponse => {
  const { dataSource, isCacheEnabled, cacheActions } = useContext(GlobalContext);
  const { isLoading, photos, errorMessage, setErrorMessage, setPhotos, setIsLoading } = useContext(PhotosTableContext);

  useEffect(() => {
    const dataFetcher = async (): Promise<void> => {
      setErrorMessage(undefined);

      try {
        const photoRepositoryMap: { [key in DataSources]: () => IPhotoRepository } = {
          [DataSources.EXTERNAL]:
            isCacheEnabled && cacheActions !== undefined
              ? () => createApiPhotoWithCacheRepository({ cacheActions })
              : createApiPhotoRepository,
          [DataSources.INTERNAL]: createHardcodedPhotoRepository,
          [DataSources.EMPTY]: createEmptyPhotoRepository,
          [DataSources.BROKEN]: createBrokenRepository
        };

        const photoRepository = photoRepositoryMap[dataSource as DataSources]();

        const photosFetched = await listPhotos(photoRepository)();
        setPhotos(photosFetched);
      } catch (err) {
        setPhotos([]);
        const message = err instanceof Error ? err.message : 'No information provided.';
        setErrorMessage(`Oops! We have difficulties to show this data. ${message}`);
      } finally {
        setIsLoading(false);
      }
    };
    void dataFetcher();
  }, [dataSource, errorMessage]);

  return {
    states: { photos, errorMessage, isLoading }
  };
};

export default usePhotosTable;
