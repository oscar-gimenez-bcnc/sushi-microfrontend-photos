const TableHead: React.FC = () => {
  return (
    <thead>
      <tr>
        <th aria-label="Table head Id" />
        <th>Photo</th>
        <th>User ID</th>
        <th>Title</th>
        <th aria-label="Table head download button" />
      </tr>
    </thead>
  );
};

export default TableHead;
