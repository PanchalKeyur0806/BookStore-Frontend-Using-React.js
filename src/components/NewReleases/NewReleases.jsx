import React from "react";
import { FaArrowRight } from "react-icons/fa";

function NewReleases() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-pink-50 my-10">
      <div id="Heading" className="text-center">
        <h1 className="text-sm pt-5 font-light">Some Quality Items</h1>
        <h1 className="text-4xl text-blue-950 py-3 font-bold">
          New Release Books
        </h1>
      </div>
      <div
        id="Books"
        className="mx-2 mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4"
      >
        <div className="rounded shadow-lg">
          <div className="bg-white ">
            <img
              src="https://www.columbiactlibrary.org/wp-content/uploads/2012/10/books.png"
              alt=""
              className="w-[70%]  mx-auto shadow-lg"
            />
          </div>
          <div className="text-center py-2">
            <p className="text-2xl font-bold py-1">Book Name</p>
            <p className="text-sm font-medium py-1">Author Name</p>
            <p className="text-[#ed573d] text-2xl py-1 font-bold"> price</p>
          </div>
        </div>
        <div className="rounded shadow-lg">
          <div className="bg-white ">
            <img
              src="https://www.columbiactlibrary.org/wp-content/uploads/2012/10/books.png"
              alt=""
              className="w-[95%] mx-auto "
            />
          </div>
          <div className="text-center py-2">
            <p className="text-2xl font-bold py-1">Book Name</p>
            <p className="text-sm font-medium py-1">Author Name</p>
            <p className="text-[#ed573d] text-2xl py-1 font-bold"> price</p>
          </div>
        </div>
        <div className="rounded shadow-lg">
          <div className="bg-white ">
            <img
              src="https://www.columbiactlibrary.org/wp-content/uploads/2012/10/books.png"
              alt=""
              className="w-[95%] mx-auto "
            />
          </div>
          <div className="text-center py-2">
            <p className="text-2xl font-bold py-1">Book Name</p>
            <p className="text-sm font-medium py-1">Author Name</p>
            <p className="text-[#ed573d] text-2xl py-1 font-bold"> price</p>
          </div>
        </div>
        <div className="rounded shadow-lg">
          <div className="bg-white ">
            <img
              src="https://www.columbiactlibrary.org/wp-content/uploads/2012/10/books.png"
              alt=""
              className="w-[95%] mx-auto "
            />
          </div>
          <div className="text-center py-2">
            <p className="text-2xl font-bold py-1">Book Name</p>
            <p className="text-sm font-medium py-1">Author Name</p>
            <p className="text-[#ed573d] text-2xl py-1 font-bold"> price</p>
          </div>
        </div>
      </div>

      <div className="text-end flex flex-row-reverse mx-3">
        <button className="text-[#ed573d] flex items-center justify-center gap-3 my-5 font-bold text-xl cursor-pointer">
          {" "}
          View All <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default NewReleases;
