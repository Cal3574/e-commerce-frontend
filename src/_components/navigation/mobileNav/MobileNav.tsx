"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import MobileSideBar from "./MobileSideBar";

interface NavbarProps {}

const MobileNavBar: FC<NavbarProps> = ({}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="h-24 bg-white p-4 flex items-center justify-center sticky top-0 shadow-md">
        <section className="flex gap-12 w-full max-w-[1280px] justify-between ">
          <Image src="/logo/Logo.svg" width={100} height={100} alt="logo" />
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </section>
      </div>
      <section className="">
        <MobileSideBar isOpen={isOpen} setOpen={setOpen} />
      </section>
    </>
  );
};

export default MobileNavBar;
