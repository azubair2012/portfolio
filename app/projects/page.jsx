import React from "react";
import Project from "../components/Project";
import Crypto from "/public/assets/images/crypto.webp";
import Transition from "../components/Transition";
import Art from "/public/assets/images/art.webp";
import Fashion from "/public/assets/images/fashion.webp";
import PGB from "/public/assets/images/pgb.webp";
import Jam from "/public/assets/images/jam.webp";
import JR from "/public/assets/images/jandr.webp";
import Crud from "/public/assets/images/crud.webp";
import Padma from "/public/assets/images/padma.webp";

const Projects = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <Transition />
      </div>
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-center font-title lg:font-extrabold lg:text-[100px] md:text-[60px] text-[30px] font-medium pt-6 lg:pt-20">
          Imagination Trumps Knowledge!
        </h1>
        <Project
          image={JR}
          description={"Car insurance website"}
          header={"J & R Insurance"}
          alt={"jr"}
          url="https://jandrinsure.co.uk/"
          github={"https://github.com/azubair2012/jandr"}
        />
        <Project
          image={Crud}
          description={"Employee logging app using MERN stack "}
          header={"MERN Project"}
          alt={"null"}
          url="https://crud-project-red.vercel.app/"
          github={
            "https://github.com/azubair2012/crud_project/tree/master/frontend"
          }
        />
        <Project
          image={Padma}
          description={"Holiday Booking Site"}
          header={"Padma Tours & Travels International"}
          alt={"homepage"}
          url="https://padmatravels.netlify.app"
          github={"https://github.com/azubair2012/padma_travels"}
        />
        <Project
          image={PGB}
          description={"Portfolio"}
          header={"Engineering Website"}
          alt={"null"}
          url="https://pgbelectronic.com/"
          github={"https://github.com/azubair2012/PGB_electronics"}
        />
        <Project
          image={Jam}
          description={"Portfolio"}
          header={"Law Firm"}
          alt={"null"}
          url="https://loquacious-alpaca-196463.netlify.app/"
          github={"https://github.com/azubair2012/JAM_associates"}
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
