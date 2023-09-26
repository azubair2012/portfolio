import Link from "next/link";
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { FiDribbble } from "react-icons/fi";
import Backtotop from "../components/Backtotop";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="lg:mt-[100px] border-t-4 border-[#A93800] text-center bg-[#003336] w-screen md:visible mt-10 lg:visible py-4">
      <div className="lg:text-[40px] text-[24px] text-white font-title">
        Building your online presence, one pixel at a time
      </div>
      <Backtotop />
      {/* btn */}
      <div className="flex justify-center gap-4">
        <Link href="https://www.facebook.com/azubair108" target="_blank">
          <BsFacebook color="white" />
        </Link>
        <Link href="https://www.instagram.com/the_web_nomad/" target="_blank">
          <ImInstagram color="white" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/abu-zubair-a7482b1b7/"
          target="_blank"
        >
          <BsLinkedin color="white" />
        </Link>
        <Link href="https://www.instagram.com/the_web_nomad/" target="_blank">
          <FiDribbble color="white" />
        </Link>
        <Link href="https://wa.me/8801776909659" target="_blank">
          <BsWhatsapp color="white" />
        </Link>
      </div>
      <div className="flex justify-center gap-10 py-2  text-white">
        <p>
          &copy; <span>{currentYear}</span> All rights reserved.
        </p>
        <p className=" text-white hover:underline">
          Built with 🤍 by <Link href="/">Studio Zubair</Link>{" "}
        </p>
        <Link
          href="https://azubair2012.github.io/privacy-policy/"
          className="hover:underline"
          target="_blank"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
