interface IItemData {
  name: string;
  price: number;
  id: string;
  quantity: number;
}

interface Istate {
  items: IItemData[];
}

interface IContext {
  addProduct: (product: IItemData) => void
  removeProduct: (productId: string) => void
  removeAllProducts: () => void;
  submitCart: () => void;
  state: Istate;
}

export type { IItemData, Istate, IContext };
