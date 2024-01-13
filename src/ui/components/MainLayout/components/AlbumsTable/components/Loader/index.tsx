const EmptyData: React.FC = () => {
  return (
    <tr>
      <td colSpan={8} className="text-center">
        <span role="status" aria-label="Loading" className="loading loading-spinner text-primary" />
      </td>
    </tr>
  );
};

export default EmptyData;
