import { FaPlus } from "react-icons/fa";

function AllBooks() {
  return (
    <>
      <main className="mt-10">
        <section className="w-[90vw] mx-auto">
          <aside className="md:w-1/4  pb-5">
            <div className="w-[80%] mx-auto">
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
                <h1 className="flex gap-3 justify-between items-center mx-3">
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
            </div>
          </aside>
          <section></section>
        </section>
      </main>
    </>
  );
}

export default AllBooks;
