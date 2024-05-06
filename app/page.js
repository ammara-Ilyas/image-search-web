"use client";
import React, { useState } from "react";
import axios from "axios";

const UnsplashGallery = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const accessKey = "VG4HY3iiinchcwaxgyEpZ7A7ogG81UOWZkdV0GomubM";

  const fetchImages = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`
      );

      setImages(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={fetchImages}>
        <input
          type="text"
          className="border border-gray-400 p-2 w-full"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 mt-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </form>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.urls.small}
              alt={image.alt_description}
              className="w-full h-auto rounded"
            />
            <a
              href={image.links.download}
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg"
            >
              <img
                src="@/image/download.png"
                alt="Download"
                className="w-6 h-6"
              />
            </a>
            <h3 className="absolute bottom-2 left-2 text-white">
              {image.alt_description}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnsplashGallery;
