import { IItemData } from "../../types";

type ACTIONTYPES =
  | { type: "addProduct", payload: IItemData }
  | { type: "removeProduct", payload: string }
  | { type: "removeAllProducts" }
  | { type: "submitCart" };

  export type {ACTIONTYPES}