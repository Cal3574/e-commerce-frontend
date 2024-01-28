"use client";
import { FC, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlBasket } from "react-icons/sl";
import { Button } from "@/components/ui/button";

interface ShoppingCartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ShoppingCartProps {
  items: ShoppingCartItem[];
}

const ShoppingCart: FC<ShoppingCartProps> = ({ items }) => {
  // Function to handle quantity changes
  // const updateQuantity = (id, quantity) => {
  //   // Update the quantity of the item with the given id
  // };

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
            <div className="p-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-2 hover:bg-gray-50"
                >
                  <span className="font-semibold">{item.name}</span>
                  <span>{`$${item.price.toFixed(2)}`}</span>
                  <input
                    type="number"
                    className="form-input mt-1 block w-16 text-center border-gray-300 shadow-sm rounded-md"
                    value={item.quantity}
                    onChange={() => {}}
                  />
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
