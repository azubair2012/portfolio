import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
const Pro = (props) => {
  return (
    <div className="overflow-hidden mb-10">
      <div className=" bg-[#003336] w-[70vw] lg:w-[60vw] h-[430px] rounded-tl-[30px] rounded-tr-[40px] rounded-bl-[40px] rounded-[20px] z-10 relative">
        <div className=" ml-[3px] w-[69vw] lg:w-[59vw] h-[420px] bg-[#00ADAD] border-solid border-gray-900 border-[1px]  rounded-bl-[40px] rounded-[20px] z-20 absolute ">
          <div className=" pt-10 lg:pt-6 md:pt-0 flex items-center justify-evenly my-9 lg:my-5 gap-5 flex-col lg:flex-row">
            <div className="lg:w-[30vw] md:w-[35vw] w-[45vw] border-[2px] border-black rounded-[10px] overflow-hidden cursor-pointer shadow-2xl ">
              <Image
                src={props.image}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                alt=""
              />
            </div>
            <div className="text-center  font-title">
              <div className=" text-[30px] lg:text-[40px] font-extrabold">
                {props.header}
              </div>
              <div className="text-[20px]">{props.description}</div>

              {/* button group */}
              <div className="flex gap-8 items-center justify-center pt-6">
                <Link
                  href={`${props.github}`}
                  className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
                  target="_blank"
                >
                  <BsGithub size={40} />
                </Link>
                <Link
                  href={`${props.url}`}
                  target="_blank"
                  className=" bg-gray-800 text-white rounded-[4px] w-[100px] h-8 justify-center items-center flex transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
                >
                  Visit Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pro;
