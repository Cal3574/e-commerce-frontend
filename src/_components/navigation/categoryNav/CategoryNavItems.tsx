import { FC } from "react";
import { categoryNavItems } from "@/_constants/categoryNavItems";
import {
  FaListAlt,
  FaMobileAlt,
  FaTshirt,
  FaHome,
  FaHeartbeat,
  FaBook,
} from "react-icons/fa";
import { MdComputer } from "react-icons/md";

interface CategoryNavItemsProps {}

const renderIcons = (icon: string) => {
  switch (icon) {
    case "FaListAlt":
      return <FaListAlt />;
    case "FaMobileAlt":
      return <FaMobileAlt />;
    case "MdComputer":
      return <MdComputer />;
    case "FaHome":
      return <FaHome />;
    case "FaHeartbeat":
      return <FaHeartbeat />;
    case "FaBook":
      return <FaBook />;
    default:
      return <FaListAlt />;
  }
};

const CategoryNavItems: FC<CategoryNavItemsProps> = ({}) => {
  return (
    <section className="flex gap-12 sm:gap-4 text-gray-500 ">
      {categoryNavItems.map((item, index) => {
        return (
          <div key={index} className="categoryNavItem">
            <div className="flex items-center justify-center gap-2">
              {renderIcons(item.icon)}
              <h1>{item.title}</h1>
            </div>

            <ul></ul>
          </div>
        );
      })}
    </section>
  );
};

export default CategoryNavItems;
