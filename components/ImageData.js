"use client";
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "./contextApi/contextAPi";
import style from "./style.module.css";
import download from "@/image/download.png";
function ImageData() {
  const [width, setWidth] = useState("");
  const { data, selectedOption } = useContext(AppContext);
  console.log("se", selectedOption);
  useEffect(() => {
    if (selectedOption === "1") {
      setWidth("w-[60%] h-[450px]");
    } else if (selectedOption === "2") {
      setWidth("w-[45%] h-[450px]");
    } else if (selectedOption === "3") {
      setWidth("w-[31%]  h-[330px] ");
    } else if (selectedOption === "4") {
      setWidth("w-[24%]  h-[300px]");
    }
    console.log(width);
  }, [selectedOption]);

  return (
    <div className="flex flex-wrap gap-4 my-16 w-[97%] mx-auto items-center justify-center">
      {data &&
        data.map((image, index) => (
          <div
            key={index}
            className={`${style.hoverEffect} ${width} relative   overflow-hidden`}
          >
            <img
              src={image.urls.small}
              alt={image.alt_description}
              className="w-full h-full rounded-md"
            />
            <a
              href={image.links.download}
              target="_blank"
              className="absolute bottom-2 right-2 hover:scale-105 bg-white p-1 rounded-full "
            >
              <img
                src={download.src}
                alt="Download"
                className="w-7 h-7 text-xl hover:bg-red-300"
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
