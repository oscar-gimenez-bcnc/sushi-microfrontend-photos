import { type IPhoto } from '@/domain/models/IPhoto';
import IconDownload from '@/ui/components/shared/icons/IconDownload';
import useDownloadCell from './useDownloadCell';

interface DownloadCellProps {
  photo: IPhoto;
}

const DownloadCell: React.FC<DownloadCellProps> = ({ photo }) => {
  const {
    actions: { handleDownloadClick }
  } = useDownloadCell();

  return (
    <button
      aria-label="Download button"
      type="button"
      className="btn btn-ghost btn-xs "
      onClick={() => {
        void handleDownloadClick(photo);
      }}
    >
      <IconDownload className="h-6 w-6 py-1" />
    </button>
  );
};

export default DownloadCell;
