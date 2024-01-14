import { type IPhoto } from '@/domain/models/IPhoto';
import { type IPhotoRepository } from '@/domain/ports/IPhotoRepository';

export function createApiPhotoRepository(): IPhotoRepository {
  async function list(): Promise<IPhoto[]> {
    const source = 'https://jsonplaceholder.typicode.com/photos';

    const res = await fetch(source);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status} obtained from ${source}.`);
    }

    const photos = await res.json();

    return photos;
  }

  return { list };
}
