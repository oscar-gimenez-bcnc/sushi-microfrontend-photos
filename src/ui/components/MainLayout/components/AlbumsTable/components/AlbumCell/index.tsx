import { type IAlbum } from '@/domain/models/IAlbum';

interface AlbumCellProps {
  album: IAlbum;
}

const AlbumCell: React.FC<AlbumCellProps> = ({ album }) => {
  return (
    <div className="flex items-center gap-3">
      <div>
        <div className="font-bold">{album.name}</div>
        <div className="text-sm opacity-50">{album.username}</div>
      </div>
    </div>
  );
};

export default AlbumCell;
