import Image from "next/image";
import Link from "next/link";
import Face from "/public/assets/images/face.png";
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
      <div className="flex justify-center items-center flex-col lg:flex-row">
        <div>
          <Image
            priority={true}
            src={Face}
            alt="Face"
            className="w-[200px] lg:w-[900px] md:w-[700px]"
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
            A full-stack web developer & graphic designer. <br /> I turn ideas
            into innovative web applications.
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
