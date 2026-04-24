"use client";

import Image from "next/image";
import logo from "../../public/favicon.png";
import Button, { AltButton } from "../ui/button";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import NavLinks from "./NavLinks";

function BrandActions() {
  return (
    <div className="flex gap-6 items-center ">
      <Button
        icon={
          <div className="rounded-full bg-white flex justify-around items-center h-full text-[#571244] p-1">
            <FiUser />
          </div>
        }
        title={"Account"}
        point={<FaAngleDown />}
      />
      <AltButton title={"Take Assessment"} />
    </div>
  );
}

export default function Header() {
  const [isNav, setIsNav] = useState(false);
  const ShowNav = () => setIsNav(!isNav);

  return (
    <>
      <header className="w-full h-43.25 max-lg:h-19 shadow-md z-50 bg-white flex flex-col justify-center overflow-hidden">
        <section className="flex justify-between items-center w-full lg:px-16 px-4 h-26">
          <div>
            <Image src={logo} alt="logo" placeholder="blur" width={165.71} />
          </div>
          <div className="max-lg:hidden block">
            <BrandActions />
          </div>
          <div
            className="max-lg:block hidden bg-[#151515] text-white rounded-sm p-1 cursor-pointer text-xl"
            onClick={() => ShowNav()}
          >
            {!isNav ? <FaBars /> : <FaTimes />}
          </div>
        </section>
        <nav className="flex items-center gap-8 justify-center h-full max-lg:hidden ">
          <NavLinks />
        </nav>
      </header>
      {isNav && (
        <div className="flex flex-col items-center gap-4 min-h-screen pt-6 lg:hidden">
          <BrandActions />
          <nav className="flex flex-col ">
            <NavLinks />
          </nav>
        </div>
      )}
    </>
  );
}
