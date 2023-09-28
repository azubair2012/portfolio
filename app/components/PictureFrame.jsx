"use client";
import Image from "next/image";

const Pictureframe = ({ src, switchModal, title }) => {
  return (
    <div
      onClick={() => {
        switchModal(src);
      }}
    >
      <div className="cursor-pointer hover:scale-110 ease-in duration-150 shadow-2xl rounded-2xl overflow-hidden w-[250px] h-[150px] flex justify-center items-center">
        <Image src={src} alt="pic" width={250} />
        <div className="bg-[#000000a3] absolute overflow-hidden w-[250px] h-[32px] text-center text-lg text-white mt-24">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Pictureframe;
