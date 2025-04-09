import React from "react";

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
}

const SimpleTable: React.FC<SimpleTableProps> = ({
  data,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full bg-white">
        <thead className="bg-white text-[#7c4dff] text-left text-sm font-semibold border-b border-gray-200">
          <tr>
            <th className="px-4 py-3">Sr. No.</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Date of Joining</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {data.map((row, index) => (
            <tr key={row.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.email}</td>
              <td className="px-4 py-2">{row.doj}</td>
              <td className="px-4 py-2 space-x-2">
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
