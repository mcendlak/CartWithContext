interface IItemData {
  name: string;
  price: number;
  id: string;
  quantity: number;
}

interface Istate {items: IItemData[]}

interface IContext {
  addProduct: () => void;
    removeProduct: () => void;
    removeAllProducts: () => void;
    submitCart: () => void;
    state: Istate;
}

export type { IItemData, Istate, IContext };
