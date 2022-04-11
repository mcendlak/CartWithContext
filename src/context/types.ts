import {IChosenProduct, IState} from '../hooks/useCartReducer/typesReducer'

interface IItemData {
  name: string;
  price: number;
  id: string;
  quantity: number;
}

interface IContext {
  addProduct: (product: IChosenProduct) => void;
  removeProduct: (productId: string) => void;
  removeAllProducts: () => void;
  isProductAvailable: (product: IItemData) => boolean;
  state: IState;
}

export type { IItemData, IContext };
