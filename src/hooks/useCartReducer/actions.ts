import { IState, IChosenProduct } from "./typesReducer";
import Helpers from "./Helpers";

class Actions {
  addProduct = (state: IState, payload: IChosenProduct) => {
    const productIndex = Helpers.findProductIndex(state.items, payload.id);

    if (productIndex >= 0) {
      const newItems = Helpers.updateArrayWithIncrementedQuantity(
        state.items,
        productIndex
      );
      return {
        ...state,
        items: newItems,
        totalAmount: Helpers.calculateCartValue(newItems),
      };
    } else {
      const newItem = { ...payload, quantity: 1 };
      const newItems = [...state.items, newItem];
      return {
        ...state,
        items: newItems,
        totalAmount: Helpers.calculateCartValue(newItems),
      };
    }
  };

  removeProduct = (state: IState, payload: string) => {
    const productIndex = Helpers.findProductIndex(state.items, payload);

    if (state.items[productIndex].quantity > 1) {
      const newItems = Helpers.updateArrayWithDecrementedQuantity(
        state.items,
        productIndex
      );
      return {
        ...state,
        items: newItems,
        totalAmount: Helpers.calculateCartValue(newItems),
      };
    } else {
      const newItems = state.items.filter((item, index) => {
        return item.id !== payload;
      });
      return {
        ...state,
        items: newItems,
        totalAmount: Helpers.calculateCartValue(newItems),
      };
    }
  };
  removeAllProducts = (state: IState) => {
    const emptyItemsArray: IChosenProduct[] = [];
    return { ...state, items: emptyItemsArray, totalAmount: 0 };
  };
}

const actions = new Actions();
export default actions;
