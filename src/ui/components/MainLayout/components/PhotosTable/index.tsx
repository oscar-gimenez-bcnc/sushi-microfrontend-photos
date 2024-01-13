import type React from 'react';
import ErrorData from './components/ErrorData';
import VirtualTable from './helpers/VirtualTable';
import usePhotosTable from './usePhotosTable';
import TableHead from './components/TableHead';
import EmptyData from './components/EmptyData';
import Loader from './components/Loader';
import PhotoCell from './components/PhotoCell';
import DownloadCell from './components/DownloadCell';
import LabelCell from './components/LabelCell';

const PhotosTable: React.FC = () => {
  const {
    states: { photos, errorMessage, isLoading }
  } = usePhotosTable();

  /* const Row: any = ({ index }: { index: number }) => {
    return (
      <tr>
        <td className="h-9">Row {index}</td>
        <td>Col</td>
        <td>Col 3</td>
        <td>Col 4</td>
      </tr>
    );
  }; */

  const Row: any = ({ index }: { index: number }) => {
    const photo = photos[index];
    return (
      <tr className="border-b text-sm leading-5" key={photo.id}>
        <th className="px-4 py-3">{photo.id}</th>
        <td className="h-9 px-4 py-3" aria-label="Photo cell">
          <PhotoCell photo={photo} />
        </td>
        <td className="px-4 py-3" aria-label="Album ID cell">
          <LabelCell label={photo.albumId.toString()} />
        </td>
        <td className="px-4 py-3" aria-label="Title cell">
          <LabelCell label={photo.title} />
        </td>
        <td className="px-4 py-3" aria-label="Download row">
          <DownloadCell photo={photo} />
        </td>
      </tr>
    );
  };

  return errorMessage === undefined ? (
    <div className="overflow-auto">
      {isLoading === true ? (
        <Loader />
      ) : photos.length === 0 ? (
        <EmptyData />
      ) : (
        <VirtualTable
          height={600}
          width="100%"
          itemCount={photos.length}
          itemSize={36} // h-9
          header={<TableHead />}
          row={Row}
        />
      )}
    </div>
  ) : (
    <ErrorData />
  );
};

export default PhotosTable;
