import { FC } from "react";
import Image from "next/image";
interface HeroImageProps {}

const HeroImage: FC<HeroImageProps> = ({}) => {
  return (
    <Image
      src="/Iphone.svg"
      width={500}
      height={500}
      alt="Hero image"
      className="p-14 md:p-8 mt-16"
    />
  );
};

export default HeroImage;
