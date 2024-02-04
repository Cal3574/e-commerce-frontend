export interface CartItem {
  cartItemId: string;
  cartId: number;
  productId: number;
  quantity: number;
}

export interface CartProduct {
  product: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    description: string;
    image: string;
    userId: number;
    categoryId: number;
  };
}
