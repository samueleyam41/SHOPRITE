export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  weight: string;
  category: string;
  image: string;
  tags?: string[];
  isLowStock?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
