import React from "react";
import Image from "next/image";

const Skill = (props) => {
  return (
    <div
      id="skill"
      className="gap-4 my-1 lg:w-[220px] lg:h-[120px] w-[110px] h-[80px] ring-offset-[5px] hover:ring-2 bg-[#afe1cd] flex justify-center items-center shadow-xl rounded-xl hover:scale-125 ease-in duration-150 "
    >
      <div className="w-14">
        <Image src={props.image} alt="/" />
      </div>
      <div className=" invisible lg:visible absolute lg:relative lg:flex items-center justify-center font-bold text-xl font-text">
        {props.name}
      </div>
    </div>
  );
};

export default Skill;
