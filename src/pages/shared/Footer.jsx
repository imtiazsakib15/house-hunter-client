import { Link } from "react-router-dom";
import logo from "/house-icon.png";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";
import SectionContainer from "../shared/SectionContainer";

const Footer = () => {
  return (
    <footer className="bg-violet-950 pt-10 sm:pt-14 lg:pt-20 border-t">
      <SectionContainer>
        <div className="grid grid-cols-2 md:grid-cols-4 pb-5 sm:pb-8 gap-10">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} className="h-8" alt="Logo" />
              <span className="text-2xl text-white font-mono whitespace-nowrap">
                House Hunter
              </span>
            </Link>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Important Links</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200"
                  to="/"
                >
                  Home
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200"
                  to="/login"
                >
                  Login
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200"
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Follow Us On</h4>

            <div className="mt-4">
              <Link
                className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                to="/"
              >
                <BsFacebook />
              </Link>
              <Link
                className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                to="/"
              >
                <BsGoogle />
              </Link>
              <Link
                className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                to="/"
              >
                <BsTwitter />
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-5 sm:py-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()}{" "}
            <Link className="underline" to="/">
              House Hunter
            </Link>
            . All rights reserved.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
