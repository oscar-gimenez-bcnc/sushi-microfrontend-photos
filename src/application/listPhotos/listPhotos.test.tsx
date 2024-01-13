import { createApiPhotoRepository } from '@/infrastructure/dataSource/ApiPhotoRepository';
import { mockedPhotos } from '../../../__mocks__/photos';
import { listPhotos } from './listPhotos';

beforeAll(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.restoreAllMocks();
});

it('should recover data from source', async () => {
  const mockFetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => await Promise.resolve(mockedPhotos)
  });
  global.fetch = mockFetch;
  const photoRepository = createApiPhotoRepository();
  const result = await listPhotos(photoRepository)();

  expect(result).toEqual(mockedPhotos);
});

it('should throw an error when an exception raises', async () => {
  const mockFetch = jest.fn().mockRejectedValue(new Error('(Test) Error fetching data'));
  global.fetch = mockFetch;

  let error;
  try {
    const photoRepository = createApiPhotoRepository();
    await listPhotos(photoRepository)();
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
    const photoRepository = createApiPhotoRepository();
    await listPhotos(photoRepository)();
  } catch (e) {
    error = e;
  }

  expect(error).toBeDefined();
});
