import React from "react";
import Project from "../components/Project";
import Bike from "/public/assets/images/Bike.png";
import Crypto from "/public/assets/images/crypto.jpg";
import Transition from "../components/Transition";
import Art from "/public/assets/images/art.JPG";
import Fashion from "/public/assets/images/fashion.JPG";

const Projects = () => {
  return (
    <div className=" overflow-hidden">
      <div>
        <Transition />
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="text-center font-title lg:font-extrabold lg:text-[120px] md:text-[60px] text-[30px] font-medium pt-6 lg:pt-20">
          Imagination Trumps Knowledge!
        </div>
        <Project
          image={Art}
          title={"Website"}
          description={"Event Booking Site"}
          header={"Art Gellary"}
          alt={"null"}
          url={"https://projects-beta-ochre.vercel.app/art"}
          github={"https://github.com/azubair2012/projects"}
        />
        <Project
          image={Fashion}
          title={"Fashion Website"}
          description={"Fashion Website"}
          header={"E-Commerce Site"}
          alt={"null"}
          url="https://projects-beta-ochre.vercel.app/"
          github={"https://github.com/azubair2012/projects"}
        />
        <Project
          image={Crypto}
          title={"App"}
          description={"Crypto Trading App"}
          header={"Crypto Trading App"}
          alt={"null"}
          url="https://projects-beta-ochre.vercel.app/crypto"
          github={"https://github.com/azubair2012/projects"}
        />
        <Project
          image={Bike}
          title={"E-Commerce"}
          description={"This is a Bike shop"}
          header={"Bike SHop"}
          alt={"null"}
          priority={true}
          url="https://projects-beta-ochre.vercel.app/bike"
          github={"https://github.com/azubair2012/projects"}
        />
      </div>
    </div>
  );
};

export default Projects;
