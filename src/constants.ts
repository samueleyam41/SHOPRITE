import { Product } from './types';

export const FEATURED_DEPARTMENTS = [
  { id: 'produce', name: 'Produce', icon: 'Apple', image: 'https://placehold.co/500x500?text=Fresh+Produce' },
  { id: 'bakery', name: 'Bakery', icon: 'Croissant', image: 'https://placehold.co/500x500?text=Fresh+Bakery' },
  { id: 'meat', name: 'Meat & Seafood', icon: 'Beef', image: 'https://placehold.co/500x500?text=Meat+Seafood' },
  { id: 'dairy', name: 'Dairy', icon: 'Milk', image: 'https://placehold.co/500x500?text=Dairy' },
  { id: 'frozen', name: 'Frozen', icon: 'Snowflake', image: 'https://placehold.co/500x500?text=Frozen+Foods' },
  { id: 'beverages', name: 'Beverages', icon: 'Coffee', image: 'https://placehold.co/500x500?text=Beverages' },
  { id: 'snacks', name: 'Snacks', icon: 'Cookie', image: 'https://placehold.co/500x500?text=Snacks' },
  { id: 'personal', name: 'Personal Care', icon: 'UserCircle', image: 'https://placehold.co/500x500?text=Personal+Care' },
];

export const PRODUCTS: Product[] = [
  { id: '1', name: 'Gala Apples', price: 3.99, originalPrice: 4.99, weight: '3lb bag', category: 'Produce', image: 'https://placehold.co/500x500?text=Gala+Apples', tags: ['Best Seller'], isLowStock: true },
  { id: '2', name: 'Whole Milk', price: 3.49, weight: '1 Gallon', category: 'Dairy', image: 'https://placehold.co/500x500?text=Whole+Milk' },
  { id: '3', name: 'Sourdough Bread', price: 4.50, weight: '16oz', category: 'Bakery', image: 'https://placehold.co/500x500?text=Sourdough', tags: ['New'] },
  { id: '4', name: 'Ground Beef 80/20', price: 6.99, originalPrice: 7.99, weight: '1lb', category: 'Meat & Seafood', image: 'https://placehold.co/500x500?text=Ground+Beef' },
  { id: '5', name: 'Organic Bananas', price: 1.29, weight: '1lb', category: 'Produce', image: 'https://placehold.co/500x500?text=Bananas' },
  { id: '6', name: 'Greek Yogurt', price: 5.49, weight: '32oz', category: 'Dairy', image: 'https://placehold.co/500x500?text=Greek+Yogurt' },
  { id: '7', name: 'Chicken Breast', price: 9.99, weight: '1.5lb', category: 'Meat & Seafood', image: 'https://placehold.co/500x500?text=Chicken' },
  { id: '8', name: 'Orange Juice', price: 4.29, originalPrice: 5.00, weight: '52oz', category: 'Beverages', image: 'https://placehold.co/500x500?text=Orange+Juice' },
  { id: '9', name: 'Frozen Pizza', price: 8.99, weight: '22oz', category: 'Frozen', image: 'https://placehold.co/500x500?text=Frozen+Pizza', tags: ['Best Seller'] },
  { id: '10', name: 'Potato Chips', price: 3.50, weight: '10oz', category: 'Snacks', image: 'https://placehold.co/500x500?text=Potato+Chips' },
  { id: '11', name: 'Shampoo', price: 6.49, weight: '12oz', category: 'Personal Care', image: 'https://placehold.co/500x500?text=Shampoo' },
  { id: '12', name: 'Toilet Paper', price: 12.99, weight: '12 pack', category: 'Personal Care', image: 'https://placehold.co/500x500?text=Toilet+Paper', isLowStock: true },
];
