import React from "react";
import Image from "next/image";

const Sellingdetails = () => {
  return (
    // Brands name
    <div className="w-full h-[100PX]  bg-black  flex justify-between items-center gap-20  px-16 ">
      <Image
        src="/Group.png"
        alt="text"
        width={50}
        height={14}
        className="w-[100px] h-[33px] "
      ></Image>

      <Image
        src="/zara-logo-1 1.png"
        alt="text"
        width={50}
        height={14}
        className="md:w-[91px] h-[38px] "
      ></Image>

      <Image
        src="/gucci-logo-1 1.png"
        alt="text"
        width={50}
        height={14}
        className="md:w-[100px] h-[36px]"
      ></Image>

      <Image
        src="/prada-logo-1 1.png"
        alt="text"
        width={50}
        height={14}
        className="md:w-[100px] h-[32px]"
      ></Image>

      <Image
        src="/Group (1).png"
        alt="text"
        width={50}
        height={14}
        className="md:w-[120px] h-[33.35px]"
      ></Image>
    </div>
  );
};

export default Sellingdetails;
