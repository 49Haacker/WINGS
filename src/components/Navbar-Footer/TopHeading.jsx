import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import SideNavbar from "./SideNavbar";
import { Link } from "react-router-dom";

const TopHeading = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-between md:justify-center bg-[#40e4ed] p-2">
          {/* <h1 className="text-2xl text-center font-semibold font-[Bungee]">
            WINGS FASHON
          </h1> */}
          <Link to={"/"} className="w-full contents">
            <img
              src="/assets/page-1/WINGS-Top-Text.png"
              alt="WINGS-Top-Text"
              className="w-1/2 md:w-1/4 object-fill"
            />
          </Link>

          <div className="md:hidden flex pr-4">
            <VscThreeBars
              className="text-4xl text-black cursor-pointer"
              onClick={toggleSideNav}
            />
          </div>
        </div>

        <div className="w-full h-2 bg-black"></div>
      </div>

      {isSideNavOpen && <SideNavbar toggleSideNav={toggleSideNav} />}
    </>
  );
};

export default TopHeading;
