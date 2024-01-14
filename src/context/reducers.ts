import { Reducer } from "react";

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
}

export type AppState = {
  products: Product[];
  cart: Product[];
}

export type AppAction = { type: "fetch_products", payload: Product[] } |
{ type: "add_to_cart", payload: Product };

export const intialAppState: AppState = {
  products: [],
  cart: [],
}

export const appReducer: Reducer<AppState, AppAction> = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "fetch_products":
      return {
        ...state,
        products: payload
      }
    case "add_to_cart":
      return {
        ...state,
        cart: [...state.cart, payload],
      }
    default:
      return state;
  }
}