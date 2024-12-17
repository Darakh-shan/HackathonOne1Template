import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
  return (
    <header className="w-full h-[70px] flex justify-between items-center pl-14 pr-14 ">
      {/* logo */}
      <div>
        <h1 className="text-2xl sm:text-3xl  font-extrabold">SHOP.CO</h1>
      </div>
      {/* navbar */}

      <ul className="flex gap-4">
        <Link href="/">
          <li>Shop </li>
          <RiArrowDropDownLine />
        </Link>
        <Link href="">
          <li>On Sale</li>
        </Link>
        <Link href="">
          <li>New Arrivals</li>
        </Link>
        <Link href="">
          <li>Brands</li>
        </Link>
        <Link href="">
          <li></li>
        </Link>
      </ul>
      {/* search icon and input */}

      <div className="flex items-center w-[400px] h-[48px] bg-[#F0F0F0] rounded-[62px] gap-2 pl-3 ">
        <CiSearch className="text-lg text-gray-400 " />
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-[#F0F0F0] outline-none"
        />
      </div>
      <div className="flex justify-center space-x-4 ">
        <FiShoppingCart />
        <CgProfile />
      </div>
    </header>
  );
};

export default Header;
