"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import CategoryFilter from "@/components/CategoryFilter";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // List of available categories
  const categories = [
    "all",
    "nature",
    "animals",
    "technology",
    "uncategorized",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Pass category props */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <Gallery selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
}
