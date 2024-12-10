import React from "react";

const Pagination = ({
  totalImages,
  imagesPerPage,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = [];

  // Calculate the number of pages
  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-wrapper flex justify-center py-4">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`w-32 px-4 py-2 rounded text-center transition-colors duration-300 ${
            number === currentPage
              ? "bg-[var(--background)] border-2 border-white text-[var(--foreground)]"
              : "bg-[var(--background)] border-2 border-transparent text-[var(--foreground)] hover:border-white"
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
