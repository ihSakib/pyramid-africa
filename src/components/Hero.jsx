import React from "react";
import heroImg from "../img/hero-img.png";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-20 lg:pt-[115px] lg:pb-[170px] lg:pl-[204px] lg:items-center px-5  bg-[#124b42]">
      <div className="lg:flex-1 ">
        <div>
          <h1 className="text-[32px] lg:text-[40px] font-primary font-bold text-white leading-8 lg:leading-none pt-10 lg:pt-0">
            Pyramid.Africa - Access Millions of Innovative African Businesses
          </h1>
          <p className="pt-4 pb-10 font-secondary text-white text-sm lg:text-lg">
            Sales intelligence platform that provides businesses with company
            data and sales tools to enhance their sales and marketing efforts.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <a
            href="/"
            className="bg-btn text-white font-primary rounded py-3 px-4 text-sm  lg:text-lg hover:bg-opacity-80 transition"
          >
            Discover Our Database
          </a>
          <a
            href="/"
            className="py-3 px-4 text-sm lg:text-lg font-primary text-white border-2 border-white rounded-md hover:bg-white hover:text-[#124b42]"
          >
            Create Your First Campaign — It's Free
          </a>
        </div>
      </div>
      <div className="py-10 lg:py-0 lg:flex-1  overflow-x-hidden -mr-5  ">
        <img
          className="translate-x-8 border-[#1a7062] border-4 rounded-md bg-[#1a7062]"
          src={heroImg}
          alt=""
        />
      </div>
    </div>
  );
}
