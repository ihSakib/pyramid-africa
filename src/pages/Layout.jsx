import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../img/logo.svg";
import footerLogo from "../img/footer-logo.svg";

export default function layout() {
  return (
    <div className=" ">
      <header className="bg-[#124B42] px-5 py-3 lg:px-[204px] lg:py-8">
        <nav className="flex justify-between items-center">
          {/***** nav left *******/}
          <div>
            <Link to="/">
              <img
                style={{ imageRendering: "pixelated" }}
                className="w-[110px] lg:w-[200px] lg:h-14  h-[31px]"
                src={logo}
                alt="logo "
              />
            </Link>
          </div>

          {/***** nav right *******/}
          <div className="flex justify-between items-center gap-4 lg:gap-7">
            <Link
              className="font-primary lg:text-lg leading-none text-white"
              to="/login"
            >
              Login
            </Link>
            <a
              className="bg-btn font-primary  text-white text-sm px-3 py-2 lg:px-4 rounded leading-none lg:text-lg"
              href="/"
              target="_blank"
            >
              See a demo
            </a>
          </div>
        </nav>
      </header>

      {/* main content */}
      <main>
        <Outlet />
      </main>

      {/* footer */}
      <footer className="bg-white px-5 lg:px-[204px] mt-10 lg:mt-20">
        <div className="lg:flex lg:justify-between">
          {/** footer top(mobile) or left(desktop) */}
          <div className="lg:basis-1/3">
            <img
              className="w-[130px] lg:w-[150px] lg:h-auto h-[36px]"
              src={footerLogo}
              alt=""
            />
            <p className="text-paragraph text-sm lg:text-lg mt-4">
              Pyramid.Africa is your ultimate sales intelligence platform,
              helping businesses across Africa connect, grow, and thrive.
            </p>
            <ul className="mt-6 flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full"
                >
                  <i className="fa-brands fa-x-twitter"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
          {/**footer middle(mobile) or right(desktop) */}
          <div className="mt-10 lg:mt-0 font-secondary">
            <div className="flex gap-10 lg:gap-20">
              {/* Quick Links */}
              <div>
                <h3 className="text-base lg:text-lg font-bold mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-paragraph text-sm lg:text-base">
                  <li>
                    <Link to="/" className="hover:text-black">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/features" className="hover:text-black">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" className="hover:text-black">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-black">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="text-base lg:text-lg font-bold mb-4">
                  Contact Us
                </h3>
                <div className="text-paragraph text-sm lg:text-base space-y-4">
                  <p>
                    Senegal | Ivory Coast | Nigeria |
                    <br />
                    South Africa | Morocco | Egypt
                  </p>
                  <a className="flex items-center" href="">
                    <i className="fa fa-envelope mr-2"></i>
                    support@pyramid.africa
                  </a>
                  <a className="flex items-center" href="">
                    <i className="fa fa-phone mr-2"></i>
                    +123-456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="hidden lg:block lg:mt-16" />
        {/** footer bottom(mobile & desktop) */}
        <div className="mt-10  lg:my-10 lg:flex lg:justify-between lg:items-center ">
          <div className="font-secondary text-sm text-center space-x-4  ">
            <a href="#">Terms of Service </a>
            <a href="">Privacy Policy</a>
          </div>
          <div className="mt-4 lg:mt-0 lg:py-0 py-4 border-t-[2px] lg:border-none border-gray-200 text-center text-sm font-secondary">
            © {new Date().getFullYear()} Pyramid Africa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
