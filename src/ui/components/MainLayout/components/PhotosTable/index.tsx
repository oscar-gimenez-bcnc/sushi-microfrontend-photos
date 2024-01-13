import TableHead from './components/TableHead';
import usePhotosTable from './usePhotosTable';
import LabelCell from './components/LabelCell';
import DownloadCell from './components/DownloadCell';
import ErrorData from './components/ErrorData';
import { type IPhoto } from '@/domain/models/IPhoto';
import EmptyData from './components/EmptyData';
import Loader from './components/Loader';
import PhotoCell from './components/PhotoCell';

const PhotosTable: React.FC = () => {
  const {
    states: { photos, errorMessage, isLoading }
  } = usePhotosTable();

  return errorMessage === undefined ? (
    <div className="overflow-x-auto">
      <table className="table table-md bg-white">
        <TableHead />
        <tbody>
          {isLoading === true ? (
            <Loader />
          ) : photos.length === 0 ? (
            <EmptyData />
          ) : (
            photos.map((photo: IPhoto) => (
              <tr key={photo.id}>
                <th>{photo.id}</th>
                <td aria-label="Photo cell">
                  <PhotoCell photo={photo} />
                </td>
                <td aria-label="Album ID cell">
                  <LabelCell label={photo.albumId.toString()} />
                </td>
                <td aria-label="Title cell">
                  <LabelCell label={photo.title} />
                </td>
                <td aria-label="Download row">
                  <DownloadCell photo={photo} />
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

export default PhotosTable;
