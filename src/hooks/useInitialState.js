import { useState } from "react";
import initialSate from "../initialState";

const useInitialSate = () => {
  const [state, setState] = useState(initialSate);

  const addToCart = (payload) => {
    const cartList = state.cart;
    let newCartList = cartList;

    const index = cartList.findIndex((item) => item.id === payload.id);

    if (index >= 0) {
      newCartList[index] = {
        ...newCartList[index],
        qty: newCartList[index].qty + 1,
      };
    } else {
      payload.qty = 1;
      newCartList = [...cartList, payload];
    }

    setState({
      ...state,
      cart: newCartList,
    });
  };

  const removeFromCart = (payload) => {
    const cartList = state.cart;
    let newCartList = cartList;

    const index = cartList.findIndex((item) => item.id === payload.id);
    newCartList[index] = {
      ...newCartList[index],
      qty: newCartList[index].qty - 1,
    };

    const updatedList = newCartList.filter((item) => item.qty > 0);

    setState({
      ...state,
      cart: updatedList,
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
  };
};

export default useInitialSate;
