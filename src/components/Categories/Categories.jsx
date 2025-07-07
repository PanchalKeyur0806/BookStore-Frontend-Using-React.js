import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Categories() {
  const img =
    "https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2562942291.jpg";
  const secondCardImg =
    "https://www.eleapsoftware.com/wp-content/uploads/2021/11/Management-Books--scaled.jpg.webp";
  const engImg =
    "https://miro.medium.com/v2/resize:fit:2000/1*iKHDNrY8Hw4R-CR6_gpHMQ.jpeg";

  return (
    <section className="mt-5">
      <div className="w-[80vw] mx-auto">
        <div id="Heading" className="my-15">
          <h1 className="text-orange-700 font-bold ">----Categories</h1>
          <h1 className="font-bold text-4xl text-blue-950 mb-10">
            Exploure our Top Categories
          </h1>
        </div>
        <div id="cards" className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div id="card">
            <div id="img">
              <img src={img} alt="Some card Image" className="rounded-3xl" />
            </div>
            <div
              id="content"
              className="py-5 text-xl text-center font-medium font-serif"
            >
              Higher Education
            </div>
          </div>
          <div id="card">
            <div id="img">
              <img
                src={secondCardImg}
                alt="Some card Image"
                className="rounded-3xl"
              />
            </div>
            <div
              id="content"
              className="py-5 text-xl text-center font-medium font-serif"
            >
              Management Books
            </div>
          </div>
          <div id="card">
            <div id="img">
              <img src={engImg} alt="Some card Image" className="rounded-3xl" />
            </div>
            <div
              id="content"
              className="py-5 text-xl text-center font-medium font-serif"
            >
              Engineering Books
            </div>
          </div>
        </div>

        <div
          id="btn"
          className="mt-5 text-center flex justify-center items-center"
        >
          <button className="flex gap-1 justify-center items-center border-2 border-blue-950 text-blue-950 px-3 py-2 rounded cursor-pointer">
            View More <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Categories;
