"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ct from "/public/assets/icons/ct.svg";

function Hire() {
  return (
    <div className="hidden lg:flex md:hidden items-center justify-center lg:absolute mt-[600px] pl-[70px] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
      <Image src={ct} alt="Hire Me" className=" animate-spin-slow w-[180px]" />

      <Link
        href="https://www.upwork.com/workwith/abuzubair"
        className=" hover:bg-white hover:text-black bg-black text-white w-[80px] h-[80px] rounded-full flex items-center justify-center absolute font-bold border-solid border border-black"
        target="_blank"
      >
        Hire Me
      </Link>
    </div>
  );
}

export default Hire;
