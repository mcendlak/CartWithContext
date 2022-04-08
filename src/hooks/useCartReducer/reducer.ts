import { Istate } from "../../types";
import { ACTIONTYPES } from "./types";
import actions from "./actions";

const cartReducer = (state: Istate, action: ACTIONTYPES) => {
  switch (action.type) {
    case "addProduct":
      return actions.addProduct(state, action.payload);
    case "removeProduct":
      return actions.removeProduct(state, action.payload);
    case "removeAllProducts":
      return actions.removeAllProducts(state);
    case "submitCart":
      return actions.submitCart(state);
    default:
      throw new Error("Action type not recognized");
  }
};

export { cartReducer };
