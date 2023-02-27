import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { GiShare } from "react-icons/gi";
import { BsCalendarEvent, BsBag } from "react-icons/bs";
import PostAbout from "./PostAbout";

const FeedPost = ({
  post: {
    img,
    userImg,
    userName,
    name,
    title,
    info,
    views,
    button,
    info_2,
    location,
    type,
  },
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const Choices = [
    {
      id: 1,
      text: "Edit",
    },
    {
      id: 2,
      text: "Report",
    },
    {
      id: 3,
      text: "Option 3",
    },
  ];

  return (
    <div className="border mb-3 shadow-sm">
      <div>{img && <img src={img} alt={title} className="w-full" />}</div>
      <div className="p-4">
        <p>{name}</p>
        <div>
          <div className="grid grid-cols-6 font-bold my-3">
            <div className="text-xl col-span-5 text-blue_2">{title}</div>
            <div className="text-lg col-span-1 ml-auto cursor-pointer relative">
              <button
                className={`p-1 text-2xl hover:bg-gray_6 ${
                  isClicked && "bg-gray_6"
                } rounded-md transition-all duration-75`}
                onClick={() => setIsClicked(!isClicked)}
              >
                <BsThreeDots />
              </button>
              {isClicked && (
                <ul className="bg-white border shadow-lg p-2 flex flex-col absolute right-2 top-9 rounded-md w-[150px]">
                  {Choices.map((choice) => (
                    <li
                      key={choice.id}
                      className="p-1 font-normal text-sm hover:bg-shareBg transition-all duration-75"
                    >
                      {choice.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {info ? (
            <p className="text-gray_1 overflow-hidden text-ellipsis whitespace-nowrap w-64 sm:w-72 md:w-80 lg:whitespace-normal lg:w-auto">
              {info}
            </p>
          ) : (
            (type === "events" || type === "jobs" || type === "educations") && (
              <PostAbout
                button={button}
                info={info_2}
                location={location}
                Event={BsCalendarEvent}
                Job={BsBag}
              />
            )
          )}
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="flex items-center flex-1">
            <div>
              <img src={userImg} alt={userName} />
            </div>
            <div className="ml-3">
              <p>{userName}</p>
              <div className="text-gray_4 text-sm md:hidden block">
                <span>{views} views</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-gray_4 md:block hidden">
              <GrView className="inline mr-2" />
              <span>{views} views</span>
            </div>
            <div className="ml-7 bg-shareBg p-2 rounded-md flex items-center">
              <GiShare className="text-lg" />
              <p className="md:hidden block ml-2 text-sm">Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
