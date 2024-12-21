import React from "react";
import mike from "../icons/mike.svg";
import people from "../icons/people.svg";
import man from "../icons/man.svg";
import firstImg from "../img/third-img.png";
import secondImg from "../img/fourth-img.png";

export default function ThirdSection() {
  return (
    <div className="py-10 lg:py-[120px] px-5 bg-[#eff5f4]">
      <h2 className="font-primary font-bold text-[32px] lg:text-5xl text-center leading-tight ">
        Email Outreach & Automation Tools
      </h2>
      <p className="text-paragraph text-sm lg:text-lg font-secondary text-center my-4">
        Reach your audience effectively and nurture relationships effortlessly.
      </p>

      <div className="lg:flex lg:gap-14 lg:items-center lg:px-[250px] lg:my-20">
        <div className="space-y-8 mt-14 lg:mt-0  lg:flex-1">
          <div className=" flex gap-4 ">
            <div className="mt-1 basis-10 shrink-0 ">
              <img className=" w-7 h-7 " src={people} alt="" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-primary font-bold ">
                Lead Generation
              </h3>
              <p className="mt-2 text-paragraph text-sm lg:text-base font-secondary">
                Define your target audience and generate an initial list of
                leads.
              </p>
            </div>
          </div>

          <div className=" flex  gap-4">
            <div className="mt-1 basis-10 shrink-0">
              <img className="w-7 h-7 " src={mike} alt="" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-primary font-bold ">
                Smart Outreach
              </h3>
              <p className="mt-2 text-paragraph text-sm lg:text-base font-secondary">
                Access verified email contacts, send automated outreach emails,
                and track engagement.
              </p>
            </div>
          </div>

          <div className=" flex  gap-4">
            <div className="mt-1 basis-10 shrink-0">
              <img className="w-7 h-7 " src={man} alt="" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-primary font-bold ">
                Lead Nurturing
              </h3>
              <p className="mt-2 text-paragraph text-sm lg:text-base font-secondary">
                Qualify and nurture leads, with AI-suggested new prospects
                (smart leads).
              </p>
            </div>
          </div>

          <div className="pt-8 lg:pt-10 text-center lg:text-left">
            <a
              href="/"
              className=" text-white text-sm lg:text-lg lg:py-3 lg:px-5 bg-btn rounded py-2 font-primary leading-none px-3 "
            >
              Create Your First Campaign - it's free
            </a>
          </div>
        </div>

        <div className="my-12 lg:my-0  space-y-8 lg:flex-1">
          <img className="" src={firstImg} alt="" />
        </div>
      </div>
      <div className="lg:px-[250px]">
        <img src={secondImg} alt="" />
      </div>
    </div>
  );
}
