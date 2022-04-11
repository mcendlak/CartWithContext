import { actionTypes, IState } from "./typesReducer";
import actions from "./actions";

const cartReducer = (state: IState, action: actionTypes) => {
  switch (action.type) {
    case "addProduct":
      return actions.addProduct(state, action.payload);
    case "removeProduct":
      return actions.removeProduct(state, action.payload);
    case "removeAllProducts":
      return actions.removeAllProducts(state);
    default:
      throw new Error("Action type not recognized");
  }
};

export { cartReducer };
