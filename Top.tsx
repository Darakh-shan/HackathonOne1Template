import React from "react";
import { RxCross2 } from "react-icons/rx";

const Top = () => {
  return (
    <main className="bg-black w-full h-[38px] flex justify-center items-center ">
      <div className=" flex justify-center items-center text-white">
        <p className=" text-xs sm:text-sm">
          Sign up and 20% off to your first order.{" "}
        </p>
        <a
          href="/signUp"
          className="underline  hover:text-gray-300 ml-3 text-xs sm:text-sm"
        >
          {" "}
          Sign Up Now
        </a>
      </div>

      <div className="text-white text-sm font-normal absolute right-[50px] hidden sm:block">
        <RxCross2 />
      </div>
    </main>
  );
};

export default Top;
