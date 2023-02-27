import React from "react";
import { MdOutlineCreate } from "react-icons/md";

const MobileCreatePost = ({ isLoggin, setIsLoggin }) => {
  return (
    <div
      className="bg-gradient-to-r from-pinkL to-pinkR text-white rounded-full p-3 text-3xl cursor-pointer"
      onClick={() => setIsLoggin(isLoggin)}
    >
      <MdOutlineCreate />
    </div>
  );
};

export default MobileCreatePost;
