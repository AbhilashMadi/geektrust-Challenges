/* eslint-disable no-case-declarations */
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
  filteredItems: Product[];
  cart: Product[];
}

export type AppAction = { type: "fetch_products", payload: Product[] } |
{ type: "filter_products", payload: Product[] } |
{ type: "add_to_cart", payload: Product } |
{ type: "increase_quantity", payload: Product["id"] } |
{ type: "decrease_quantity", payload: Product["id"] } |
{ type: "delete_cart_product", payload: Product["id"] };

export const intialAppState: AppState = {
  products: [],
  cart: [],
  filteredItems: [],
}

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
      const updatedProductsAdd = state.products.map((product) =>
        product.id === payload.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      return {
        ...state,
        cart: [...state.cart, { ...payload, quantity: 1 }],
        products: updatedProductsAdd,
      };
    case "increase_quantity":
      const updatedCartIncrease = state.cart.map((product) =>
        product.id === payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      const updatedProductsIncrease = state.products.map((product) =>
        product.id === payload
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      return {
        ...state,
        cart: updatedCartIncrease,
        products: updatedProductsIncrease,
      };
    case "decrease_quantity":
      const updatedCartDecrease = state.cart
        .map((product) =>
          product.id === payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);

      const updatedProductsDecrease = state.products.map((product) =>
        product.id === payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      return {
        ...state,
        cart: updatedCartDecrease,
        products: updatedProductsDecrease,
      };
    case "delete_cart_product":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== payload),
      }
    default:
      return state;
  }
};


