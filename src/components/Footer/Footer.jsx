import React from "react";
import { BsBook } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <section className="bg-blue-950 text-white mt-10">
      <div className="w-[80vw] mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="mt-5">
          <div id="Logo" className="text-4xl">
            <p>
              <BsBook />
            </p>
          </div>
          <div className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            quos minima nam veritatis perferendis? Sunt maxime sint ea nobis
            perferendis!
          </div>
          <div id="Links" className="mt-10 flex gap-3 text-2xl">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaYoutube />
            </span>
          </div>
          <div className="mt-15 mb-15">All rights reserved</div>
        </div>
        <div className="md:ml-5 mt-5">
          <div className="text-2xl">
            <h1>Company</h1>
          </div>
          <div className="mt-8 ">
            <ul className="flex flex-col gap-4">
              <li className="cursor-pointer ">Home</li>
              <li className="cursor-pointer ">Books</li>
              <li className="cursor-pointer ">About us</li>
              <li className="cursor-pointer ">Contact us</li>
            </ul>
          </div>
        </div>
        <div className="mt-5">
          <div className="text-2xl">
            <h1>Important Links</h1>
          </div>
          <div className="mt-8">
            <ul className="flex flex-col gap-4">
              <li className="cursor-pointer ">Privacy policy</li>
              <li className="cursor-pointer ">FAQs</li>
              <li className="cursor-pointer ">Term and services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
