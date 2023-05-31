import Link from "next/link";
import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { FiDribbble } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t-4 border-[#A93800] text-center bg-[#003336] w-screen invisible md:visible lg:visible pt-4">
      <div className="lg:text-[40px] text-[24px] text-white font-title">
        Building your online presence, one pixel at a time
      </div>
      <div className="flex justify-center gap-10 py-2  text-white">
        <p>
          &copy; <span>{currentYear}</span> All rights reserved.
        </p>
        <p className=" text-white">
          Built with 🤍 by <Link href="/">Studio Zubair</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
