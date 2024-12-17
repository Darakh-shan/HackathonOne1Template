import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main className="w-full h-full md:h-[400px] flex flex-col md:flex-row justify-between items-start bg-[#F2F0F1]">
      {/* left */}
      <div className=" w-full md:w-[400px] mt-4 md:mt-12 ml-14 pr-8">
        <h1 className="text-2xl md:text-5xl font-extrabold">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-sm md:pt-4 ">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-black mt-4 rounded-[16px] text-white text-sm px-8 py-2 hover:bg-gray-300">
          Shop Now
        </button>
      </div>
      {/* right */}
      <div className="relative">
        {/* right picture */}
        <Image
          src={"/profile.png"}
          alt="cloth"
          width={200}
          height={200}
          className="w-[500px] h-[400px] "
        ></Image>
        <Image
          src={"/star.png"}
          alt="star"
          width={100}
          height={50}
          className=" w-20 pl-8 absolute top-6 left-4 md:top-60 "
        ></Image>
        <Image
          src={"/star.png"}
          alt="star"
          width={100}
          height={50}
          className=" w-28 pl-8 absolute top-3  md:top-36 right-10"
        ></Image>
      </div>
    </main>
  );
};
export default Hero;
