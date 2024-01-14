import { type IHookResponse } from '@/ui/shared/types/types';
import { useContext } from 'react';
import { PhotosTableContext } from '../../contexts/PhotosTableContext';

const useErrorData = (): IHookResponse => {
  const { errorMessage, setErrorMessage } = useContext(PhotosTableContext);

  const handleOnErrorClick = (): void => {
    setErrorMessage(undefined);
  };

  return {
    states: { errorMessage },
    actions: { handleOnErrorClick }
  };
};

export default useErrorData;
