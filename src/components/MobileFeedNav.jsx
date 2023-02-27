import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";

const MobileFeedNav = ({ posts, links }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [linkName, setLinkName] = useState(null);

  return (
    <div className="flex justify-between items-center">
      <p className="font-bold text-blue_2 text-lg">Posts ({posts.length})</p>
      <div>
        <div
          className="relative outline-none bg-shareBg text-sm py-2 px-3 rounded-sm cursor-pointer shadow-sm focus:shadow-sm"
          onClick={() => setIsClicked(!isClicked)}
        >
          <div className="flex items-center justify-between gap-3">
            <div>Filter: {linkName ? linkName : "All"}</div>
            <div>
              <MdOutlineArrowDropDown className="text-xl" />
            </div>
          </div>
          {isClicked && (
            <ul className="bg-white border shadow-lg p-2 flex flex-col absolute right-2 top-9 rounded-md w-[150px]">
              <NavLink
                to="/"
                className="p-1 font-normal text-sm hover:bg-shareBg transition-all duration-75"
                onClick={() => setLinkName("All")}
              >
                All
              </NavLink>
              {links.map((link) => (
                <NavLink
                  to={`/posts/${link.type}`}
                  key={link.id}
                  className="p-1 font-normal text-sm hover:bg-shareBg transition-all duration-75"
                  onClick={() => setLinkName(`${link.name}`)}
                >
                  {link.name}
                </NavLink>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileFeedNav;
