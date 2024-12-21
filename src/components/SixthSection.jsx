import React from "react";
import star from "../icons/star.svg";
import tick from "../icons/tick-circle.svg";
import whiteTick from "../icons/tick-circle-white.svg";
import like from "../icons/like.svg";
import medal from "../icons/medal.svg";

export default function SixthSection() {
  return (
    <div className="py-14  lg:py-20 px-5 bg-[#2BB19C]">
      <h2 className="font-primary text-white font-bold text-[32px] lg:text-5xl text-center leading-tight ">
        Pricing Plans{" "}
      </h2>
      <p className="text-white text-sm lg:text-lg font-secondary text-center my-4">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
      </p>

      <div className="space-y-6 my-10 lg:flex lg:px-[200px] lg:gap-6 lg:space-y-0 lg:mt-20">
        <div className="bg-white py-6 px-8">
          <div>
            <img src={star} alt="" className="mb-6" />
            <h2 className="text-xl text-[#062d28] font-primary font-bold">
              Starter Plan
            </h2>
            <p className="font-secondary text-sm mb-4">One off campaign</p>
            <div className="flex gap-4 items-center">
              <p>
                {" "}
                <span className="text-[#062D28]  text-[28px] font-bold font-secondary ">
                  $99
                </span>
              </p>
              <p className="text-[#062D28] font-secondary text-sm">
                /free for the first 100 users No credit card needed
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/"
              className=" text-white text-sm bg-[#2a9d8f] block py-3 font-primary leading-none font-medium px-3 "
            >
              Get Started
            </a>
          </div>

          <div className="mt-8">
            <h2 className="font-secondary text-lg mb-4 ">Features:</h2>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <img src={tick} alt="" />
                <p className="text-sm font-secondary text-paragraph">
                  Access to business intelligence database with up to 100
                  initial company profiles of your target audience
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <img src={tick} alt="" />
                <p className="text-sm font-secondary text-paragraph">
                  1500 lead generation credits with verified contact emails
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <img src={tick} alt="" />
                <p className="text-sm font-secondary text-paragraph">
                  Basic email outreach tools with automated follow-ups for one
                  campaign
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <img src={tick} alt="" />
                <p className="text-sm font-secondary text-paragraph">
                  CRM with basic lead and deal management
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <img src={tick} alt="" />
                <p className="text-sm font-secondary text-paragraph">
                  Team collaboration for up to 3 users
                </p>
              </li>
              <li className="flex gap-2  pt-2 items-start">
                <span>•</span>
                <p className="text-xs font-secondary text-paragraph">
                  Ideal for startups or small teams looking to enter the African
                  market with a cost-effective solution
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#124B42]  py-6 px-8">
          <div>
            <img src={like} alt="" className="mb-6" />
            <h2 className="text-xl text-white font-primary font-bold">
              Growth Plan
            </h2>
            <p className="font-secondary text-white text-sm mb-4">
              For businesses seeking to scale their outreach and sales
              operations
            </p>
            <div className="flex gap-4 items-center">
              <p>
                {" "}
                <span className="text-white text-[28px] font-bold font-secondary ">
                  $99
                </span>
              </p>
              <p className="text-white font-secondary text-sm">/month</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/"
              className=" text-white text-sm bg-[#2a9d8f] block py-3 font-primary leading-none font-medium px-3 "
            >
              Get Started
            </a>
          </div>

          <div className="mt-8">
            <h2 className="font-secondary text-lg text-white mb-4 ">
              Features:
            </h2>
            <ul className="space-y-3  text-white">
              <li className="flex gap-2 items-start">
                <img src={whiteTick} alt="" />
                <p className="text-sm font-secondary ">
                  Access to business intelligence database with up to 100
                  initial company profiles of your target audience
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <img src={whiteTick} alt="" />
                <p className="text-sm font-secondary ">
                  1500 lead generation credits with verified contact emails
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <img src={whiteTick} alt="" />
                <p className="text-sm font-secondary ">
                  Basic email outreach tools with automated follow-ups for one
                  campaign
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <img src={whiteTick} alt="" />
                <p className="text-sm font-secondary ">
                  CRM with basic lead and deal management
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <img src={whiteTick} alt="" />
                <p className="text-sm font-secondary ">
                  Team collaboration for up to 3 users
                </p>
              </li>
              <li className="flex gap-2  pt-2 items-start">
                <span>•</span>
                <p className="text-xs font-secondary ">
                  Ideal for startups or small teams looking to enter the African
                  market with a cost-effective solution
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white py-6 px-8">
          <div>
            <img src={medal} alt="" className="mb-6" />
            <h2 className="text-xl text-[#062d28] font-primary font-bold">
              Enterprise Plan
            </h2>
            <p className="font-secondary text-sm mb-4">
              For enterprises with advanced sales and business development needs
            </p>
            <p className="text-[#2a9d8f] font-primary text-[32px] font-bold ">
              Custom Pricing
            </p>
          </div>

          <div className="mt-4 text-center">
            <a
              href="/"
              className=" text-white text-sm bg-[#2a9d8f] block py-3 font-primary leading-none font-medium px-3 "
            >
              Get Started
            </a>
          </div>

          <div className="mt-8">
            <h2 className="font-secondary text-lg mb-4 ">Features:</h2>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <img src={tick} alt="" />
                <p className="text-sm font-secondary text-paragraph">
                  Access to business intelligence database with up to 100
                  initial company profiles of your target audience
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <img src={tick} alt="" />
                <p className="text-sm font-secondary text-paragraph">
                  1500 lead generation credits with verified contact emails
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <img src={tick} alt="" />
                <p className="text-sm font-secondary text-paragraph">
                  Basic email outreach tools with automated follow-ups for one
                  campaign
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <img src={tick} alt="" />
                <p className="text-sm font-secondary text-paragraph">
                  CRM with basic lead and deal management
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <img src={tick} alt="" />
                <p className="text-sm font-secondary text-paragraph">
                  Team collaboration for up to 3 users
                </p>
              </li>
              <li className="flex gap-2  pt-2 items-start">
                <span>•</span>
                <p className="text-xs font-secondary text-paragraph">
                  Ideal for startups or small teams looking to enter the African
                  market with a cost-effective solution
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
