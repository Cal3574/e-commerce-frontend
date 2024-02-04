"use client";
import { useCart } from "@/_providers/CartProvider";
import { Product } from "@/_types/product";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FC, useState } from "react";
import { CiHeart } from "react-icons/ci";

import { Input } from "@/components/ui/input";
interface MainProductCardProps {
  product: Product;
}

const MainProductCard: FC<MainProductCardProps> = ({ product }) => {
  const { data: session, status } = useSession();
  const { cartLoading, items, addItem } = useCart()!;
  const [quantity, setQuantity] = useState<string>("1");

  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value);
  };

  return (
    <section className="rounded-xl h-[32rem] w-[18rem] overflow-hidden bg-[#F6F6F6] flex flex-col gap-4">
      <div className="w-full flex justify-between p-6">
        <div className="border border-gray-200 rounded-md p-1 px-6 bg-gray-50 text-black">
          {/* {product.categoryId} */}
          Phones
        </div>
        <CiHeart size={30} color="gray" />
      </div>
      <p className="text-center">{product.name}</p>

      <div className="w-full justify-center flex max-h-[12rem] min-h-[12rem]">
        <Image src={product.image} width={150} height={100} alt="logo" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-md ">{product.description}</h1>
        <p className="text-center text-lg font-semibold">{`£${product.price}`}</p>
      </div>

      <div className="flex justify-center items-center mx-auto gap-2">
        <Input
          type="number"
          placeholder="Quantity"
          className="w-1/3"
          value={quantity}
          onChange={handleQuantity}
        />
        <Button
          className="bg-[#000000] border border-black shadow-md w-2/4 py-4 hover:bg-white hover:text-black  text-white"
          onClick={() => {
            addItem(product.id, quantity);
          }}
        >
          Add to Cart
        </Button>
      </div>
    </section>
  );
};

export default MainProductCard;
