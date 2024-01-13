import { createApiAlbumRepository } from '@/infrastructure/dataSource/ApiAlbumRepository';
import { mockedAlbums } from '../../../__mocks__/albums';
import { listAlbums } from './listAlbums';

beforeAll(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.restoreAllMocks();
});

it('should recover data from source', async () => {
  const mockFetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => await Promise.resolve(mockedAlbums)
  });
  global.fetch = mockFetch;
  const albumRepository = createApiAlbumRepository();
  const result = await listAlbums(albumRepository)();

  expect(result).toEqual(mockedAlbums);
});

it('should throw an error when an exception raises', async () => {
  const mockFetch = jest.fn().mockRejectedValue(new Error('(Test) Error fetching data'));
  global.fetch = mockFetch;

  let error;
  try {
    const albumRepository = createApiAlbumRepository();
    await listAlbums(albumRepository)();
  } catch (e) {
    error = e;
  }

  expect(error).toBeDefined();
});

it('should throw an error when the fetch response is not ok', async () => {
  const mockFetch = jest.fn().mockResolvedValue({
    ok: false
  });
  global.fetch = mockFetch;

  let error;
  try {
    const albumRepository = createApiAlbumRepository();
    await listAlbums(albumRepository)();
  } catch (e) {
    error = e;
  }

  expect(error).toBeDefined();
});
