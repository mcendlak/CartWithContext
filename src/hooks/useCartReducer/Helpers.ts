import { itemsArrayType } from "./typesReducer";

export default class Helpers {
  static isProductOnTheList = (items: itemsArrayType, productId: string) => {
    return items.some((item) => item.id === productId);
  };

  static findProductIndex = (items: itemsArrayType, productId: string) => {
    return items.findIndex((item) => item.id === productId);
  };

  static updateArrayWithIncrementedQuantity = (
    items: itemsArrayType,
    indexToBeModified: number
  ) => {
    return items.map((item, index) =>
      index === indexToBeModified
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  };

  static updateArrayWithDecrementedQuantity = (
    items: itemsArrayType,
    indexToBeModified: number
  ) => {
    return items.map((item, index) =>
      index === indexToBeModified
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  };

  static calculateCartValue = (items: itemsArrayType) => {
    return items.reduce(
      (cartValue, item) => cartValue + item.price * item.quantity,
      0
    );
  };
}
