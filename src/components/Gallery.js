import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = ({ selectedCategory }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const apiUrl =
    "https://api.unsplash.com/photos?client_id=HsUCdPBfsazwvaJ5zMNv6IKGcMWeL_BLxRv61wA5ucQ&per_page=9";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log("API Response:", response.data);

        const categorizedImages = response.data.map((image) => ({
          ...image,
          category: image.tags?.[0]?.title || "Uncategorized",
        }));
        setImages(categorizedImages);
      } catch (err) {
        console.error(
          "Error fetching images:",
          err.response?.data || err.message
        );
        setError(err.response?.data?.errors?.[0] || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const filtered =
      selectedCategory === "all"
        ? images
        : images.filter(
            (image) =>
              image.category.toLowerCase() === selectedCategory.toLowerCase()
          );
    setFilteredImages(filtered);
  }, [selectedCategory, images]);

  if (loading) return <p>Loading images...</p>;
  if (error) return <p>Error fetching images: {error}</p>;

  return (
    <div>
      <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="image-card cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.urls.small}
              alt={image.alt_description}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="modal-content bg-white p-4 rounded-lg max-w-lg max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.urls.full}
              alt={selectedImage.alt_description}
              className="rounded-lg mb-4"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
