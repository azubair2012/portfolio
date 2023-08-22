import React from "react";
import Project from "../components/Project";
import Crypto from "/public/assets/images/crypto.png";
import Transition from "../components/Transition";
import Art from "/public/assets/images/art.png";
import Fashion from "/public/assets/images/fashion.png";
import PGB from "/public/assets/images/pgb.jpg";

// import Bike from "/public/assets/images/bike.png";

const Projects = () => {
  return (
    <div className=" overflow-hidden">
      <div>
        <Transition />
      </div>

      <div className="flex flex-col gap-8 items-center">
        <div className="text-center font-title lg:font-extrabold lg:text-[100px] md:text-[60px] text-[30px] font-medium pt-6 lg:pt-20">
          Imagination Trumps Knowledge!
        </div>
        <Project
          image={PGB}
          description={"E-Commerce Site"}
          header={"Engineering Website"}
          alt={"null"}
          url="https://pgbelectronic.com/"
          github={"https://github.com/azubair2012/PGB_electronics"}
        />
        <Project
          image={Fashion}
          description={"E-Commerce Site"}
          header={"Fashion Website"}
          alt={"null"}
          url="https://projects-beta-ochre.vercel.app/"
          github={"https://github.com/azubair2012/projects"}
        />
        <Project
          image={Art}
          description={"Event Booking Site"}
          header={"Art Gellary"}
          alt={"null"}
          url={"https://projects-beta-ochre.vercel.app/art"}
          github={"https://github.com/azubair2012/projects"}
        />
        <Project
          image={Crypto}
          description={"Crypto Trading App"}
          header={"Crypto Trading App"}
          alt={"null"}
          url="https://projects-beta-ochre.vercel.app/crypto"
          github={"https://github.com/azubair2012/projects"}
        />
      </div>
    </div>
  );
};

export default Projects;
