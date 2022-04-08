import { Istate } from "../../types";

export default class Helpers {
  static isProductOnTheList = (state: Istate, productId: string) => {
    return state.items.some((item) => item.id === productId);
  };

  static findProductIndex = (state: Istate, productId: string) => {
    return state.items.findIndex((item) => item.id === productId);
  };

  static updateArrayWithInrementedQuantity = (state: Istate, indexToBeModified: number) => {
    return state.items.map((item, index) =>
      index === indexToBeModified ? {...item, quantity: item.quantity + 1} : item
    );
  };
}
