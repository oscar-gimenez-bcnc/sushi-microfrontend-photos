import { type IAlbum } from '@/domain/models/IAlbum';
import IconDownload from '@/ui/components/shared/icons/IconDownload';
import useDownloadCell from './useDownloadCell';

interface DownloadCellProps {
  album: IAlbum;
}

const DownloadCell: React.FC<DownloadCellProps> = ({ album }) => {
  const {
    actions: { handleDownloadClick }
  } = useDownloadCell();

  return (
    <button
      aria-label="Download button"
      type="button"
      className="btn btn-ghost btn-xs "
      onClick={() => {
        void handleDownloadClick(album);
      }}
    >
      <IconDownload className="h-6 w-6 py-1" />
    </button>
  );
};

export default DownloadCell;
