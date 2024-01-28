"use client";
import { FC } from "react";
import { Button } from "@/components/ui/button";

interface HeroTextProps {}

const HeroText: FC<HeroTextProps> = ({}) => {
  return (
    <section className="text-white flex flex-col gap-6 pb-12 items-center justify-center text-center p-4 md:text-start md:items-start">
      <h3 className="md:text-xl text-gray-500 font-medium">Pro.Beyond</h3>
      <h1 className="md:text-6xl text-5xl font-thin">
        IPhone 14 <span className="font-normal">Pro</span>
      </h1>
      <p className="text-gray-500 font-medium">
        Created to change everything for the better. For everyone
      </p>
      <Button className="bg-transparent border border-white shadow-md w-1/2 py-6 hover:bg-gray-500">
        Shop Now
      </Button>
    </section>
  );
};

export default HeroText;
