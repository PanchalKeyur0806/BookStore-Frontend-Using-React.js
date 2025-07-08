import React from "react";
import { FaArrowRight } from "react-icons/fa";

function NewReleases() {
  return (
    <div className="bg-gradient-to-r from-[#fcecec] to-pink-50 my-10">
      <div id="Heading" className="text-center">
        <h1 className="text-sm pt-5 font-light">Some Quality Items</h1>
        <h1 className="text-4xl text-blue-950 py-3 font-bold">
          New Release Books
        </h1>
      </div>
      <div
        id="Books"
        className="mx-2 mt-10 grid  sm:grid-cols-2 md:grid-cols-4"
      >
        <div className="w-[70%] mx-auto cursor-pointer">
          <div className="bg-white shadow h-[65%] flex justify-center items-center ">
            <img
              src="https://m.media-amazon.com/images/I/81F90H7hnML.jpg"
              alt=""
              className="w-[80%] h-[80%] shadow "
            />
          </div>
          <div className="text-center  h-[30%]">
            <p className="text-2xl font-bold py-1">Book Name</p>
            <p className="text-sm font-medium py-1">Author Name</p>
            <p className="text-[#ed573d] text-xl  font-bold"> price</p>
          </div>
        </div>
        <div className="w-[70%] mx-auto cursor-pointer">
          <div className="bg-white shadow h-[65%] flex justify-center items-center">
            <img
              src="https://m.media-amazon.com/images/I/81F90H7hnML.jpg"
              alt=""
              className="w-[80%] h-[80%] shadow "
            />
          </div>
          <div className="text-center ">
            <p className="text-2xl font-bold py-1">Book Name</p>
            <p className="text-sm font-medium py-1">Author Name</p>
            <p className="text-[#ed573d] text-xl  font-bold"> price</p>
          </div>
        </div>
        <div className="w-[70%] mx-auto cursor-pointer">
          <div className="bg-white shadow h-[65%] flex justify-center items-center">
            <img
              src="https://m.media-amazon.com/images/I/81F90H7hnML.jpg"
              alt=""
              className="w-[80%] h-[80%] shadow  "
            />
          </div>
          <div className="text-center ">
            <p className="text-2xl font-bold py-1">Book Name</p>
            <p className="text-sm font-medium py-1">Author Name</p>
            <p className="text-[#ed573d] text-xl  font-bold"> price</p>
          </div>
        </div>
        <div className=" w-[70%] mx-auto cursor-pointer">
          <div className="bg-white shadow h-[65%] flex justify-center items-center">
            <img
              src="https://m.media-amazon.com/images/I/81F90H7hnML.jpg"
              alt=""
              className="w-[80%] h-[80%] shadow "
            />
          </div>
          <div className="text-center ">
            <p className="text-2xl font-bold py-1">Book Name</p>
            <p className="text-sm font-medium py-1">Author Name</p>
            <p className="text-[#ed573d] text-xl  font-bold"> price</p>
          </div>
        </div>
      </div>

      <div className="text-end flex flex-row-reverse mx-3 my-10">
        <button className="text-[#ed573d] flex items-center justify-center gap-3 my-5 font-bold  cursor-pointer">
          {" "}
          View All <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default NewReleases;
