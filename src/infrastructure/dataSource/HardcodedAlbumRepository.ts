import { type IAlbum } from '@/domain/models/IAlbum';
import { type IAlbumRepository } from '@/domain/ports/IAlbumRepository';

export function createHardcodedAlbumRepository(): IAlbumRepository {
  async function list(): Promise<IAlbum[]> {
    return [
      {
        id: 1,
        name: 'Bruce',
        username: 'Batman',
        email: 'bruce@batman.com',
        address: {
          street: 'Street 1',
          suite: 'Suite 2',
          city: 'Gotham',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496'
          }
        },
        phone: '1-770-736-8031 x56442',
        website: 'batman.com',
        company: {
          name: 'DC',
          catchPhrase: 'Comics',
          bs: 'Read for fun'
        }
      },
      {
        id: 2,
        name: 'Logan',
        username: 'Wolverine',
        email: 'logan@wolverine.com',
        address: {
          street: 'Street 10',
          suite: 'Suite 30',
          city: 'New York',
          zipcode: '159326-9845',
          geo: {
            lat: '-47.9587',
            lng: '91.5312'
          }
        },
        phone: '666-951-5329 a91235',
        website: 'wolverine.com',
        company: {
          name: 'Marvel',
          catchPhrase: 'Comics',
          bs: 'Books and Movies'
        }
      }
    ];
  }

  return { list };
}
