import { FC } from "react";
import Image from "next/image";
interface HeroImageProps {}

const HeroImage: FC<HeroImageProps> = ({}) => {
  return <Image src="/Iphone.svg" width={300} height={200} alt="Hero image" />;
};

export default HeroImage;
