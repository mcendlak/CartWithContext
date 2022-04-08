import { useReducer } from "react";
import { IItemData } from "../../types";

import { cartReducer } from "./reducer";

const initialState: { items: IItemData[] } = { items: [] };

const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (product: IItemData) => {
    console.log(state)
    dispatch({ type: "addProduct", payload: product });
  };

  const removeProduct = (productId: string) => {
    dispatch({type: 'removeProduct', payload: productId})
  };

  const removeAllProducts = () => {
    dispatch({type: 'removeAllProducts'})
  };

  const submitCart = () => {
    dispatch({type: 'submitCart'})
  };

  return { addProduct, removeProduct, removeAllProducts, submitCart, state };
};

export default useCartReducer;
