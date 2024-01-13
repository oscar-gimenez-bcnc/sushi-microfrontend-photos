interface LabelCellProps {
  url: string;
  thumbnailUrl: string;
}
const PhotoCell: React.FC<LabelCellProps> = ({ url, thumbnailUrl }) => {
  return url;
};

export default PhotoCell;
