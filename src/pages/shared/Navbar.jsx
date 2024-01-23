import { Link } from "react-router-dom";
import houseIcon from "/house-icon.png";
import SectionContainer from "./SectionContainer";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/register"}>Register</Link>
      </li>
      <li>
        <Link to={"login"}>login</Link>
      </li>
    </>
  );
  return (
    <div className="shadow-md">
      <SectionContainer>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <div className="flex items-center justify-center gap-1 font-mono">
              <img className="w-7 h-7" src={houseIcon} alt="" />
              <Link to={"/"} className="text-xl sm:text-2xl min-w-max">
                House Hunter
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Navbar;
