"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import logo from "/public/assets/images/sz_logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      {/* desktop nav */}
      <div className="lg:flex md:flex sm:flex hidden items-center justify-evenly pt-6 ">
        <div>
          <Link href="/">
            <Image src={logo} width={80} />
          </Link>
        </div>
        <div className="flex gap-[60px] text-[30px] font-title ">
          <Link
            className="hover:underline underline-offset-4 decoration-[#A93800]"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:underline underline-offset-4 decoration-[#A93800]"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:underline underline-offset-4 decoration-[#A93800]"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="hover:underline underline-offset-4 decoration-[#A93800]"
            href="/gallery"
          >
            Gallery
          </Link>
          <Link
            className="hover:underline underline-offset-4 decoration-[#A93800] lg:animate-bounce"
            href="/contact"
          >
            Contact Us
          </Link>

          <Link
            className="hover:underline animate-bounce invisible md:visible sm:visible lg:invisible underline-offset-4 decoration-[#A93800]"
            href="https://wa.me/8801776909659"
            target="_blank"
          >
            Hire Me
          </Link>
        </div>
      </div>

      {/* mobile nav */}
      <div className="sm:hidden">
        <div
          className={nav ? " hidden" : " pt-8 px-8 flex justify-between  "}
          onClick={handleNav}
        >
          <div>
            <HiMenu size={35} />
          </div>
          <div className="text-white bg-[#003336] animate-bounce rounded-[4px] w-[80px] h-8 flex items-center justify-center">
            <Link href="https://wa.me/8801776909659" target="_blank">
              Hire Us
            </Link>
          </div>
        </div>
        {/* mobile nav panel */}
        <div className="flex justify-center">
          <div className="absolute z-50 bottom-36">
            <div
              className={
                !nav
                  ? " hidden"
                  : " rounded-lg w-[90vw] h-[70vh] bg-black/70 backdrop-sepia-0 backdrop-blur-md flex flex-col gap-10 justify-center items-center "
              }
            >
              <div className="flex items-center justify-center bg-white text-black text-[30px] w-[60px] h-[60px] rounded-full">
                AZ
              </div>
              <div
                onClick={handleNav}
                className="gap-5 flex flex-col text-[20px] font-title text-center text-white"
              >
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
                <Link
                  className="bg-white text-black mt-6 animate-bounce rounded-[4px] w-[100px] h-8 flex items-center justify-center"
                  href="https://wa.me/8801776909659"
                  target="_blank"
                >
                  Hire Us
                </Link>
              </div>
              <div onClick={handleNav}>
                <AiOutlineClose style={{ color: "white" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
