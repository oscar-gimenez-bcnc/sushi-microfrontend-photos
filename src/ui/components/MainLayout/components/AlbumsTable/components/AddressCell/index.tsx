import { type IAddress } from '@/domain/models/IAddress';
import IconArrowTopRightOnSquare from '@/ui/components/shared/icons/IconArrowTopRightOnSquare';

interface AddressCellProps {
  address: IAddress;
}

const AddressCell: React.FC<AddressCellProps> = ({ address }) => {
  const googleMapLink = `https://maps.google.com/?q=${address.geo.lat},${address.geo.lng}`;
  return (
    <>
      {address.street}, {address.suite}. {address.city} {address.zipcode}
      <br />
      <span className="badge badge-ghost badge-xs gap-2 p-2">
        {address.geo.lat} - {address.geo.lng}
        <div className="tooltip" data-tip="Open Google Maps in a new tab">
          <a href={googleMapLink} target="_blank" rel="noreferrer" aria-label="Google Map Link">
            <IconArrowTopRightOnSquare className="h-3 w-3" />
          </a>
        </div>
      </span>
      <br />
    </>
  );
};

export default AddressCell;
