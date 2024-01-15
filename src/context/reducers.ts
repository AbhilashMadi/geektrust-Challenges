import { StorageKeys } from "@/resources/stoarge.const";
import { Reducer } from "react";
import { toast } from "sonner";

export type Product = {
  id: number;
  imageURL: string;
  name: string;
  type: string;
  price: number;
  currency: string;
  color: string;
  gender: string;
  quantity: number;
};

export type AppState = {
  products: Product[];
  filteredItems: Product[];
  cart: Product[];
};

export type AppAction =
  | { type: "fetch_products"; payload: Product[] }
  | { type: "filter_products"; payload: Product[] }
  | { type: "add_to_cart"; payload: Product }
  | { type: "increase_quantity"; payload: Product["id"] }
  | { type: "decrease_quantity"; payload: Product["id"] }
  | { type: "remove_from_cart"; payload: Product["id"] };

// Persisting the cart items with sessionStorage
const loadCartItems = (): Product[] => {
  const persistedCartItems = sessionStorage.getItem(StorageKeys.CART_ITEMS) || "[]";
  return JSON.parse(persistedCartItems);
};

const persistCart = (items: Product[]): void => {
  sessionStorage.setItem(StorageKeys.CART_ITEMS, JSON.stringify(items));
};

export const initialAppState: AppState = {
  products: [],
  cart: loadCartItems(),
  filteredItems: [],
};

// ------------------- REDUCERS ----------------------------

const addToCart = (state: AppState, product: Product): AppState => {
  if (state.cart.some((a) => a.id === product.id)) {
    return state;
  }

  const updatedCart = [...state.cart, { ...product, quantity: 1 }];
  persistCart(updatedCart);

  return {
    ...state,
    cart: updatedCart,
  };
};

const increaseQuantity = (state: AppState, id: number): AppState => {
  const productInCart = state.cart.find((p) => p.id === id);
  const productInStock = state.products.find((p) => p.id === id);

  if (!productInCart || !productInStock) {
    return state;
  }

  if (productInCart.quantity + 1 > productInStock.quantity) {
    toast(`Unfortunately, we are currently unable to fulfil your purchase since there are no more available products. No more than ${productInStock.quantity}`, { className: "font-primary" });
    return state;
  }

  const updatedCart = state.cart.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
  persistCart(updatedCart);

  return {
    ...state,
    cart: updatedCart,
  };
};

const decreaseQuantity = (state: AppState, id: number): AppState => {
  const updatedCart = state.cart.map((p) => (p.id === id ? { ...p, quantity: Math.max(p.quantity - 1, 1) } : p));
  persistCart(updatedCart);

  return {
    ...state,
    cart: updatedCart,
  };
};

const removeProduct = (state: AppState, id: number): AppState => {
  const updatedCart = state.cart.filter((p) => p.id !== id);
  persistCart(updatedCart);

  return {
    ...state,
    cart: updatedCart,
  };
};

//----------------------------------------------------------

export const appReducer: Reducer<AppState, AppAction> = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "fetch_products":
      return {
        ...state,
        products: payload,
      };
    case "filter_products":
      return {
        ...state,
        filteredItems: payload,
      };
    case "add_to_cart":
      return addToCart(state, payload);
    case "increase_quantity":
      return increaseQuantity(state, payload);
    case "decrease_quantity":
      return decreaseQuantity(state, payload);
    case "remove_from_cart":
      return removeProduct(state, payload);
    default:
      return state;
  }
};
