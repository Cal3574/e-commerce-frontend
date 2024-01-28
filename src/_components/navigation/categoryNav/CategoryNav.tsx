"use client";
import { FC } from "react";
import CategoryNavItems from "./CategoryNavItems";

interface CategoryNavProps {}

const CategoryNav: FC<CategoryNavProps> = ({}) => {
  return (
    <div className="bg-[#252525] w-full h-14  items-center justify-center hidden md:flex">
      <CategoryNavItems />
    </div>
  );
};

export default CategoryNav;