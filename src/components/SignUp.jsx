import React from "react";
import { GrView } from "react-icons/gr";

const SignUp = ({ setIsSignIn, isSignIn }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="flex">
        <input
          type="text"
          placeholder="First Name"
          className="border border-input bg-shareBg p-2 w-1/2 outline-none rounded-tl-sm"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border border-input bg-shareBg p-2 w-1/2 outline-none rounded-tr-sm"
        />
      </div>
      <input
        type="text"
        placeholder="Email"
        className="border border-input bg-shareBg p-2 w-full outline-none"
      />
      <div className="relative">
        <input
          type="text"
          placeholder="Password"
          className="border border-input bg-shareBg p-2 w-full outline-none"
        />
        <div className=" absolute right-3 top-3">
          <GrView className="text-gray_2" />
        </div>
      </div>
      <input
        type="text"
        placeholder="Confirm Password"
        className="border border-input bg-shareBg p-2 w-full outline-none rounded-b-sm"
      />
      <div className="flex justify-between items-center sm:block">
        <button
          type="submit"
          className="rounded-full text-white bg-blue_1 w-[150px] sm:w-full text-center py-2 mt-5"
        >
          Create Account
        </button>
        {/* Responsive */}
        <p
          className="cursor-pointer text-gray_4 mt-2 underline block sm:hidden"
          onClick={() => setIsSignIn(!isSignIn)}
        >
          or, Sign In
        </p>
        {/* Responsive */}
      </div>
    </form>
  );
};

export default SignUp;
