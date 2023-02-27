import React from "react";
import { NavLink } from "react-router-dom";
import { MdGroupAdd, MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
import MobileFeedNav from "./MobileFeedNav";

const isNotActiveStyle = "pb-6 z-10";
const isActiveStyle = "border-b pb-6 z-10 text-black border-b-black";

const FeedNav = ({ joined, handleIsJoined, posts }) => {
  const links = [
    {
      id: 1,
      type: "articles",
      name: "Article",
    },
    {
      id: 2,
      type: "events",
      name: "Event",
    },
    {
      id: 3,
      type: "educations",
      name: "Education",
    },
    {
      id: 4,
      type: "jobs",
      name: "Job",
    },
  ];

  return (
    <>
      <div className="block sm:hidden">
        <MobileFeedNav posts={posts} links={links} />
      </div>
      <div className="hidden sm:grid grid-cols-7 gap-5 relative before:absolute before:h-px before:bottom-[0.5px] before:w-full before:bg-gray_3 before:z-0">
        <div className="col-span-4">
          <ul className="flex items-center gap-4 text-gray_2">
            <li className="pb-6 z-10 hover:text-black transition-all duration-75 sm:text-[13.5px] md:text-base lg:text-md">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? isActiveStyle : isNotActiveStyle
                }
              >
                All Posts ({posts.length})
              </NavLink>
            </li>
            {links.map((link) => (
              <li
                key={link.id}
                className="pb-6 z-10 hover:text-black transition-all duration-75 sm:text-[13.5px] md:text-base lg:text-md"
              >
                <NavLink
                  to={`/posts/${link.type}`}
                  className={({ isActive }) =>
                    isActive ? isActiveStyle : isNotActiveStyle
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-3 flex gap-4 ml-auto mb-3">
          <button className=" bg-shareBg px-1 py-1 rounded-md flex items-center justify-between font-medium text-[11px] md:text-[15px]">
            <span className="mr-1">Write a post</span>
            <MdOutlineArrowDropDown className="inline text-lg" />
          </button>
          <button
            className={`${
              joined
                ? "border border-gray_5 bg-white text-gray_1 px-1 py-1 rounded-md font-medium text-[11px] md:text-[15px]"
                : "bg-blue_1 text-white px-1 py-1 rounded-md font-medium text-[11px] md:text-[15px]"
            }`}
            onClick={() => handleIsJoined(joined)}
          >
            {joined ? (
              <IoMdExit className="inline text-lg mr-1" />
            ) : (
              <MdGroupAdd className="inline text-lg mr-1" />
            )}

            {joined ? (
              <span className="ml-1">Leave Groupe</span>
            ) : (
              <span className="ml-1">Join Groupe</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default FeedNav;
