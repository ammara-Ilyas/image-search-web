"use client";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./contextApi/contextAPi";
import bg from "@/image/bg.avif";
import axios from "axios";

const apiKey = "VG4HY3iiinchcwaxgyEpZ7A7ogG81UOWZkdV0GomubM";
function Search() {
  const [query, setQuery] = useState("");
  const { data, setData, selectedOption, setSelectedOption } =
    useContext(AppContext);
  const fetchImage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}  `
      );
      // const data = response.json();
      setData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  console.log("opt", selectedOption);
  // const handleSelectChange = (num) => {
  //   console.log(num);
  // };
  const options = [
    {
      name: "Image 1",
      num: 1,
    },
    {
      name: "Image 2",
      num: 2,
    },
    {
      name: "Image 3",
      num: 3,
    },
    {
      name: "Image 4",
      num: 4,
    },
  ];
  return (
    <section
      className="border-2  relative h-96"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="content flex flex-col border-2 justify-center h-full items-center text-white">
        <h1 className="text-5xl font-bold mb-4">AI image generator Tool</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          labore.
        </p>
        <form
          className="flex border-2 w-1/2 items-center rounded-full overflow-hidden justify-between bg-white border-pink-500 mt-7 "
          onSubmit={fetchImage}
        >
          <input
            type="text"
            className="outline-none  border-none text-black  w-4/5 py-2 px-4"
            placeholder="Enter Your Own Choice"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className=" w-28 -mr-7 py-2">
            <select
              className="hover:text-gray-600  border-none outline-none text-black "
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {options.map((item, i) => (
                <option
                  value={item.num}
                  key={i}
                  onChange={() => handleSelectChange(item.num)}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className=" bg-white hover:text-gray-600 bg-opacity-0 border-none outline-none text-black py-2 ml-4 pr-3 "
          >
            Generate
          </button>
        </form>
      </div>
    </section>
  );
}

export default Search;