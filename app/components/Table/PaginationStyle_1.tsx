interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  alignSide: "left" | "center" | "right";
}

const PaginationStyle_1: React.FC<PaginationProps> = ({
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
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => {
        const pageNum = i + 1;
        return (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={`px-3 py-1 border rounded ${
              currentPage === pageNum
                ? "bg-[#7c4dff] text-white border-[#7c4dff]"
                : "hover:bg-gray-100"
            }`}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationStyle_1;
