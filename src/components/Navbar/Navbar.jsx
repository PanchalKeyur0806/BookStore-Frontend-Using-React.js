import React from "react";
import { IoCall } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

function Navbar() {
  const logoImg =
    "https://www.matemart.in/Assets/images/products/d457c0235036396f11714cb337bc0445.png";
  return (
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
      <nav className="h-15 flex items-center justify-between bg-white px-10">
        <div id="logo">
          <img
            src={logoImg}
            alt="Website logo"
            className="rounded-full w-12 h-12"
          />
        </div>
        <div id="links">
          <ul className="flex items-center gap-3  font-medium font-mono text-xl">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Books</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Contact us</li>
          </ul>
        </div>
        <div id="users" className="font-medium ">
          <span className="mx-1 cursor-pointer">Profile</span>
          <span className="mx-1 cursor-pointer">Cart</span>
          <span className="mx-1 cursor-pointer">Favourites</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
