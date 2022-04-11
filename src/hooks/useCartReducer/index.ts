// hooks
import { useReducer } from "react";

// types
import { IItemData } from "../../context/types";

// reducer modules
import { cartReducer } from "./cartReducer";
import initialState from "./state";
import Helpers from "./Helpers";

const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (product: IItemData) => {
    dispatch({ type: "addProduct", payload: product });
  };

  const removeProduct = (productId: string) => {
    dispatch({ type: "removeProduct", payload: productId });
  };

  const removeAllProducts = () => {
    dispatch({ type: "removeAllProducts" });
  };

  const isProductAvailable = (product: IItemData) => {
    const chosenProductIndex = Helpers.findProductIndex(
      state.items,
      product.id
    );
    if (chosenProductIndex === -1 && product.quantity > 0) return true;
    const chosenQuantity = state.items[chosenProductIndex].quantity;

    const isProductAvailable = product.quantity > chosenQuantity;

    return isProductAvailable;
  };

  return {
    addProduct,
    removeProduct,
    removeAllProducts,
    isProductAvailable,
    state,
  };
};

export default useCartReducer;
