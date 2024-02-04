"use client";
import { useCart } from "@/_providers/CartProvider";
import { CartItem, CartProduct } from "@/_types/cart";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { FC } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

interface ShoppingCartProps {}

const ShoppingCart: FC<ShoppingCartProps> = () => {
  const { cartLoading, items, removeItem } = useCart()!;

  //debounce

  return (
    <Sheet>
      <SheetTrigger>
        <SlBasket size={30} />
      </SheetTrigger>
      <SheetContent>
        <div className=" inset-0 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-2xl font-semibold">Your Basket</h2>
              <button className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Close</span>
                <SlBasket size={24} />
              </button>
            </div>

            {cartLoading && (
              <div className="text-xl flex items-center justify-center p-4">
                Loading...
              </div>
            )}

            {items?.isSuccess && !items.data && (
              <div className="text-xl flex items-center justify-center p-4">
                Your basket is empty
              </div>
            )}

            <div className="p-4">
              {items?.isSuccess &&
                items?.data?.cartItems.map((item: CartItem & CartProduct) => (
                  <div
                    key={item.cartItemId}
                    className="flex justify-between items-center p-2 hover:bg-gray-50 h-24"
                  >
                    <Image
                      src={item.product.image}
                      width={50}
                      height={50}
                      alt="Basket item"
                    />
                    <span className="font-semibold">{item.product.name}</span>
                    <button
                      onClick={async () => {
                        removeItem(Number(item.cartItemId));
                      }}
                    >
                      <AiTwotoneDelete size={24} />
                    </button>
                  </div>
                ))}
            </div>
            <div className="flex justify-end items-center p-4">
              <Button className="bg-transparent border border-black shadow-md w-1/2 py-6 hover:bg-gray-500 text-black hover:text-white">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
