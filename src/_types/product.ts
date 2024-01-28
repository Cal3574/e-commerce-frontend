export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
  image: string;
}

export interface NewProductInput {
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
  categoryId: number;
}

export interface Categories {
  id: number;
  name: string;
}
