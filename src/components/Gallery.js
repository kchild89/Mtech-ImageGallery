import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = ({ selectedCategory }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // Add the missing state

  const apiUrl =
    "https://api.unsplash.com/photos?client_id=HsUCdPBfsazwvaJ5zMNv6IKGcMWeL_BLxRv61wA5ucQ";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(apiUrl);
        const categorizedImages = response.data.map((image) => ({
          ...image,
          category:
            image.tags && image.tags.length > 0
              ? image.tags[0].title
              : "Uncategorized", // Use tags for categories or default to "Uncategorized"
        }));
        setImages(categorizedImages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    // Filter images based on selected category
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
      {/* Image Gallery */}
      <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="image-card cursor-pointer"
            onClick={() => setSelectedImage(image)} // Open modal
          >
            <img
              src={image.urls.small}
              alt={image.alt_description}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)} // Close modal on overlay click
        >
          <div
            className="modal-content bg-white p-4 rounded-lg max-w-lg max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <img
              src={selectedImage.urls.full}
              alt={selectedImage.alt_description}
              className="rounded-lg mb-4"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="close-button bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
