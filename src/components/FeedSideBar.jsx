import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import group_1 from "../assets/group_1.png";
import group_2 from "../assets/group_2.png";
import group_3 from "../assets/group_3.png";
import group_4 from "../assets/group_4.png";

const FeedSideBar = ({ joined }) => {
  const groups = [
    {
      id: 1,
      img: group_1,
      text: "Leisure",
    },
    {
      id: 2,
      img: group_2,
      text: "Leisure",
    },
    {
      id: 3,
      img: group_3,
      text: "MBA",
    },
    {
      id: 4,
      img: group_4,
      text: "Philosophy",
    },
  ];

  return (
    <div>
      <div className="hidden sm:flex items-center border-b outline-none focus-within:shadow-sm mt-5 ml-auto md:w-[270px]">
        <div className="flex items-center">
          <IoLocationOutline />|
        </div>
        <input
          type="search"
          name="search"
          className="outline-none text-sm py-2 pl-3"
          placeholder="Enter your location"
        />
        <AiOutlineClose className="text-right ml-auto" />
      </div>
      <div className="mt-9 mb-10 flex gap-2 text-gray_2 ml-auto md:w-[270px]">
        <RiErrorWarningLine className="mt-1" />
        <span className="w-[250px] tex-sm">
          Your location will help us serve better and extend a personalised
          experience.
        </span>
      </div>
      {joined && (
        <div className="mt-16">
          <div>
            <AiFillLike className="inline mr-1 text-xl mb-1" />
            <span className=" uppercase tracking-widest text-lg">
              Recommended Groups
            </span>
          </div>
          <div className="mt-5">
            <ul>
              {groups.map((group) => (
                <li
                  key={group.id}
                  className="py-3 flex justify-between items-center"
                >
                  <div className="flex items-center gap-4 font-medium">
                    <img src={group.img} alt={group.text} />
                    <span>{group.text}</span>
                  </div>
                  <button className="bg-shareBg p-1 px-4 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-75">
                    Follow
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-blue_1 m-14 md:mt-16 text-right cursor-pointer">See More...</div>
        </div>
      )}
    </div>
  );
};

export default FeedSideBar;
