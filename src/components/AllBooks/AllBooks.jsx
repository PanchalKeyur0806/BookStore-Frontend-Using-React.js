import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";

function AllBooks() {
  const [openFilter, setOpenFilter] = useState(false);
  const [isMobile, setMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const resizeWindow = () => {
      setMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", resizeWindow);
    return window.removeEventListener("resize", resizeWindow);
  }, []);

  // Open & close filters
  function openFilterBtn() {
    console.log("what is that");

    setOpenFilter(!openFilter);
  }

  const bookImg = "https://m.media-amazon.com/images/I/A14CZcMfAkL.jpg";
  return (
    <>
      <main className="mt-10">
        <section className="w-[90vw] mx-auto flex flex-col xl:flex-row gap-3">
          {(openFilter || !isMobile) && (
            <aside className="w-full xl:w-1/4  xl:block  pb-5">
              <div className="w-[90%] mx-auto">
                <div id="BooksPriceFilter" className="mx-3">
                  <div className="text-xl font-medium underline underline-offset-8">
                    <p>Price</p>
                  </div>

                  <div className="mt-5">
                    <div id="priceInputs" className="flex gap-5">
                      <div className="flex gap-1">
                        <label htmlFor="">$</label>
                        <input
                          type="number"
                          className="outline-1 rounded w-20 outline-gray-500 pl-3"
                        />
                      </div>
                      to
                      <div className="flex gap-1">
                        <label htmlFor="">$</label>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="outline-1 rounded w-20 outline-gray-500 pl-3"
                        />
                      </div>
                    </div>
                    <div className="mt-5 ">
                      <button className="cursor-pointer bg-blue-950 text-white rounded px-3 py-1 w-full">
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
                <div id="ProductName" className="mt-10">
                  <h1 className="flex gap-3 justify-between items-center mx-3 ">
                    <span>Prodcut Name </span>{" "}
                    <span>
                      <FaPlus />
                    </span>
                  </h1>
                  <div
                    id="seprator"
                    className="border mt-2 mx-3 border-blue-950"
                  ></div>
                </div>
                <div id="ProductType" className="mt-5  cursor-pointer">
                  <h1 className="flex gap-3 justify-between items-center mx-3">
                    <span>Prodcut Type </span>{" "}
                    <span>
                      <FaPlus />
                    </span>
                  </h1>
                  <div
                    id="seprator"
                    className="border mt-2 mx-3 border-blue-950"
                  ></div>
                </div>
                <div id="Availability" className="mt-5 cursor-pointer">
                  <h1 className="flex gap-3 justify-between items-center mx-3">
                    <span>Availability</span>{" "}
                    <span>
                      <FaPlus />
                    </span>
                  </h1>

                  <div
                    id="seprator"
                    className="border mt-2 mx-3 border-blue-950"
                  ></div>
                </div>
                <div id="Author" className="mt-5 cursor-pointer">
                  <h1 className="flex gap-3 justify-between items-center mx-3">
                    <span>Author</span>{" "}
                    <span>
                      <FaPlus />
                    </span>
                  </h1>
                  <div
                    id="seprator"
                    className="border mt-2 mx-3 border-blue-950"
                  ></div>
                </div>
                <div id="Sort" className="mt-5">
                  <h1 className="flex gap-3 justify-between items-center mx-3">
                    <span>Sort</span>{" "}
                    <span>
                      <FaPlus />
                    </span>
                  </h1>
                  <div
                    id="seprator"
                    className="border mt-2 mx-3 border-blue-950"
                  ></div>
                </div>
              </div>
            </aside>
          )}

          <section className="w-[95%] xl:w-3/4">
            <div id="FilterOptionsForMobile" className="">
              <button
                className="text-3xl xl:hidden mx-3 my-5 border px-5 py-3 rounded"
                onClick={openFilterBtn}
              >
                <FaFilter />
              </button>
            </div>
            <div
              id="BooksCards"
              className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <div id="BookCard" className="rounded shadow cursor-pointer">
                <div
                  id="BookImg"
                  className="h-[75%] flex gap-2 justify-center items-center"
                >
                  <img
                    src={bookImg}
                    alt="BookImg"
                    className="w-[70%] h-[80%] shadow rounded"
                  />
                </div>
                <div id="BookContent" className="text-center">
                  <h1 className="mb-2 text-blue-950 font-medium">
                    Sophies world
                  </h1>
                  <h3 className="text-sm font-extralight">Author Name</h3>
                  <h1 className="mt-2 text-[#ed573d] font-extrabold">$ 40/-</h1>
                </div>
              </div>
              <div id="BookCard" className="rounded shadow cursor-pointer">
                <div
                  id="BookImg"
                  className="h-[75%] flex gap-2 justify-center items-center"
                >
                  <img
                    src={bookImg}
                    alt="BookImg"
                    className="w-[70%] h-[80%] shadow rounded"
                  />
                </div>
                <div id="BookContent" className="text-center">
                  <h1 className="mb-2 text-blue-950 font-medium">
                    Sophies world
                  </h1>
                  <h3 className="text-sm font-extralight">Author Name</h3>
                  <h1 className="mt-2 text-[#ed573d] font-extrabold">$ 40/-</h1>
                </div>
              </div>
              <div id="BookCard" className="rounded shadow cursor-pointer">
                <div
                  id="BookImg"
                  className="h-[75%] flex gap-2 justify-center items-center"
                >
                  <img
                    src={bookImg}
                    alt="BookImg"
                    className="w-[70%] h-[80%] shadow rounded"
                  />
                </div>
                <div id="BookContent" className="text-center">
                  <h1 className="mb-2 text-blue-950 font-medium">
                    Sophies world
                  </h1>
                  <h3 className="text-sm font-extralight">Author Name</h3>
                  <h1 className="mt-2 text-[#ed573d] font-extrabold">$ 40/-</h1>
                </div>
              </div>
              <div id="BookCard" className="rounded shadow cursor-pointer">
                <div
                  id="BookImg"
                  className="h-[75%] flex gap-2 justify-center items-center"
                >
                  <img
                    src={bookImg}
                    alt="BookImg"
                    className="w-[70%] h-[80%] shadow rounded"
                  />
                </div>
                <div id="BookContent" className="text-center">
                  <h1 className="mb-2 text-blue-950 font-medium">
                    Sophies world
                  </h1>
                  <h3 className="text-sm font-extralight">Author Name</h3>
                  <h1 className="mt-2 text-[#ed573d] font-extrabold">$ 40/-</h1>
                </div>
              </div>
              <div id="BookCard" className="rounded shadow cursor-pointer">
                <div
                  id="BookImg"
                  className="h-[75%] flex gap-2 justify-center items-center"
                >
                  <img
                    src={bookImg}
                    alt="BookImg"
                    className="w-[70%] h-[80%] shadow rounded"
                  />
                </div>
                <div id="BookContent" className="text-center">
                  <h1 className="mb-2 text-blue-950 font-medium">
                    Sophies world
                  </h1>
                  <h3 className="text-sm font-extralight">Author Name</h3>
                  <h1 className="mt-2 text-[#ed573d] font-extrabold">$ 40/-</h1>
                </div>
              </div>
              <div id="BookCard" className="rounded shadow cursor-pointer">
                <div
                  id="BookImg"
                  className="h-[75%] flex gap-2 justify-center items-center"
                >
                  <img
                    src={bookImg}
                    alt="BookImg"
                    className="w-[70%] h-[80%] shadow rounded"
                  />
                </div>
                <div id="BookContent" className="text-center">
                  <h1 className="mb-2 text-blue-950 font-medium">
                    Sophies world
                  </h1>
                  <h3 className="text-sm font-extralight">Author Name</h3>
                  <h1 className="mt-2 text-[#ed573d] font-extrabold">$ 40/-</h1>
                </div>
              </div>
              <div id="BookCard" className="rounded shadow cursor-pointer">
                <div
                  id="BookImg"
                  className="h-[75%] flex gap-2 justify-center items-center"
                >
                  <img
                    src={bookImg}
                    alt="BookImg"
                    className="w-[70%] h-[80%] shadow rounded"
                  />
                </div>
                <div id="BookContent" className="text-center">
                  <h1 className="mb-2 text-blue-950 font-medium">
                    Sophies world
                  </h1>
                  <h3 className="text-sm font-extralight">Author Name</h3>
                  <h1 className="mt-2 text-[#ed573d] font-extrabold">$ 40/-</h1>
                </div>
              </div>
              <div id="BookCard" className="rounded shadow cursor-pointer">
                <div
                  id="BookImg"
                  className="h-[75%] flex gap-2 justify-center items-center"
                >
                  <img
                    src={bookImg}
                    alt="BookImg"
                    className="w-[70%] h-[80%] shadow rounded"
                  />
                </div>
                <div id="BookContent" className="text-center">
                  <h1 className="mb-2 text-blue-950 font-medium">
                    Sophies world
                  </h1>
                  <h3 className="text-sm font-extralight">Author Name</h3>
                  <h1 className="mt-2 text-[#ed573d] font-extrabold">$ 40/-</h1>
                </div>
              </div>
              <div id="BookCard" className="rounded shadow cursor-pointer">
                <div
                  id="BookImg"
                  className="h-[75%] flex gap-2 justify-center items-center"
                >
                  <img
                    src={bookImg}
                    alt="BookImg"
                    className="w-[70%] h-[80%] shadow rounded"
                  />
                </div>
                <div id="BookContent" className="text-center">
                  <h1 className="mb-2 text-blue-950 font-medium">
                    Sophies world
                  </h1>
                  <h3 className="text-sm font-extralight">Author Name</h3>
                  <h1 className="mt-2 text-[#ed573d] font-extrabold">$ 40/-</h1>
                </div>
              </div>
            </div>

            <div
              id="pageNo"
              className="mt-10 flex gap-5 justify-center items-center"
            >
              <button className="text-white bg-blue-950 px-3 py-2 rounded cursor-pointer">
                Previous
              </button>
              <p className="rounded-full border-2 px-3 py-1 font-bold">1</p>
              <button className="bg-[#ed573d] text-white px-3 py-2 rounded cursor-pointer">
                Next
              </button>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default AllBooks;
