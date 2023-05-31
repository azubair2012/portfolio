import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLogInCircle } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import { SiAzuredataexplorer } from "react-icons/si";
import { GiLava } from "react-icons/gi";

function fashion() {
  return (
    <div>
      {/* navbar */}
      <div
        id="navBar"
        className="flex text-white mt-5 font-mono justify-between bg-black rounded-[70px] w-[1260px] h-[80px] mx-auto"
      >
        <Link href="/">
          <div
            id="logo"
            className=" items-center flex justify-center w-[150px] h-20 border-solid border-4 rounded-[40px] border-orange-500"
          >
            <GiLava size={50} />
          </div>
        </Link>
        <div id="nav" className="flex gap-2">
          <Link href="">
            <div className="border-orange-500 items-center flex justify-center w-[230px] h-20 rounded-[40px] border-solid border-4">
              NEW ARRIVALS
            </div>
          </Link>
          <Link href="">
            <div className=" items-center flex justify-center w-[230px] h-20 rounded-[40px] border-solid border-4 border-orange-500">
              BRANDS
            </div>
          </Link>
          <Link href="#collection">
            <div className=" items-center flex justify-center w-[230px] h-20 rounded-[40px] border-solid border-4 border-orange-500">
              OUR COLLECTIONS
            </div>
          </Link>
        </div>

        <div id="cart_log" className="flex gap-2">
          <Link href="#">
            <div className=" items-center flex justify-center w-[130px] h-20 rounded-[40px] border-solid border-4 border-orange-500">
              CART <HiShoppingCart />
            </div>
          </Link>
          <Link href="#">
            <div className=" items-center flex justify-center w-[130px] h-20 rounded-[40px] border-solid border-4 border-orange-500">
              LOGIN
              <BiLogInCircle />
            </div>
          </Link>
        </div>
      </div>
      {/* main box */}
      <div className="bg-black mx-auto mt-2 text-white rounded-[70px] w-[1260px] h-[900px]">
        <div className="flex p-5 justify-between">
          {/* left box */}
          <div className=" flex flex-col gap-4 rounded-[60px] w-[600px] h-[850px]">
            <div className=" rounded-[60px] ">
              <img
                src="https://images.pexels.com/photos/2584279/pexels-photo-2584279.jpeg"
                alt="#"
                className="object-cover h-[610px] w-[600px] rounded-[60px]"
              />
            </div>

            {/* button group */}
            <div className=" text-[24px] font-mono flex-col w-[600px] rounded-[60px] h-[230px] flex">
              <div className=" gap-2 my-auto justify-center flex flex-row">
                <div className=" items-center flex justify-center w-[280px] h-20 rounded-[40px] border-solid border-4 border-sky-100">
                  100% COTTON MADE
                </div>
                <div className=" items-center flex justify-center w-[280px] h-20 rounded-[40px] border-solid border-4 border-sky-100">
                  VERATILE STYLES
                </div>
              </div>
              <div className=" p-3.5 flex flex-row justify-center pb-4 gap-2">
                <div className=" items-center flex justify-center w-[340px] h-20 rounded-[40px] border-solid border-4 border-sky-100">
                  ECO-FRIENDLY MATERIALS
                </div>
                <div className=" items-center flex justify-center w-[230px] h-20 rounded-[40px] border-solid border-4 border-sky-100">
                  UPF PROTECTION
                </div>
              </div>
            </div>
          </div>
          {/* right box */}
          <div className=" gap-4 flex flex-col rounded-[60px] w-[600px]">
            <div className="">
              <img
                src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg"
                alt="#"
                className=" h-[500px]  rounded-[60px] w-[600px] object-cover"
              />
            </div>
            <div className=" gap-4 flex flex-row h-[350px]rounded-[60px] w-[600px]">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg"
                  alt="#"
                  className="object-cover rounded-[60px] w-[400px] h-[350px]"
                />
              </div>
              <div className=" flex justify-center items-center bg-blue-400 w-[185px] h-[350] rounded-[60px]">
                <Link href="#collection">
                  <p className="-rotate-90 text-[30px] font-mono flex gap-1 font-bold">
                    EXPLORE <SiAzuredataexplorer />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {/* * circle */}
          <div className="items-center pt-[15px] flex justify-center text-red-600 absolute ml-[560px] mt-[455px] rounded-full w-[100px] h-[100px] text-[60px] bg-black ">
            <span className=" animate-pulse">❤️</span>
          </div>
        </div>
      </div>
      {/* item page */}
      <div
        id="collection"
        className="flex flex-col justify-center items-center mt-[70px] mx-auto w-screen h-screen"
      >
        <div>
          <h1>OUR COLLECTIONS</h1>
        </div>

        <div className=" mx-auto mt-4 rounded-[70px] w-[1260px]"></div>
      </div>
    </div>
  );
}

export default fashion;
