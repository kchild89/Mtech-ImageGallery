import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-filter flex justify-center gap-4 py-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`w-32 px-4 py-2 rounded text-center transition-colors duration-300 ${
            selectedCategory === category
              ? "bg-[var(--background)] border-2 border-white text-[var(--foreground)]"
              : "bg-[var(--background)] border-2 border-transparent text-[var(--foreground)]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
