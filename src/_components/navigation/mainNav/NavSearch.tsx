"use client";
import { FC } from "react";
import { Input } from "@/components/ui/input";

interface NavSearchProps {}

const NavSearch: FC<NavSearchProps> = ({}) => {
  return (
    <Input
      type="email"
      placeholder="Email"
      className="bg-slate-50 h-14 hidden lg:flex"
    />
  );
};

export default NavSearch;
