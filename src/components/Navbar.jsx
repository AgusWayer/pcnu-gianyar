"use client";
import React from "react";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
const Navbar = ({ position, background, color }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => {
      setToggle(!prev);
    });
  };
  const positionFixed = `${position} w-full`;

  const toggleTrue = "fixed md:static left-0 bg-white w-11/12 md:w-fit md:bg-transparent md shadow top-0 px-3 py-5 md:py-0 md:px-0 md:shadow-none h-screen md:h-fit";
  return (
    <div className={`px-8 py-5 flex justify-between  z-10 ${position ? positionFixed : "static"} ${background ? background : "bg-transparent"} ${color ? `text-${color}` : "black"}`}>
      <div className="">
        <a href="">LOGO PCNU GIANYAR </a>
      </div>
      <div className="md:hidden">
        <FontAwesomeIcon icon={faBars} onClick={handleToggle} />
      </div>
      <div className={`md:flex ${toggle ? toggleTrue : "hidden"}`}>
        <div className={`${toggle ? "absolute right-0 p-5 top-0 md:hidden" : "md:hidden"}`}>
          <FontAwesomeIcon icon={faX} onClick={handleToggle} />
        </div>
        <ul className="md:flex">
          <li className="md:hidden">
            <h1 className="mx-4 text-xl font-bold">PCNU Gianyar </h1>
          </li>
          <li className="mx-4 my-8 md:my-0">
            <a href="">Home</a>
          </li>
          <li className="mx-4 my-8 md:my-0">
            <a href="">About Us</a>
          </li>
          <li className="mx-4 my-8 md:my-0">
            <a href="">Gallery</a>
          </li>
          <li className="ms-4 my-8 md:my-0">
            <a href="">Articles</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
