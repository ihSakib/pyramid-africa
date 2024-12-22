import React from "react";
import db from "../icons/db.svg";
import people from "../icons/people-circle.svg";
import brain from "../icons/brain.svg";
import img from "../img/fifth-img.png";

export default function FourthSection() {
  return (
    <div className="py-10 px-5 lg:py-[100px] bg-white">
      <h2 className="font-primary font-bold text-[32px] lg:text-5xl text-center leading-tight ">
        Comprehensive CRM Solution{" "}
      </h2>
      <p className="text-paragraph text-sm lg:text-lg font-secondary text-center my-4">
        Streamline your sales operations and build lasting client relationships.
      </p>

      <div className="lg:flex lg:gap-20 lg:px-[220px] lg:py-20 lg:items-center">
        {" "}
        <div className="space-y-8 mt-14 lg:mt-0 lg:flex-1 ">
          <div className=" flex gap-4 ">
            <div className="mt-1 basis-10 shrink-0 ">
              <img className=" w-7 h-7 " src={db} alt="" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-primary font-bold ">
                All-in-One Management
              </h3>
              <p className="mt-2 text-paragraph text-sm lg:text-base font-secondary">
                Streamline your sales operations and build lasting client
                relationships.
              </p>
            </div>
          </div>

          <div className=" flex  gap-4">
            <div className="mt-1 basis-10 shrink-0">
              <img className="w-7 h-7 " src={people} alt="" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-primary font-bold ">
                Enhanced Collaboration
              </h3>
              <p className="mt-2 text-paragraph text-sm lg:text-base font-secondary">
                Track interactions, collaborate with your team, and optimize
                sales performance.
              </p>
            </div>
          </div>

          <div className=" flex  gap-4">
            <div className="mt-1 basis-10 shrink-0">
              <img className="w-7 h-7 " src={brain} alt="" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-primary font-bold ">
                {" "}
                AI-Driven Efficiency
              </h3>
              <p className="mt-2 text-paragraph text-sm lg:text-base font-secondary">
                Use AI-powered tools like Email Writers, Meeting Summaries, and
                Action Recommendations.
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pt-8 text-center">
            <a
              href="/"
              className=" text-white text-sm lg:text-lg lg:py-3 lg:px-5 bg-btn rounded py-3 font-primary leading-none px-3 block w-full lg:w-fit hover:bg-[#065a4f] transition"
            >
              Create Your First Campaign - it's free
            </a>
          </div>
        </div>
        <div className="my-12 lg:my-0 lg:flex-1">
          <img className="hover:opacity-90" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
