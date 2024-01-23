import { useState } from "react";
import { getUser } from "./_services/userService";
import { addProduct } from "./_services/productService";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-7xl"></main>
  );
}
