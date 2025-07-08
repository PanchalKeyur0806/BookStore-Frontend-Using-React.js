import React from "react";

function Discounts() {
  return (
    <section className="mt-10">
      <div className="w-[80vw] mx-auto flex flex-col lg:flex-row bg-[#fcebea] rounded-2xl">
        <div id="DiscountsContent" className="lg:w-1/2 m-10">
          <div id="DiscountHeading">
            <h1 className="text-4xl text-blue-950 font-bold">
              All Books are now 50% off don't miss such a <span>Deal</span>
            </h1>
          </div>
          <div className="mt-10 text-xl">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo
              eaque ut nihil neque fugiat sequi accusantium impedit enim
              debitis?
            </p>
          </div>
          <div className="text-4xl mt-10 text-[#ed553d] font-semibold">
            <p>Time will be showen here</p>
          </div>
          {/* <div id="DiscountBtns" className="mt-20 flex gap-4">
            <button className="border border-blue-950 px-3 py-2 rounded cursor-pointer hover:text-white hover:bg-blue-950 transition-all duration-150 ease-in">
              Previous
            </button>
            <button className="border border-blue-950 px-3 py-2 rounded cursor-pointer hover:text-white hover:bg-blue-950 transition-all duration-150 ease-in">
              Next
            </button>
          </div> */}
        </div>
        <div className="lg:w-1/2 mr-10 ">
          <img src="./src/assets/PhotoshopPreview_Image.png" alt="Book img" />
        </div>
      </div>
    </section>
  );
}

export default Discounts;
