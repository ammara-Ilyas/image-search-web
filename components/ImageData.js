"use client";
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "./contextApi/contextAPi";
import download from "@/image/download.png";
import Pagination from "./Pagination";

function ImageData() {
  const [width, setWidth] = useState("");
  const { data, selectedOption } = useContext(AppContext);
  // console.log("se", selectedOption);
  useEffect(() => {
    if (selectedOption === "1") {
      setWidth("w-[95%] h-[350px] sm:w-[80%] lg:w-[60%] sm:h-[450px]");
    } else if (selectedOption === "2") {
      setWidth("w-[45%] h-[350px] md:h-[400px] lg:h-[450px]");
    } else if (selectedOption === "3") {
      setWidth("w-[30%] h-[200px] sm:w-[31%]  sm:h-[300px] ");
    } else if (selectedOption === "4") {
      setWidth("w-[20%] h-[100px] sm:h-[150px] md:w-[23%] md:h-[250px]  ");
    }
    console.log(width);
  }, [selectedOption]);
  return (
    <>
      {data ? (
        <>
          <div className="flex flex-wrap gap-4 justify-center mt-16 mb-8 w-[97%] mx-auto items-center ">
            {data.map((image, index) => (
              <div
                key={index}
                className={` ${width} relative group hover duration-500 overflow-hidden`}
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
                  className={` group-hover:top-0 absolute duration-500  -top-full left-0 rounded-md w-full h-5/6 flex justify-center items-center bg-black bg-opacity-50 text-white `}
                >
                  <h3 className="text-xl text-center">
                    {" "}
                    {image.alt_description}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Pagination />
          </div>
        </>
      ) : (
        <div className="text-3xl text-red-300 text-center">No Image found</div>
      )}
    </>
  );
}

export default ImageData;
