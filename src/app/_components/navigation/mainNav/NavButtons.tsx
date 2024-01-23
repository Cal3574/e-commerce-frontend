"use client";
import { FC } from "react";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

interface NavButtonsProps {}

const NavButtons: FC<NavButtonsProps> = ({}) => {
  return (
    <section className="flex gap-8">
      <button className="">
        <SlBasket size={30} />
      </button>
      <button className="">
        <CiHeart size={30} />
      </button>
      <button className="">
        <IoPersonOutline size={30} />
      </button>
    </section>
  );
};

export default NavButtons;
