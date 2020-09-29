import { ShoppingItem, ShoppingItemUnit } from "../../../../common";

export interface Context {
  values: Partial<ShoppingItem>;
  errors?: string[];
}

export const createInitialContext = () =>
  ({
    values: {
      name: "",
      amount: 0,
      unit: ShoppingItemUnit.pcs,
    },
    errors: undefined,
  } as Context);
