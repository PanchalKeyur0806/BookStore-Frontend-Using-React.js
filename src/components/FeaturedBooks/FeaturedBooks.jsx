import React from "react";
import { FaArrowRight } from "react-icons/fa";

function FeaturedBooks() {
  const img = "https://m.media-amazon.com/images/I/61J3Uu4jOLL.jpg";
  return (
    <section className=" bg-[#f9f4f4] font-serif">
      <div className="w-[80vw] mx-auto  flex flex-col md:flex-row ">
        <div className="md:w-1/2 my-5">
          <img
            src={img}
            alt="FeaturedBookImg"
            className="xl:w-1/2 mx-auto bg-red-800 border-4 border-blue-950"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-start md:ml-30">
          <div id="FeaturedHeading">
            <h1 className=" text-2xl md:text-4xl font-semibold font-serif border-b-4  text-blue-950">
              Featured Book
            </h1>
          </div>
          <div id="FeaturedBooks" className="mt-5">
            <div id="FeaturedAuthor" className="text-start">
              <h1 className="font-extralight">
                BY :- <span>Robert Greene</span>
              </h1>
            </div>
            <div id="FeaturedBookContent" className="mt-5">
              <h1 className="text-2xl font-bold">48 laws of power</h1>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                laudantium error, numquam esse cupiditate ullam?
              </p>
              <p className="text-xl font-extrabold text-[#ed553d] mt-5 mb-5">
                $ 40/-
              </p>
            </div>
          </div>
          <div id="FeaturedBtn">
            <button className="flex items-center justify-center gap-2 border-2 text-blue-950 cursor-pointer px-3 py-2 mt-5 rounded">
              <span>View More</span>
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBooks;
