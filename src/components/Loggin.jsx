import React, { useState } from "react";
import sign from "../assets/sign.png";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { IoCloseSharp } from "react-icons/io5";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Loggin = ({ isLoggin, setIsLoggin }) => {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSetIsSignIn = (isSignIn) => {
    setIsSignIn(isSignIn);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 bg-black/70 w-full h-full z-40"></div>
      <div className="fixed bottom-0 right-0 left-0 rounded-t-xl sm:right-auto sm:bottom-auto w-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 sm:w-[600px] md:w-[700px] lg:w-[800px] bg-white sm:rounded-md">
        <div className="hidden sm:block bg-green_1/10 text-green_1 py-2 px-6 font-bold">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </div>
        <div className="py-6 container grid grid-cols-12 mx-auto sm:gap-14">
          <div className="sm:col-span-6 sm:mt-5 col-span-12 relative">
            <div
              className="absolute right-0 sm:fixed sm:-top-11 sm:-right-3 bg-close sm:bg-gray_3 p-[2px] rounded-full cursor-pointer"
              onClick={() => setIsLoggin(isLoggin)}
            >
              <IoCloseSharp className="text-2xl text-white sm:text-gray_1 font-bold" />
            </div>
            <div className="font-bold text-xl mb-5">
              {isSignIn ? "Sign In" : "Create Account"}
            </div>
            {isSignIn ? (
              <div>
                <SignIn isSignIn={isSignIn} setIsSignIn={handleSetIsSignIn} />
              </div>
            ) : (
              <div>
                <SignUp isSignIn={isSignIn} setIsSignIn={handleSetIsSignIn} />
              </div>
            )}
            <div className="mt-6">
              <button className="w-full border text-center mb-2 py-2 rounded-sm">
                <BsFacebook className="inline-block mr-1 text-blue_1" />
                Sign up with Facebook
              </button>
              <button className="w-full border text-center py-2 rounded-sm">
                <FcGoogle className="inline-block mr-1" />
                Sign up with Google
              </button>
              {isSignIn ? (
                <p className="cursor-pointer font-bold text-gray_4 mt-4 text-center w-full text-sm">
                  Forgot Password?
                </p>
              ) : (
                // {/* Responsive */}
                <p className="block sm:hidden text-xs text-center mt-4">
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
                // {/* Responsive */}
              )}
            </div>
          </div>

          <div className="sm:col-span-6 sm:mt-5 sm:block hidden">
            <div className="text-gray_2 flex flex-col md:flex-row md:gap-1 md:text-right ml-auto mb-11 text-xs font-medium">
              Already have an account?{" "}
              <span
                className="text-blue_1 cursor-pointer"
                onClick={() => setIsSignIn(!isSignIn)}
              >
                {isSignIn ? "Create new for free!" : "Sign In"}
              </span>
            </div>
            <img src={sign} alt="signUp" className=" w-[200px] md:w-auto" />
            <div className=" text-gray_2 text-[10px] mt-7 text-left mr-auto w-4/6 md:w-auto">
              {!isSignIn &&
                "By signing up, you agree to our Terms & conditions, Privacy policy"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loggin;
