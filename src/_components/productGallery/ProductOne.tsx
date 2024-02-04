import Image from "next/image";
import { FC } from "react";

interface ProductOneProps {
  className?: string;
  title: string;
  description: string;
}

const ProductOne: FC<ProductOneProps> = ({ title, description, className }) => {
  return (
    <section className="bg-white h-1/2 flex items-center">
      <div className="">
        <Image
          src="/productGallery/PlayStation.svg"
          width={700}
          height={500}
          alt="Hero image"
        />
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default ProductOne;
