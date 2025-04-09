// DynamicTable.tsx
import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import PaginationStyle_2 from "./PaginationStyle_2";
import PaginationStyle_1 from "./PaginationStyle_1";

type Column<T> = {
  key: keyof T;
  label: string;
  sortable?: boolean;
  searchable?: boolean;
};

type Props<T> = {
  data: T[];
  columns: Column<T>[];
  rowsPerPage?: number;
  onEdit?: (row: T) => void;
  onView?: (row: T) => void;
  onDelete?: (row: T) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onSort?: (key: keyof T) => void;
  sortConfig?: {
    key: keyof T;
    direction: "asc" | "desc";
  } | null;
  searchTerms?: Record<string, string>;
  onSearchChange?: (key: string, value: string) => void;
};

export default function DynamicTable<T extends Record<string, any>>({
  data,
  columns,
  rowsPerPage = 5,
  onEdit,
  onView,
  onDelete,
  currentPage,
  totalPages,
  onPageChange,
  onSort,
  sortConfig,
  searchTerms = {},
  onSearchChange,
  setCurrentPage,
}: Props<T>) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full bg-white">
        <thead className="bg-white text-[#7c4dff] text-left text-sm font-semibold border-b border-gray-200">
          <tr>
            <th className="px-4 py-3">Sr. No.</th>
            {columns.map((col) => (
              <th key={col.key as string} className="px-4 py-3">
                <div className="flex items-center gap-2">
                  {col.label}
                  {col.sortable && onSort && (
                    <button
                      onClick={() => onSort(col.key)}
                      className="text-[#7c4dff] hover:text-[#5e32ff] transition"
                    >
                      {sortConfig?.key === col.key ? (
                        sortConfig.direction === "asc" ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )
                      ) : (
                        <ChevronUp className="w-4 h-4 opacity-30" />
                      )}
                    </button>
                  )}
                </div>
                {col.searchable && onSearchChange && (
                  <input
                    type="text"
                    placeholder={`Search ${col.label}`}
                    className="mt-2 w-full rounded border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c4dff]"
                    value={searchTerms[col.key as string] || ""}
                    onChange={(e) =>
                      onSearchChange(col.key as string, e.target.value)
                    }
                  />
                )}
              </th>
            ))}
            {(onEdit || onView || onDelete) && (
              <th className="px-4 py-3">Actions</th>
            )}
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {data.map((row, idx) => (
            <tr key={idx} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">
                {(currentPage - 1) * rowsPerPage + idx + 1}
              </td>
              {columns.map((col) => (
                <td key={col.key as string} className="px-4 py-2">
                  {row[col.key]}
                </td>
              ))}
              {(onEdit || onView || onDelete) && (
                <td className="px-4 py-2 space-x-2">
                  {onView && (
                    <button
                      onClick={() => onView(row)}
                      className="text-[#7c4dff] hover:underline"
                    >
                      View
                    </button>
                  )}
                  {onEdit && (
                    <button
                      onClick={() => onEdit(row)}
                      className="text-[#7c4dff] hover:underline"
                    >
                      Edit
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={() => onDelete(row)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <hr />
    </div>
  );
}
