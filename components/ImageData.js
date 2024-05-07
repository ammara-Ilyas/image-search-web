"use client";
import React, { useContext } from "react";
import { AppContext } from "./contextApi/contextAPi";
import style from "./style.module.css";
import download from "@/image/download.png";
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
            className="w-full h-full rounded-md"
          />
          <a
            href={image.links.download}
            target="_blank"
            className="absolute bottom-2 right-2 bg-white p-1 rounded-full "
          >
            <img
              src={download.src}
              alt="Download"
              className="w-7 h-7 text-xl hover:text-red-300"
            />
          </a>
          <div
            className={`${style.heading} absolute  -top-full left-0 rounded-md w-full h-5/6 flex justify-center items-center bg-black bg-opacity-50 text-white `}
          >
            <h3 className="text-xl text-center"> {image.alt_description}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageData;
