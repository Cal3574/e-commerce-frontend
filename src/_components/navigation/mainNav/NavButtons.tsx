"use client";
import { FC } from "react";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ShoppingCart from "../../cart/ShoppingCart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavButtonsProps {}

const NavButtons: FC<NavButtonsProps> = ({}) => {
  const { data: session, status } = useSession();

  const items = [
    {
      id: 1,
      name: "iPhone",
      price: 1000,
      quantity: 1,
    },
    {
      id: 2,
      name: "MacBook",
      price: 2000,
      quantity: 1,
    },
    {
      id: 1,
      name: "iPhone",
      price: 1000,
      quantity: 1,
    },
    {
      id: 2,
      name: "MacBook",
      price: 2000,
      quantity: 1,
    },
    {
      id: 1,
      name: "iPhone",
      price: 1000,
      quantity: 1,
    },
    {
      id: 2,
      name: "MacBook",
      price: 2000,
      quantity: 1,
    },
  ];
  return (
    <section className="flex gap-8 items-center">
      <ShoppingCart items={items} />
      <button className="">
        <CiHeart size={30} />
      </button>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={session?.user?.image || ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        {!session ? (
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/api/auth/signin">
              <DropdownMenuItem>Sign in</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        ) : (
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/account">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/api/auth/signout">Sign out</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </section>
  );
};

export default NavButtons;
