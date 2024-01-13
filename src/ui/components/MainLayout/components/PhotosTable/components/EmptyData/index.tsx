import IconInfo from '@/ui/components/shared/icons/IconInfo';

const EmptyData: React.FC = () => {
  return (
    <tr>
      <td colSpan={8} className="text-center">
        <div role="alert" className="alert alert-info">
          <IconInfo />
          <span>There is no data here.</span>
        </div>
      </td>
    </tr>
  );
};

export default EmptyData;
