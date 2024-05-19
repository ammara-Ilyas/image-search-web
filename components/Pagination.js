"use client";
import React, { useState, useContext } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { AppContext } from "./contextApi/contextAPi";

const Pagination = () => {
  const { page, setPage, lastPage } = useContext(AppContext);
  const handlePagination = (num) => {
    setPage(num);
  };
  const handleprenext = (num) => {
    console.log(num);
    if (page > 0 || page < lastPage) {
      setPage((prePage) => prePage + num);
    }
  };
  return (
    <>
      <div className="flex items-center  mb-28 w-[80%] my-5 mx-auto">
        {page > 1 ? (
          <>
            <button
              className="py-[10px] px-4 hover:bg-slate-100 text-2xl border-2 bg-slate-50"
              onClick={() => handleprenext(-1)}
            >
              <GrFormPrevious />
            </button>
          </>
        ) : (
          <></>
        )}
        <button
          className="py-2 px-4 text-xl border-2 hover:bg-slate-100 bg-slate-50"
          onClick={() => handlePagination(page)}
        >
          {page}
        </button>
        {page < lastPage ? (
          <>
            <button
              className="py-[10px] px-4 text-2xl border-2 bg-slate-50"
              onClick={() => handleprenext(1)}
            >
              <MdOutlineNavigateNext />
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Pagination;
