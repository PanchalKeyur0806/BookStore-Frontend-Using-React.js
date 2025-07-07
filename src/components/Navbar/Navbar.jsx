import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { VscThreeBars } from "react-icons/vsc";
import ResponsiveMenu from "./ResponsiveMenu";
import { MdOutlineCancel } from "react-icons/md";

function Navbar() {
  const [open, setOpen] = useState(false);

  const logoImg =
    "https://www.matemart.in/Assets/images/products/d457c0235036396f11714cb337bc0445.png";

  function handleClick() {
    console.log("button is clicked");

    setOpen(!open);
  }
  return (
    <>
      <div>
        <div className="h-7 px-20 bg-blue-950 text-white flex justify-between items-center">
          <div className="cursor-pointer hover:underline underline-offset-4 flex items-center gap-3">
            <span>
              <IoCall />
            </span>
            <span>+91 9106450963</span>
          </div>
          <div>
            <ul className="mx-5 flex gap-5 justify-between items-center">
              <li className="cursor-pointer hover:underline underline-offset-4 text-2xl">
                <span>
                  <FaInstagram />
                </span>
              </li>
              <li className="cursor-pointer hover:underline underline-offset-4 text-2xl">
                <span>
                  <CiFacebook />
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Navbar */}
        <nav className=" mt-2 ">
          <div className=" w-[90vw] mx-auto flex items-center justify-between">
            {/* Logo */}
            <div>
              <img
                src={logoImg}
                alt="Website logo"
                className="w-12 h-12 rounded-full"
              />
            </div>
            {/* Navbar */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="hover:text-blue-900 cursor-pointer hover:underline underline-offset-8  transition-all duration-150 ease-in">
                  Home
                </li>
                <li className="hover:text-blue-900 cursor-pointer hover:underline underline-offset-8  transition-all duration-150 ease-in">
                  Books
                </li>
                <li className="hover:text-blue-900 cursor-pointer hover:underline underline-offset-8  transition-all duration-150 ease-in">
                  About us
                </li>
                <li className="hover:text-blue-900 cursor-pointer hover:underline underline-offset-8  transition-all duration-150 ease-in">
                  Contact us
                </li>
              </ul>
            </div>
            {/* icons */}

            {/* mobile menu */}
            <div className="flex items-center gap-4 justify-between">
              <button className="text-xl cursor-pointer hover:bg-blue-900 transition-all duration-150 ease-in hover:text-white px-1 py-1 rounded-full ">
                <CgProfile />
              </button>
              <button className="text-xl cursor-pointer hover:bg-blue-900 transition-all duration-150 ease-in hover:text-white px-1 py-1 rounded-full ">
                <FaCartShopping />
              </button>
              <button className="hidden md:block cursor-pointer hover:bg-blue-900 transition-all duration-150 ease-in hover:text-white px-1 py-1 rounded-full ">
                Sign UP
              </button>
              <div className="md:hidden text-xl " onClick={handleClick}>
                {open ? <MdOutlineCancel /> : <VscThreeBars />}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <ResponsiveMenu open={open} />
    </>
  );
}

export default Navbar;
