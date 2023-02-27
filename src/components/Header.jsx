import React from "react";
import logo_1 from "../assets/logo1.png";
import logo_2 from "../assets/logo2.png";
import logo_3 from "../assets/logo3.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Loggin from "./Loggin";

const Header = ({ joined, handleIsJoined, isLoggin, setIsLoggin }) => {
  return (
    <div>
      {/* For Small Devices */}
      <div className="px-7 py-5 flex justify-between items-center sm:hidden z-20 absolute w-full">
        <div>
          <BiArrowBack className="text-3xl text-white font-bold" />
        </div>
        <button
          className="border-2 py-1 px-3 rounded-lg text-lg text-white"
          onClick={() => handleIsJoined(joined)}
        >
          {joined ? "Leave Group" : "Join Group"}
        </button>
      </div>

      {/* For other Devices */}
      <div className="px-7 pt-4 pb-3 text-sm sm:text-md hidden sm:flex justify-between items-center fixed top-0 w-full bg-white z-30 border-b-2">
        <div className="flex">
          <img src={logo_1} alt="logo" />
          <img src={logo_3} alt="logo" />
          <img src={logo_2} alt="logo" />
        </div>

        <div className="hidden sm:flex w-52 md:w-330 lg:w-360 justify-start items-center px-3 rounded-full border-none outline-none focus-within:shadow-sm text-gray_1 bg-searchBg">
          <div className="inline-block">
            <AiOutlineSearch />
          </div>
          <input
            type="search"
            name="search"
            className="p-2 rounded-full md:w-360 w-190 outline-none bg-searchBg"
            placeholder="Search for your favorite groups in ATG"
          />
        </div>

        <div
          className="cursor-pointer text-sm sm:text-md"
          onClick={() => setIsLoggin(isLoggin)}
        >
          Create account.{" "}
          <span className="font-bold text-blue_1">It's free!</span>
          <MdOutlineArrowDropDown className="inline" />
        </div>
      </div>

      {isLoggin && <Loggin isLoggin={isLoggin} setIsLoggin={setIsLoggin} />}
    </div>
  );
};

export default Header;
