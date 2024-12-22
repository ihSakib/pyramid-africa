import React from "react";
import img from "../img/seventh-img.png";

export default function SixthSection() {
  return (
    <div className="py-10 lg:py-24 px-5 bg-[#EFF5F4]">
      <h2 className="font-primary font-bold text-[32px] lg:text-5xl text-center leading-tight ">
        How Pyramid.Africa Works{" "}
      </h2>
      <p className="text-paragraph text-sm lg:text-lg font-secondary text-center my-4">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
      </p>

      <div className="lg:flex lg:gap-20 lg:flex-row-reverse lg:items-center lg:px-[200px] lg:mt-20 ">
        <div className="pl-6 my-12 lg:my-0 lg:pl-0 ">
          <div className="pl-8 lg:pl-14 pb-8 border-l-4 border-[#087a68] relative hover:bg-[#e0f2f1]">
            <div className="absolute -top-1 -left-6 bg-[#087a68] text-white h-10 w-10 rounded-full flex justify-center items-center text-xl font-semibold font-secondary">
              1
            </div>
            <h2 className="font-primary text-xl font-bold lg:text-2xl">
              Explore Our Database
            </h2>
            <p className="font-secondary text-sm text-paragraph lg:text-base">
              Have a look at our database to understand its power. Apply filters
              and see detailed insights about potential lead companies,
              industries, and regions.
            </p>
          </div>

          <div className="pl-8 lg:pl-14 pb-8 border-l-4 border-[#087a68] relative hover:bg-[#e0f2f1]">
            <div className="absolute -top-1 -left-6 bg-[#087a68] text-white h-10 w-10 rounded-full flex justify-center items-center text-xl font-semibold font-secondary">
              2
            </div>
            <h2 className="font-primary text-xl font-bold lg:text-2xl">
              Sign Up and Define Your Target Audience
            </h2>
            <p className="font-secondary text-sm text-paragraph lg:text-base">
              Pinpoint the companies, industries, and regions you want to engage
              with across Africa. Set your criteria to reach the decision-makers
              that matter most to your business.
            </p>
          </div>

          <div className="pl-8 lg:pl-14 pb-8 border-l-4 border-[#087a68] relative hover:bg-[#e0f2f1]">
            <div className="absolute -top-1 -left-6 bg-[#087a68] text-white h-10 w-10 rounded-full flex justify-center items-center text-xl font-semibold font-secondary">
              3
            </div>
            <h2 className="font-primary text-xl font-bold lg:text-2xl">
              Access your leads
            </h2>
            <p className="font-secondary text-sm text-paragraph lg:text-base">
              from our African business database, along with verified email
              contacts of key decision-makers. Use our automated outreach tools
              to send targeted emails, send follow-ups, and track engagement.
            </p>
          </div>

          <div className="pl-8 lg:pl-14 pb-12 border-l-4 border-[#087a68] relative hover:bg-[#e0f2f1]">
            <div className="absolute -top-1 -left-6 bg-[#087a68] text-white h-10 w-10 rounded-full flex justify-center items-center text-xl font-semibold font-secondary">
              4
            </div>
            <h2 className="font-primary text-xl font-bold lg:text-2xl">
              Automate Outreach
            </h2>
            <p className="font-secondary text-sm text-paragraph lg:text-base">
              to your target audience and track engagement and convert
              opportunities into actionable deals.
            </p>
          </div>

          <div className="pl-8 lg:pl-14 pb-4 relative hover:bg-[#e0f2f1]">
            <div className="absolute -top-1 -left-5 bg-[#087a68] text-white h-10 w-10 rounded-full flex justify-center items-center text-xl font-semibold font-secondary">
              5
            </div>
            <h2 className="font-primary text-xl font-bold lg:text-2xl">
              Manage Relationships
            </h2>
            <p className="font-secondary text-sm text-paragraph lg:text-base">
              in a centralized CRM, using AI tools collaborate on deals, track
              progress to move deals through the sales pipeline, and convert
              them into paying customers.
            </p>
          </div>
        </div>

        <div className=" ">
          <img className="" alt="" src={img} />
        </div>
      </div>

      <div className=" text-center my-4 lg:mt-14">
        <a
          href="/"
          className=" text-white text-sm lg:text-lg lg:py-3 lg:px-5  bg-btn rounded-md py-2 font-primary leading-none px-3 transition hover:bg-[#065a4f]"
        >
          Discover Our Database{" "}
        </a>
      </div>
    </div>
  );
}
