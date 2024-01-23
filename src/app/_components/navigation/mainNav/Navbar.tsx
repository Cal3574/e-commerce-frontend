"use client";

import Image from "next/image";
import { FC } from "react";
import NavSearch from "./NavSearch";
import NavItems from "./NavItems";
import NavButtons from "./NavButtons";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="h-24 bg-white p-12 flex items-center justify-center ">
      <section className="flex gap-12 w-full max-w-[1280px] ">
        <Image src="/logo/Logo.svg" width={300} height={200} alt="logo" />
        <NavSearch />
        <NavItems />
        <NavButtons />
      </section>
    </div>
  );
};

export default Navbar;
