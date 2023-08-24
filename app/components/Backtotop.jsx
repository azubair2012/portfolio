"use client";
import React from "react";
import { BsArrowUpCircle } from "react-icons/bs";

const Backtotop = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button
        className="absolute right-16 opacity-50 hover:opacity-100 cursor-pointer flex flex-col text-white justify-center items-center"
        onClick={goToTop}
      >
        <BsArrowUpCircle color="white" size={40} />
        Back to top
      </button>
    </div>
  );
};

export default Backtotop;
