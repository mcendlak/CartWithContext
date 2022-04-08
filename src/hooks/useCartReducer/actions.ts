import { IItemData, Istate } from "../../types";

import Helpers from "./Helpers";

class Actions {
  addProduct = (state: Istate, payload: IItemData) => {
    const productIndex = Helpers.findProductIndex(state, payload.id);

    if (productIndex) {
      return {
        ...state,
        items: Helpers.updateArrayWithInrementedQuantity(state, productIndex),
      };
    } else {
      return { ...state, items: [...state.items, payload] };
    }
  };
  removeProduct = (state: Istate, payload: string) => {
    return state;
  };
  removeAllProducts = (state: Istate) => {
    return state;
  };

  submitCart = (state: Istate) => {
    return state;
  };
}

const actions = new Actions();
export default actions;
