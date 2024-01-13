import IconWarning from '@/ui/components/shared/icons/IconWarning';
import useErrorData from './useErrorData';

const ErrorData: React.FC = () => {
  const {
    states: { errorMessage },
    actions: { handleOnErrorClick }
  } = useErrorData();

  return (
    <div role="alert" className="alert alert-warning">
      <IconWarning />
      <span>{errorMessage}</span>
      <button type="button" className="btn btn-neutral" onClick={() => handleOnErrorClick()}>
        Try again
      </button>
    </div>
  );
};

export default ErrorData;
