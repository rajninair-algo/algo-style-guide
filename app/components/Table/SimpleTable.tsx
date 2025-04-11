import { Link } from "@remix-run/react";
import ButtonLink from "../buttons/ButtonLink";

interface SimpleTableProps<T> {
  data?: T[];
  onView?: (row: T) => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  viewURL?: (row: T) => string;
  editURL?: (row: T) => string;
  size?: "sm" | "md" | "lg";
}

const SimpleTable = <
  T extends { id: number; name: string; email: string; doj: string }
>({
  data = [],
  viewURL,
  editURL,
  onEdit,
  onDelete,
  size = "md",
}: SimpleTableProps<T>) => {
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

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

              <td className={`${cellClass}`}>
                <div className="flex items-center gap-2">
                  {viewURL && (
                    <Link
                      to={viewURL(row)}
                      className="text-primary hover:underline"
                    >
                      View
                    </Link>
                  )}
                  {editURL && (
                    <Link
                      to={editURL(row)}
                      className="text-indigo-600 hover:underline"
                    >
                      Edit
                    </Link>
                  )}
                  <ButtonLink onClick={() => onDelete?.(row)} variant="danger">
                    Delete
                  </ButtonLink>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
