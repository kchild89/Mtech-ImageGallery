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
  // Number of images per page
  const imagesPerPage = 9;

  return (
    <div className="flex flex-col min-h-screen">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={(category) => {
          setSelectedCategory(category);
          setCurrentPage(1);
        }}
      />
      <Gallery
        selectedCategory={selectedCategory}
        currentPage={currentPage}
        imagesPerPage={imagesPerPage}
      />
      <Pagination
        totalImages={50}
        imagesPerPage={imagesPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
