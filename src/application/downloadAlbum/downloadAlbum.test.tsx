import { type IAlbum } from '@/domain/models/IAlbum';
import { createCsvAlbumDownloader } from '@/infrastructure/dataDownload/CsvAlbumDownloader';
import { createJsonAlbumDownloader } from '@/infrastructure/dataDownload/JsonAlbumDownloader';
import { mockedAlbums } from '../../../__mocks__/albums';

beforeAll(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.restoreAllMocks();
});

it('should create a download link and generate a blob URL when downloading album data as CSV', async () => {
  const album: IAlbum = mockedAlbums[0];
  const csvExporter = createCsvAlbumDownloader();

  jest.spyOn(document, 'createElement');
  global.URL.createObjectURL = jest.fn(() => 'mocked blob');

  await csvExporter.download(album);

  expect(document.createElement).toHaveBeenCalledWith('a');
  expect(global.URL.createObjectURL).toHaveBeenCalled();
});

it('should create a download link and generate a blob URL when downloading album data as JSON', async () => {
  const album: IAlbum = mockedAlbums[0];
  const csvExporter = createJsonAlbumDownloader();

  jest.spyOn(document, 'createElement');
  global.URL.createObjectURL = jest.fn(() => 'mocked blob');

  await csvExporter.download(album);

  expect(document.createElement).toHaveBeenCalledWith('a');
  expect(global.URL.createObjectURL).toHaveBeenCalled();
});
