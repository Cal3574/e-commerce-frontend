import { FC } from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="max-w-6xl flex flex-col md:gap-0 lg:gap-40 md:flex-row w-full justify-center items-center h-[600px]">
      <HeroText />
      <HeroImage />
    </section>
  );
};

export default Hero;
