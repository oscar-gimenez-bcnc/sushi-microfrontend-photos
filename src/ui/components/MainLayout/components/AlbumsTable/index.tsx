import AddressCell from './components/AddressCell';
import CompanyCell from './components/CompanyCell';
import NameCell from './components/AlbumCell';
import TableHead from './components/TableHead';
import useAlbumsTable from './useAlbumsTable';
import LabelCell from './components/LabelCell';
import DownloadCell from './components/DownloadCell';
import ErrorData from './components/ErrorData';
import { type IAlbum } from '@/domain/models/IAlbum';
import EmptyData from './components/EmptyData';
import Loader from './components/Loader';

const AlbumsTable: React.FC = () => {
  const {
    states: { albums, errorMessage, isLoading }
  } = useAlbumsTable();

  return errorMessage === undefined ? (
    <div className="overflow-x-auto">
      <table className="table table-md bg-white">
        <TableHead />
        <tbody>
          {isLoading === true ? (
            <Loader />
          ) : albums.length === 0 ? (
            <EmptyData />
          ) : (
            albums.map((album: IAlbum) => (
              <tr key={album.id}>
                <th>{album.id}</th>
                <td aria-label="Name cell">
                  <NameCell album={album} />
                </td>
                <td aria-label="Email cell">
                  <LabelCell label={album.email} />
                </td>
                <td aria-label="Address cell">
                  <AddressCell address={album.address} />
                </td>
                <td aria-label="Phone cell">
                  <LabelCell label={album.phone} />
                </td>
                <td aria-label="Website cell">
                  <LabelCell label={album.website} />
                </td>
                <td aria-label="Company cell">
                  <CompanyCell company={album.company} />
                </td>
                <td aria-label="Download row">
                  <DownloadCell album={album} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  ) : (
    <ErrorData />
  );
};

export default AlbumsTable;
