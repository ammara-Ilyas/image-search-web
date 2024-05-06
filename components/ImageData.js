"use client";
import React, { useContext } from "react";
import { AppContext } from "./contextApi/contextAPi";
import style from "./style.module.css";
function ImageData() {
  const { data, selectedOption } = useContext(AppContext);
  console.log("da", data);
  console.log("se", selectedOption);
  return (
    <div className="flex flex-wrap gap-4 mt-20 items-center justify-center">
      {data.map((image, index) => (
        <div
          key={index}
          className={`${style.hoverEffect} relative h-[300px] w-[30%] overflow-hidden`}
        >
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className="w-full h-full rounded"
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
          <div
            className={`${style.heading} absolute  bottom-full left-0 rounded-md w-full h-full flex justify-center items-center bg-black bg-opacity-50 text-white `}
          >
            <h3 className="text-xl text-center"> {image.alt_description}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageData;
