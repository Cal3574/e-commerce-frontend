"use client";
import { FC } from "react";
import { navItems } from "@/_constants/navItems";
import Link from "next/link";
interface MobileItems {}

const MobileItems: FC<MobileItems> = ({}) => {
  return (
    <ul className="flex flex-col gap-12 items-center p-12">
      {navItems.map((item, index) => {
        return (
          <Link key={index} href={item.url}>
            <li
              key={index}
              className=" hover:text-slate-400 duration-300 transition-all text-white w-full h-full"
            >
              {item.name}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default MobileItems;
