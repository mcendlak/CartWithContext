interface IChosenProduct {
  name: string;
  price: number;
  id: string;
  quantity: number;
  // TODO - add totalQuantity and update automatically for better rendering of single items
}

type itemsArrayType = IChosenProduct[];

interface IState {
  items: IChosenProduct[];
  totalAmount: number;
}

type actionTypes =
  | { type: "addProduct"; payload: IChosenProduct }
  | { type: "removeProduct"; payload: string }
  | { type: "removeAllProducts" }
  | { type: "calculateCartValue" };

export type { IChosenProduct, itemsArrayType, actionTypes, IState };
