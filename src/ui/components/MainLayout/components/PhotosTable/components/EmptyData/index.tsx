import IconInfo from '@/ui/components/shared/icons/IconInfo';

const EmptyData: React.FC = () => {
  return (
    <div role="alert" className="alert alert-info w-full">
      <IconInfo />
      <span>There is no data here.</span>
    </div>
  );
};

export default EmptyData;
