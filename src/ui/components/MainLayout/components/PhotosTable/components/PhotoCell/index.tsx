import { type IPhoto } from '@/domain/models/IPhoto';

interface PhotoCellProps {
  photo: IPhoto;
}

const PhotoCell: React.FC<PhotoCellProps> = ({ photo }) => {
  return (
    <>
      <div
        onClick={() => {
          const modalElement = document.getElementById(`modal_${photo.id}`) as HTMLDialogElement | null;
          modalElement?.showModal();
        }}
        className="cursor-pointer"
      >
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={photo.thumbnailUrl} />
          </div>
        </div>
      </div>
      <dialog id={`modal_${photo.id}`} className="modal">
        <div className="modal-box">
          <img src={photo.url} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default PhotoCell;
