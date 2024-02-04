"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getUserBasket,
  addItemToCart,
  deleteItemFromBasket,
  updateItemInBasket,
} from "@/_services/cartService";
import { useSession } from "next-auth/react";

// Define the context
// Define the context
const CartContext = createContext<{
  items: any;
  addItem: (productId: number, quantity: string) => Promise<void>;
  removeItem: (itemId: number) => Promise<void>;
  updateItem: (itemId: number, quantity: string) => Promise<void>;
  cartLoading: boolean;
  isError: boolean;
} | null>(null);

export const useCart = () => useContext(CartContext);

// Provider component
export const CartProvider = ({ children }: any) => {
  const queryClient = useQueryClient();
  const { data: session } = useSession(); // Assuming you're using NextAuth for session management

  // Define the React Query hooks for cart operations
  //get shopping cart
  const {
    data: cartData,
    isLoading: cartLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["basket"],
    queryFn: () => getUserBasket(session),
    refetchOnWindowFocus: true, // This is the default behavior
    staleTime: 0,
  });

  const { mutate: addItemMutation, isLoading: addingLoading } = useMutation(
    ({ productId, quantity }: { productId: number; quantity: string }) =>
      addItemToCart(productId, quantity, session),
    {
      onSuccess: () => {
        // Invalidate related queries to refetch data
        queryClient.invalidateQueries(["basket"], {
          refetchActive: true,
          refetchInactive: false,
        });
        refetch();
      },
    }
  );

  //delete item from shopping cart
  const { mutate: deleteItemMutation, isLoading: deletePending } = useMutation(
    (cartItemId: number | null) => deleteItemFromBasket(cartItemId, session),
    {
      onSuccess: () => {
        // Invalidate related queries to refetch data
        queryClient.invalidateQueries(["basket"]);
        refetch();
      },
    }
  );

  //update item in shopping cart
  const { mutate: updateItemMutation, isLoading: updatePending } = useMutation(
    ({ itemId, quantity }: { itemId: number; quantity: string }) =>
      updateItemInBasket(itemId, quantity, session),
    {
      onSuccess: () => {
        // Invalidate related queries to refetch data
        queryClient.invalidateQueries(["basket"]);
        refetch();
      },
    }
  );

  // Cart actions
  const addItem = async (productId: number, quantity: string) => {
    addItemMutation({ productId, quantity });
  };

  const removeItem = async (itemId: number) => {
    deleteItemMutation(itemId);
  };

  const updateItem = async (itemId: number, quantity: string) => {
    updateItemMutation({ itemId, quantity });
  };

  const value = {
    items: cartData,
    addItem,
    removeItem,
    updateItem,
    cartLoading,
    isError,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
