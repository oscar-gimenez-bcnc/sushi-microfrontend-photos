import { type IPhoto } from '@/domain/models/IPhoto';
import { createCsvPhotoDownloader } from '@/infrastructure/dataDownload/CsvPhotoDownloader';
import { createJsonPhotoDownloader } from '@/infrastructure/dataDownload/JsonPhotoDownloader';
import { mockedPhotos } from '../../../__mocks__/photos';

beforeAll(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.restoreAllMocks();
});

it('should create a download link and generate a blob URL when downloading photo data as CSV', async () => {
  const photo: IPhoto = mockedPhotos[0];
  const csvExporter = createCsvPhotoDownloader();

  jest.spyOn(document, 'createElement');
  global.URL.createObjectURL = jest.fn(() => 'mocked blob');

  await csvExporter.download(photo);

  expect(document.createElement).toHaveBeenCalledWith('a');
  expect(global.URL.createObjectURL).toHaveBeenCalled();
});

it('should create a download link and generate a blob URL when downloading photo data as JSON', async () => {
  const photo: IPhoto = mockedPhotos[0];
  const csvExporter = createJsonPhotoDownloader();

  jest.spyOn(document, 'createElement');
  global.URL.createObjectURL = jest.fn(() => 'mocked blob');

  await csvExporter.download(photo);

  expect(document.createElement).toHaveBeenCalledWith('a');
  expect(global.URL.createObjectURL).toHaveBeenCalled();
});
