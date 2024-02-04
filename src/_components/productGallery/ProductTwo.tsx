import { cn } from "@/lib/utils";
import { FC } from "react";

interface ProductTwoProps {
  className?: string;
}

const ProductTwo: FC<ProductTwoProps> = ({ className }) => {
  return <div className={cn(className, "h-full w-full")}></div>;
};

export default ProductTwo;
