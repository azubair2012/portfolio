import Image from "next/image";

import Link from "next/link";
import Face from "/public/assets/images/face.webp";
import Hire from "./components/Hire";
import Transition from "./components/Transition";
const Home = () => {
  return (
    <main className="pt-[50px] lg:pt-0 h-full bg-[#E6F4F1]">
      <div>
        <Transition />
      </div>
      <div>
        <Hire />
      </div>
      <div className="flex justify-center items-center flex-col lg:gap-[100px] lg:flex-row lg:pt-10">
        <div>
          <Image
            priority={true}
            src={Face}
            alt="Face"
            className="-mt-[20px] w-[250px] lg:w-[700px] md:w-[500px]"
          />
        </div>

        <div className="lg:text-left text-center  ">
          <div className="font-title lg:font-extrabold lg:text-[40px] md:text-[30px] text-[30px] font-medium">
            Turning Vision Into Reality
            <br /> With &gt;
            <span>
              <span className="text-[#166b92]"> Code </span>
              And <span className="text-[#e95858]">Design </span>
            </span>
            &lt;
          </div>
          <div className="font-title lg:font-extrabold lg:text-[30px] text-[20px] font-medium">
            Hi,
          </div>
          <div className="text-[#2b8888] font-title lg:font-extrabold lg:text-[100px]  text-[50px] font-bold">
            I'm Zubair
          </div>
          <div className="justify-evenly font-title lg:text-[30px] text-[16px]">
            A full-stack software developer & designer. <br /> I turn ideas into
            innovative applications.
          </div>
          <div className="flex gap-8 sm:pb-10 justify-center lg:justify-start">
            <Link
              href="/projects"
              className=" font-title mt-5 bg-gray-800 text-[20px] text-white rounded-[4px] w-[120px] h-10 flex items-center justify-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
            >
              Visit Project
            </Link>{" "}
            <Link
              href="/about"
              className=" font-title mt-5 bg-gray-800 text-[20px] text-white rounded-[4px] w-[120px] h-10 flex items-center justify-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
