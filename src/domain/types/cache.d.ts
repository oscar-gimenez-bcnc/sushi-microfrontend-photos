interface IPhotosCacheData {
  expiry: Date;
  photos: Map<number, IPhotoCacheItem>;
}

interface IPhotoCacheItem {
  expiry: Date;
  data: IPhoto;
}

interface ICacheActions {
  getPhotosCacheData: () => IPhotosCacheData | undefined;
  renewPhotosExpiryDate: () => void;
  getPhotoCache: (key: number) => IPhoto | undefined;
  setPhotoCache: (key: number, value: IPhoto) => void;
  clearPhotosCache: () => void;
}
