import React from "react";
import Image from "next/image";
import Link from "next/link";
import Transition from "../components/Transition";
import Portrait from "/public/assets/images/final-1.webp";
import Counter from "../components/Counter";
import Mongo from "/public/assets/skills/mongo.webp";
import Css from "/public/assets/skills/css.webp";
import Javascript from "/public/assets/skills/javascript.webp";
import ReactImg from "/public/assets/skills/react.webp";
import Tailwind from "/public/assets/skills/tailwind.webp";
import Github from "/public/assets/skills/github1.webp";
import Firebase from "/public/assets/skills/firebase.webp";
import NextJS from "/public/assets/skills/nextjs.webp";
import Html from "/public/assets/skills/html.webp";
import Ai from "/public/assets/skills/ai.webp";
import PS from "/public/assets/skills/ps.webp";
import Fig from "/public/assets/skills/fig.webp";
import XD from "/public/assets/skills/xd.webp";
import Node from "/public/assets/skills/node.webp";
import BS from "/public/assets/skills/boot.webp";
import WP from "/public/assets/skills/wp.webp";
import AWS from "/public/assets/skills/aws.webp";
import Skill from "../components/Skill";

const About = () => {
  return (
    <main className="overflow-hidden">
      <div>
        <Transition />
      </div>
      {/* About Section */}
      <h1 className="text-center font-title lg:font-extrabold lg:text-[100px] md:text-[60px] text-[35px] font-medium pt-10">
        Passion Fuels Purpose!
      </h1>
      <div className="flex lg:flex-row flex-col justify-evenly items-center lg:text-left text-center">
        <div>
          <div className="text-teal-700 text-[30px] font-semibold">
            Who I Am
          </div>
          <div className="px-2 lg:w-[40vw] w-full text-[24px] flex justify-evenly lg:text-left font-title">
            I'm Abu Zubair, a passionate web developer dedicated to crafting
            unique and user-friendly online experiences. With a keen eye for
            design and a love for coding, I specialize in transforming creative
            concepts into captivating websites that leave a lasting impression.
            From responsive layouts and intuitive navigation to seamless
            interactions and visually stunning designs, I approach each project
            with enthusiasm and attention to detail. Whether you need a simple
            yet elegant portfolio site, a dynamic e-commerce platform, or a
            cutting-edge web application, I am here to bring your ideas to life.
            I have not only honed my skills in HTML, CSS, and JavaScript but
            also in the major frameworks. Beyond coding, I value clean and
            efficient code practices, as well as continuous learning and growth.
            I am always exploring new technologies and frameworks, seeking
            innovative solutions to deliver outstanding results. I take pride in
            my ability to adapt to evolving industry standards and leverage the
            latest tools to optimize performance and enhance user experience.
          </div>
          <div>
            <Link href="/projects">
              <p className="py-2 text-[#A93800] hover:text-teal-700 underline cursor-pointer text-[20px]">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
          {/* Counter */}
          <div className="flex items-center justify-center py-7 ">
            <Counter
              cclass=" text-[30px] lg:text-[70px] font-bold  text-[#007F7F]"
              pclass="text-[20px] lg:text-[20px] font-bold "
            />
          </div>
        </div>
        <div className="lg:w-[500px] w-[300px] pt-4 ">
          <Image src={Portrait} alt="Photo" priority={true} />
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col text-center items-center py-16">
        <h1 className="font-bold text-[90px] font-title">Skills</h1>
        {/* skill test */}
        <div className="w-[70vw] lg:w-[60vw]">
          <div className=" flex flex-wrap justify-between gap-4">
            <div>
              <Skill image={ReactImg} name="React" />
            </div>
            <div>
              <Skill image={NextJS} name="NextJS" />
            </div>
            <div>
              <Skill image={Node} name="NodeJS" />
            </div>
            <div>
              <Skill image={Mongo} name="Mongo DB" />
            </div>
            <div>
              <Skill image={AWS} name="aws" />
            </div>
            <div>
              <Skill image={WP} name="WordPress" />
            </div>
            <div>
              <Skill image={Github} name="Github" />
            </div>
            <div>
              <Skill image={Tailwind} name="Tailwind CSS" />
            </div>
            <div>
              <Skill image={BS} name="Bootstrap" />
            </div>
            <div>
              <Skill image={Ai} name="Illustrator" />
            </div>
            <div>
              <Skill image={PS} name="Photoshop" />
            </div>
            <div>
              <Skill image={Fig} name="Figma" />
            </div>
          </div>
        </div>
        {/* skill test ends */}
      </div>
    </main>
  );
};

export default About;
