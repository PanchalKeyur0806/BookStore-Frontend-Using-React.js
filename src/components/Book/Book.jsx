import React from "react";
import { IoMdStar } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useFetchItem } from "../../hooks/fetchItemHook";

function Book() {
  const params = useParams();
  const { data, error } = useFetchItem(
    "http://localhost:8002/books/683697c5c4efe00d7ca88e5a"
  );
  const reviewData = useFetchItem(
    `http://localhost:8002/books/${params.bookid}/review`
  );

  return (
    <main>
      <section className="w-[80vw] mx-auto">
        <div className="flex flex-col md:flex-row ">
          <div className=" md:w-1/4 overflow-hidden">
            <img
              src={data?.coverImage}
              alt=""
              className="rounded md:w-3/4 mx-auto"
            />
          </div>
          <div className="md:w-3/4 md:ml-10">
            <div>
              <h1 className="text-3xl font-extrabold  text-[#ed573d]">
                {data?.title}
              </h1>
              <h3 className="mt-3 font-medium">Author :- {data?.author}</h3>
              <h3 className="mt-3 ">Category :- {data?.category}</h3>
              <p className="mt-4 font-medium">{data?.description}</p>
              <p className="mt-5">{data?.rating} / 5.0</p>
              <p className="mt-5 text-2xl font-bold text-[#ed573d]">$ 40/- </p>
            </div>
            <div className="mt-5 flex gap-10  items-center">
              <input
                type="number"
                name=""
                id=""
                className="outline-1 rounded w-20 pl-3 py-1"
              />
              <button className="border-2 px-3 py-2 border-blue-950 rounded cursor-pointer hover:bg-blue-950 hover:text-white transition-all duration-150 ease-in">
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div>
            <h3 className="text-[#ed573d] font-bold text-xl">Top Reviews</h3>
            <h3 className="text-2xl mt-4">Rating snapshot</h3>
          </div>
          <div className="mt-5 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded shadow border-b-2 p-4 border">
              <div
                id="rating"
                className="flex items-center justify-between  border-b-2"
              >
                <div className="flex items-center gap-3">
                  <IoMdStar />
                  <h2>4.12</h2>
                </div>

                <h2>User name</h2>
              </div>
              <div id="review" className="mt-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero quas commodi atque.
                </p>
              </div>
            </div>
            <div className="rounded shadow border-b-2 p-4 border">
              <div
                id="rating"
                className="flex items-center justify-between  border-b-2"
              >
                <div className="flex items-center gap-3">
                  <IoMdStar />
                  <h2>4.12</h2>
                </div>

                <h2>User name</h2>
              </div>
              <div id="review" className="mt-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero quas commodi atque.
                </p>
              </div>
            </div>
            <div className="rounded shadow border-b-2 p-4 border">
              <div
                id="rating"
                className="flex items-center justify-between  border-b-2"
              >
                <div className="flex items-center gap-3">
                  <IoMdStar />
                  <h2>4.12</h2>
                </div>

                <h2>User name</h2>
              </div>
              <div id="review" className="mt-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero quas commodi atque.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button className="px-3 py-2 rounded border cursor-pointer">
              Load More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Book;
