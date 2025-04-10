type User = {
  id: number;
  name: string;
  email: string;
  country: string;
  doj: string;
};

interface SimpleTableProps {
  data: User[];
  onView?: (row: User) => void;
  onEdit?: (row: User) => void;
  onDelete?: (row: User) => void;
  size?: "sm" | "md" | "lg"; // 👈 new size prop
}

const sizeClasses = {
  sm: "text-xs px-2 py-1",
  md: "text-sm px-4 py-2",
  lg: "text-base px-6 py-3",
};

const SimpleTable: React.FC<SimpleTableProps> = ({
  data,
  onView,
  onEdit,
  onDelete,
  size = "md", // default to medium
}) => {
  const cellClass = sizeClasses[size];

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full bg-white">
        <thead className="bg-white text-[#7c4dff] text-left font-semibold border-b border-gray-200">
          <tr>
            <th className={cellClass}>Sr. No.</th>
            <th className={cellClass}>Name</th>
            <th className={cellClass}>Email</th>
            <th className={cellClass}>Date of Joining</th>
            <th className={cellClass}>Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((row, index) => (
            <tr key={row.id} className="border-t hover:bg-gray-50">
              <td className={cellClass}>{index + 1}</td>
              <td className={cellClass}>{row.name}</td>
              <td className={cellClass}>{row.email}</td>
              <td className={cellClass}>{row.doj}</td>
              <td className={`${cellClass} space-x-2`}>
                <button
                  onClick={() => onView?.(row)}
                  className="text-[#7c4dff] hover:underline"
                >
                  View
                </button>
                <button
                  onClick={() => onEdit?.(row)}
                  className="text-[#7c4dff] hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete?.(row)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
