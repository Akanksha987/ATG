import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const PostAbout = ({ location, button, info, Event, Job }) => {
  return (
    <div>
      <div className="mb-2 flex">
        <span className="flex items-center font-medium text-sm sm:text-md">
          {button.type === "event" ? (
            <Event className="inline mr-2" />
          ) : button.type === "job" ? (
            <Job className="inline mr-2" />
          ) : (
            ""
          )}
          <span className="overflow-hidden text-ellipsis whitespace-nowrap w-32 lg:whitespace-normal lg:w-auto">
            {info}
          </span>
        </span>
        <span className="ml-12 sm:ml-16 flex items-center text-sm sm:text-md md:text-md">
          <IoLocationOutline className="inline mr-1" />
          {location}
        </span>
      </div>
      <button
        className={`${
          button.color === "red" ? "text-red_1" : "text-green_1"
        } w-full border-2 border-shareBg rounded-md p-2 mb-2 mt-1 font-medium`}
      >
        {button.text}
      </button>
    </div>
  );
};

export default PostAbout;
