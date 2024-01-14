import { type IPhoto } from '@/domain/models/IPhoto';
import { createContext, useState } from 'react';

interface IPhotosTableContext {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  errorMessage: string | undefined;
  setErrorMessage: (errorMessage: string | undefined) => void;
  photos: IPhoto[];
  setPhotos: (photos: IPhoto[]) => void;
}

const PhotosTableContext = createContext<IPhotosTableContext>({
  isLoading: false,
  setIsLoading: () => {},
  errorMessage: undefined,
  setErrorMessage: () => {},
  photos: [],
  setPhotos: () => {}
});

interface PhotosTableProviderProps {
  children: React.ReactNode;
}

const PhotosTableProvider: React.FC<PhotosTableProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const contextValue = {
    isLoading,
    setIsLoading,
    errorMessage,
    setErrorMessage,
    photos,
    setPhotos
  };

  return <PhotosTableContext.Provider value={contextValue}>{children}</PhotosTableContext.Provider>;
};

export { PhotosTableContext, PhotosTableProvider };
