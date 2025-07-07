import React from "react";
import { MdNavigateNext } from "react-icons/md";

function Hero() {
  const heroImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-BRdbC5SPBJLzYOf-mHerSTECJPwqcXknA&s";
  return (
    <>
      <div className=" mt-5 md:bg-gradient-to-r md:from-blue-100 md:to-pink-50">
        <div className="w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 ">
          {/* Text area */}
          <div className="w-full   flex flex-col gap-10  items-start justify-center">
            <h1 className=" text-3xl lg:text-5xl font-bold">
              Discover Your Next Favorite Book
            </h1>
            <p className="text-left  md:text-lg">
              Explore thousands of books across genres. Fiction, Non-fiction,
              Self-help, Biographies, and much more!
            </p>
            <div className="flex items-center justify-center border-2 border-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer px-3 py-2 font-medium rounded-sm transition-all duration-150 ease-in">
              <button>Read More</button>{" "}
              <span>
                <MdNavigateNext />
              </span>
            </div>
          </div>
          {/* image area */}
          <div className="mt-10 md:mt-0 flex flex-col md:flex-row items-center justify-center ">
            <img
              src="./src/Assets/images-removebg-preview (2).png"
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
