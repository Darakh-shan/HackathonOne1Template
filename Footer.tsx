import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import { FaFacebook, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Footer = () => {
  return (
    // Footer
    <main className="h-full w-full">
      <div className="flex justify-between  items-center w-full h-[180px] text-white  flex-col  md:flex-row bg-black  rounded-[20px]">
        <h1 className="w-[400px] font-extrabold text-3xl sm:mb-4">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className=" flex flex-col space-y-4">
          <div className="relative">
            <MdEmail className="absolute left-3 top-4 text-gray-400 text-xl" />
            <input
              placeholder="Enter your email address"
              className="h-[48px] w-[349px] rounded-[62px] bg-[#FFFFFF] pl-10 text-[#000000] text-normal outline-none"
            ></input>
          </div>
          <button className=" bg-[#FFFFFF] text-black rounded-[62px] h-[48px] w-[349px] font-bold pl-8 pr-8 hover:text-gray-300  hover:cursor-pointer">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div className="text-black h-full w-full  gap-[10px] pt-8 flex justify-between items-center">
        <div className="w-[248px] h-[114px] ">
          <h1 className="text-2xl font-extrabold ">SHOP.CO</h1>
          <p className="text-sm">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex pt-4 gap-2 text-xl">
            <BsTwitter/>
            <FaFacebook/>
            <BsInstagram/>
            <FaGithub/>
          </div>
        </div>
        <div className="">
          <h1 className="font-semibold gap-[]">Company</h1>
          <h6>About</h6>
          <h6>Features</h6>
          <h6>Works</h6>
          <h6>Career</h6>
        </div>
        <div>
          <h4 className="font-semibold">HELP</h4>
          <h6>Customer Support</h6>
          <h6>Delivery Details</h6>
          <h6>Terms & Conditions</h6>
          <h6>Privacy Policy</h6>
        </div>
        <div>
          <h4 className="font-semibold">FAQ</h4>
          <h6>Account</h6>
          <h6>Manage Deliveries</h6>
          <h6>Payments</h6>
          <h6>Orders</h6>
        </div>

        <div className="">
          <h4 className="font-semibold">Resources</h4>
          <h6>Free eBooks</h6>

          <h6>Development Tutorial</h6>

          <h6>How to - Blog</h6>

          <h6>Youtube Playlist</h6>
        </div>
      </div>
    </main>
  );
};

export default Footer;
