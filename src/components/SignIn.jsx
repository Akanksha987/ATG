import React from "react";
import { GrView } from "react-icons/gr";

const SignIn = ({ setIsSignIn, isSignIn }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
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
      <div className="flex justify-between items-center sm:block">
        <button
          type="submit"
          className="rounded-full text-white bg-blue_1 w-[150px] sm:w-full text-center py-2 mt-5"
        >
          Sign In
        </button>
        {/* Responsive */}
        <p
          className="cursor-pointer text-gray_4 mt-2 underline block sm:hidden"
          onClick={() => setIsSignIn(!isSignIn)}
        >
          or, Create Account
        </p>
        {/* Responsive */}
      </div>
    </form>
  );
};

export default SignIn;
