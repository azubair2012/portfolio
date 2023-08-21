import React from "react";
import Image from "next/image";
import Link from "next/link";
// external import
import Transition from "../components/Transition";
import Inst from "/public/assets/images/instagram.png";
import Face from "/public/assets/images/facebook.png";
import LinkedIn from "/public/assets/images/linkedin.png";
import Wapp from "/public/assets/images/whatsapp.png";
import Email from "/public/assets/images/email.png";
import Phone from "/public/assets/images/phone.png";
import Form from "../components/Form";

const page = () => {
  return (
    <div className="font-title">
      <div>
        <Transition />
      </div>
      <div className="text-center font-title lg:font-extrabold lg:text-[100px] md:text-[60px] text-[30px] font-medium pt-6 lg:pt-20">
        Let's Build Something Awesome!
      </div>
      {/* icon section */}
      <div className="lg:flex flex-cols justify-center ml-[70px] gap-10 py-10">
        <div className="w-[230px] lg:h-[320px] h-[240px] bg-[#003336] rounded-3xl flex items-center justify-center hover:scale-125 ease-in duration-100 shadow-2xl mb-4">
          <div className="w-[224px] lg:h-[300px] h-[220px] bg-[#b5f9f9] mb-3 rounded-3xl text-center flex items-center justify-center">
            {/* inner icon box */}
            <div className="flex justify-center items-center gap-6">
              <div className="flex flex-col gap-6 ">
                <Link
                  href="https://www.instagram.com/the_web_nomad/"
                  target="_blank"
                >
                  <Image
                    src={Inst}
                    alt="/"
                    width={50}
                    height={50}
                    className="hover:scale-125 ease-in duration-150 "
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/azubair108"
                  target="_blank"
                >
                  <Image
                    src={Face}
                    alt="/"
                    width={50}
                    height={50}
                    className="hover:scale-125 ease-in duration-150 "
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <Link href="https://wa.me/8801776909659" target="_blank">
                  <Image
                    src={Wapp}
                    alt="/"
                    width={50}
                    height={50}
                    className="hover:scale-125 ease-in duration-150 "
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/abu-zubair-a7482b1b7/"
                  target="_blank"
                >
                  <Image
                    src={LinkedIn}
                    alt="/"
                    width={50}
                    height={50}
                    className="hover:scale-125 ease-in duration-150 "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[230px] lg:h-[320px] h-[240px] bg-[#003336] rounded-3xl flex items-center justify-center hover:scale-125 ease-in duration-100 shadow-2xl mb-4">
          <div className="w-[14rem] lg:h-[300px] h-[220px] bg-[#b5f9f9] mb-3 rounded-3xl flex flex-col justify-center items-center">
            <div className="hover:scale-125 ease-in duration-150 ">
              <Link href="mailto:studio.zubair@gmail.com">
                <Image src={Email} width={50} height={50} />
              </Link>
            </div>
            <div className="text-[22px] font-bold pt-3">
              studio.zubair@gmail.com
            </div>
          </div>
        </div>
        <div className="w-[230px] lg:h-[320px] h-[240px] bg-[#003336] rounded-3xl flex items-center justify-center hover:scale-125 ease-in duration-100 shadow-2xl">
          <div className="w-[224px] lg:h-[300px] h-[220px] bg-[#b5f9f9] mb-3 rounded-3xl flex flex-col justify-center items-center">
            <div className="hover:scale-125 ease-in duration-150 ">
              <Link href="tel:+8801776909659">
                <Image src={Phone} width={50} height={50} />
              </Link>
            </div>
            <div className="text-[22px] font-bold pt-3">+88 01776909659</div>
          </div>
        </div>
      </div>
      {/* form section */}
      <div className="flex lg:flex-row flex-col-reverse justify-center gap-28 mt-2">
        <div className="lg:w-[560px] px-1 w-full h-[720px] rounded-3xl border-solid bg-[#003336] flex items-center justify-center">
          <div className="lg:w-[552px] w-full h-[700px] bg-[#00ADAD] mb-3 rounded-3xl flex flex-col items-center">
            {/* title text */}
            <div className="text-[30px] text-slate-900 font-bold pt-14">
              Have a project in mind?
              <br />
              GET IN TOUCH...
            </div>
            {/* main form */}
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
