import React from "react";
import graphIcon from "../icons/graph-icon.svg";
import storageIcon from "../icons/storage-icon.svg";
import img from "../img/second-img.png";

export default function SecondSection() {
  return (
    <div className="py-10 lg:py-[100px] px-5 bg-white">
      <h2 className="font-primary font-bold text-[32px] lg:text-5xl text-center  leading-tight">
        Business Intelligence Platform
      </h2>
      <p className="text-paragraph text-sm lg:text-lg font-secondary text-center my-4">
        Gain a deep understanding of the African market with our robust business
        intelligence tools
      </p>{" "}
      <div className="space-y-5 my-14 lg:my-20  lg:py- lg:px-[204px]  lg:space-y-0 lg:flex  lg:justify-between lg:gap-20  ">
        <div className=" flex gap-4  lg:flex-1">
          <div className="mt-1 basis-10 shrink-0 ">
            <img className=" w-7 h-7   " src={storageIcon} alt="" />
          </div>
          <div>
            <h3 className="text-xl lg:text-3xl font-primary font-bold ">
              Extensive Database
            </h3>
            <p className="mt-2 text-paragraph text-sm lg:text-base font-secondary">
              Access data from millions of companies across Africa, sourced from
              trusted channels.
            </p>
          </div>
        </div>

        <div className="hidden lg:block   lg:border-l-2"></div>

        <div className=" flex  gap-4  lg:flex-1">
          <div className="mt-1 basis-10 shrink-0 ">
            <img className="w-7 h-7 " src={graphIcon} alt="" />
          </div>
          <div>
            <h3 className="text-xl lg:text-3xl   font-primary font-bold">
              Data Insights
            </h3>
            <p className="mt-2  text-paragraph text-sm  lg:text-base font-secondary">
              Use actionable data to make informed decisions.
            </p>
          </div>
        </div>
      </div>
      <div className="my-5 lg:px-[204px]">
        <img
          src={img}
          alt=""
          className="p-4 bg-gradient-to-b from-[#2bb19c] to-[#c4f0e9] rounded hover:opacity-90"
        />
      </div>
      <div className="mt-8 lg:mt-14 text-center">
        <a
          href="/"
          className=" text-white text-sm bg-btn rounded py-2 font-primary leading-none px-3 lg:py-3 lg:px-5 lg:text-lg transition hover:bg-[#065a4f]"
        >
          Discover Our Database
        </a>
      </div>
    </div>
  );
}
