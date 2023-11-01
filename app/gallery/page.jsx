"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "/public/assets/images/gallery/golden_text_effect_on_grunge_background.webp";
import Logo2 from "/public/assets/images/gallery/logo-png.webp";
import Logo3 from "/public/assets/images/gallery/studio_zubair.webp";
import Pic1 from "/public/assets/images/gallery/a3.webp";
import Pic2 from "/public/assets/images/gallery/asr.webp";
import Pic3 from "/public/assets/images/gallery/Banner_12.webp";
import Pic4 from "/public/assets/images/gallery/sdf.webp";
import Pic5 from "/public/assets/images/gallery/Capture.webp";
import Pic7 from "/public/assets/images/gallery/Cover.webp";
import Pic8 from "/public/assets/images/gallery/Rusty.webp";
import Pic9 from "/public/assets/images/gallery/879.webp";
import Pic10 from "/public/assets/images/gallery/Burger logo.webp";
import Pic11 from "/public/assets/images/gallery/lan_logo.webp";
import Pic12 from "/public/assets/images/gallery/facebook_cover_page_logo.webp";
import Pic13 from "/public/assets/images/gallery/Poster final.webp";
import Pic14 from "/public/assets/images/gallery/Drink.webp";
import Pic6 from "/public/assets/images/gallery/Empty-Glass-Jar-Mockup.webp";
import Pic15 from "/public/assets/images/gallery/graphic_design.webp";
import Pic16 from "/public/assets/images/gallery/Delivery-Final.webp";
import Pic17 from "/public/assets/images/gallery/Home.webp";

import Pictureframe from "/app/components/PictureFrame";
import Transition from "/app/components/Transition";

const Gallery = () => {
  const [dataFromChild, setDataFromChild] = useState();
  const [modal, setModal] = useState(true);
  const switchModal = (data) => {
    setModal(!modal);
    setDataFromChild(data);
  };

  return (
    <div>
      <div>
        <Transition />
      </div>
      {/* modal */}
      <div onClick={switchModal}>
        <div className="absolute z-50">
          <div
            className={
              modal
                ? "hidden"
                : "backdrop-blur-md w-screen h-screen flex justify-center items-center"
            }
          >
            <Image
              src={dataFromChild}
              alt="null"
              className="rounded-3xl border-8 border-[#003336]"
            />
          </div>
        </div>
      </div>
      {/* modal end */}

      <h1 className="text-center font-title lg:font-extrabold lg:text-[100px] md:text-[60px] text-[30px] font-medium my-10">
        Here Art Meets Inspiration
      </h1>
      <div className="mx-[20vw] flex flex-wrap gap-8">
        <Pictureframe
          src={Pic14}
          switchModal={switchModal}
          title={"Product Branding"}
        />
        <Pictureframe
          src={Logo}
          switchModal={switchModal}
          title={"Corporate Logo"}
        />
        <Pictureframe
          src={Pic7}
          switchModal={switchModal}
          title={"Facebook Cover Photo"}
        />
        <Pictureframe
          src={Logo2}
          switchModal={switchModal}
          title={"Pet Shop Logo"}
        />
        <Pictureframe
          src={Pic17}
          switchModal={switchModal}
          title={"Bike Shop Website"}
        />
        <Pictureframe
          src={Pic6}
          switchModal={switchModal}
          title={"Product Branding"}
        />
        <Pictureframe
          src={Pic15}
          switchModal={switchModal}
          title={"Cover Photo"}
        />
        <Pictureframe
          src={Pic16}
          switchModal={switchModal}
          title={"Cafe Menu Leaflet"}
        />

        <Pictureframe src={Pic1} switchModal={switchModal} title={"NGO Logo"} />
        <Pictureframe
          src={Pic2}
          switchModal={switchModal}
          title={"Charity Organisation Logo"}
        />
        <Pictureframe
          src={Pic3}
          switchModal={switchModal}
          title={"Cafe Banner"}
        />
        <Pictureframe
          src={Logo3}
          switchModal={switchModal}
          title={"Concept Logo"}
        />
        <Pictureframe
          src={Pic4}
          switchModal={switchModal}
          title={"Car Insurance Website"}
        />
        <Pictureframe
          src={Pic12}
          switchModal={switchModal}
          title={"Facebook Cover Photo"}
        />
        <Pictureframe
          src={Pic5}
          switchModal={switchModal}
          title={"Law Firm Website"}
        />
        <Pictureframe
          src={Pic8}
          switchModal={switchModal}
          title={"Typography"}
        />
        <Pictureframe
          src={Pic9}
          switchModal={switchModal}
          title={"Cover Design"}
        />
        <Pictureframe
          src={Pic10}
          switchModal={switchModal}
          title={"Cafe Logo"}
        />
        <Pictureframe
          src={Pic11}
          switchModal={switchModal}
          title={"Youtube Channel Logo"}
        />

        <Pictureframe
          src={Pic13}
          switchModal={switchModal}
          title={"Cafe Banner"}
        />
      </div>
    </div>
  );
};

export default Gallery;
