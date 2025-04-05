import { useState, useMemo } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

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
};

export default function DynamicTable<T extends Record<string, any>>({
  data,
  columns,
  rowsPerPage = 5,
}: Props<T>) {
  const [searchTerms, setSearchTerms] = useState<Record<string, string>>({});
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: "asc" | "desc";
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (key: string, value: string) => {
    setSearchTerms({ ...searchTerms, [key]: value });
    setCurrentPage(1);
  };

  const sortedData = useMemo(() => {
    let filtered = data.filter((row) =>
      columns.every((col) => {
        if (!col.searchable) return true;
        const val = row[col.key]?.toString().toLowerCase();
        const term = searchTerms[col.key as string]?.toLowerCase() || "";
        return val?.includes(term);
      })
    );

    if (sortConfig) {
      filtered = [...filtered].sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [data, searchTerms, sortConfig]);

  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const toggleSort = (key: keyof T) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key as string}
                className="px-4 py-3 text-left text-sm font-medium text-gray-700"
              >
                <div className="flex items-center gap-2">
                  {col.label}
                  {col.sortable && (
                    <button
                      onClick={() => toggleSort(col.key)}
                      className="text-gray-500 hover:text-black"
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
                {col.searchable && (
                  <input
                    type="text"
                    placeholder={`Search ${col.label}`}
                    className="mt-2 block w-full px-2 py-1 border rounded-md text-sm"
                    value={searchTerms[col.key as string] || ""}
                    onChange={(e) =>
                      handleSearchChange(col.key as string, e.target.value)
                    }
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {paginatedData.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              {columns.map((col) => (
                <td
                  key={col.key as string}
                  className="px-4 py-2 text-sm text-gray-800"
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t">
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <div className="space-x-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
