// components/Table/PaginationStyle_2.tsx
import React from "react";

interface PaginationStyle_2Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  alignSide: "left" | "center" | "right";
}

const PaginationStyle_2: React.FC<PaginationStyle_2Props> = ({
  currentPage,
  totalPages,
  onPageChange,
  alignSide,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const alignmentClass =
    alignSide === "left"
      ? "justify-start"
      : alignSide === "right"
      ? "justify-end"
      : "justify-center mx-auto";

  return (
    <div
      className={`w-[100%] flex items-center ${alignmentClass} gap-2 p-4 text-sm`}
    >
      <span className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <div className="space-x-2">
        <button
          className="px-3 py-1 border rounded text-sm disabled:opacity-50"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className="px-3 py-1 border rounded text-sm disabled:opacity-50"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationStyle_2;
