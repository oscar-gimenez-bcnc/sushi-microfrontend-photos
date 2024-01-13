const TableHead: React.FC = () => {
  return (
    <thead>
      <tr>
        <th aria-label="Table head Id" />
        <th>User</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Company</th>
        <th aria-label="Table head download button" />
      </tr>
    </thead>
  );
};

export default TableHead;
