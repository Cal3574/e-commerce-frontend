"use client";
import { FC } from "react";
import { navItems } from "@/_constants/navItems";
import Link from "next/link";
interface NavItemsProps {}

const NavItems: FC<NavItemsProps> = ({}) => {
  return (
    <ul className="flex gap-12 items-center">
      {navItems.map((item, index) => {
        return (
          <Link key={index} href={item.url}>
            <li
              key={index}
              className="text-black hover:text-slate-400 duration-300 transition-all"
            >
              {item.name}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavItems;
