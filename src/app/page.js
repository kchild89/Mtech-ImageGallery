"use client";
import Gallery from "@/components/Gallery";
import CategoryFilter from "@/components/CategoryFilter";
import Pagination from "@/components/Pagination";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "Collection",
    "Nature",
    "Animals",
    "Technology",
    "Travel",
  ];

  const imagesPerPage = 9; // Number of images per page

  return (
    <div className="flex flex-col min-h-screen">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={(category) => {
          setSelectedCategory(category);
          setCurrentPage(1); // Reset to first page on category change
        }}
      />
      <Gallery
        selectedCategory={selectedCategory}
        currentPage={currentPage}
        imagesPerPage={imagesPerPage}
      />
      <Pagination
        totalImages={50} // Replace with a realistic number if available
        imagesPerPage={imagesPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
