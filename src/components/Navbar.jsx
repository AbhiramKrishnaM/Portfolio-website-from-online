import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className="paddingX w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex gap-4  items-center"
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-[10%] object-contain" />
          <p className="text-white text-[26px]  font-normal cursor-pointer">
            Abhiram{" "}
            <span className="hidden sm:block text-[34px] font-semibold ">
              {" "}
              Krishna M.
            </span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
