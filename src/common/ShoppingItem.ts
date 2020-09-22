import ShoppingItemStatus from "./ShoppingItemStatus";
import ShoppingItemUnit from "./ShoppingItemUnit";

export interface ShoppingItem {
  name: string;
  amount: number;
  unit: ShoppingItemUnit;
  status: ShoppingItemStatus;
}

export default ShoppingItem;
