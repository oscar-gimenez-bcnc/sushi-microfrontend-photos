const TableHead: React.FC = () => {
  return (
    <thead className="whitespace-nowrap text-xs font-bold leading-4 text-gray-500">
      <tr className="border-b">
        <th className="px-4 py-3 text-left" aria-label="Table head Id" />
        <th className="px-4 py-3 text-left">Photo</th>
        <th className="px-4 py-3 text-left">User ID</th>
        <th className="px-4 py-3 text-left">Title</th>
        <th className="px-4 py-3 text-left" aria-label="Table head download button" />
      </tr>
    </thead>
  );
};

export default TableHead;
