import React from "react";
import ProductOne from "./ProductOne";
import ProductTwo from "./ProductTwo";
import ProductThree from "./ProductThree";

interface ProductGalleryHomeProps {}

const ProductGalleryHome: React.FC<ProductGalleryHomeProps> = () => {
  return (
    <section className="max-w-full w-full bg-white">
      <section className="w-full flex h-[800px] md:h-[800px] md:flex-row flex-col mx-auto max-w-[2000px]">
        <div className=" w-full flex flex-col h-full ">
          <ProductOne
            title="Playstation 5"
            description="Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience."
          />
          <div className="flex  h-full">
            <ProductTwo className="bg-[#EDEDED]" />
            <ProductTwo className="bg-[#353535]" />
          </div>
        </div>

        <ProductThree />
      </section>
    </section>
  );
};

export default ProductGalleryHome;
