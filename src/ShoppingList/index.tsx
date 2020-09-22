import React from "react";
import { List } from "grommet";

import { ShoppingItemStatus } from "../common";

import ShoppingListItem, { ShoppingItem, ShoppingItemUnit } from "./ShoppingListItem";

export function ShoppingList() {
  const items: ShoppingItem[] = [
    {
      name: "Toothpaste",
      amount: 1,
      unit: ShoppingItemUnit.pcs,
      status: ShoppingItemStatus.Bought,
    },
    {
      name: "Bananas",
      amount: 6,
      unit: ShoppingItemUnit.pcs,
      status: ShoppingItemStatus.Bought,
    },
    {
      name: "Flour",
      amount: 2,
      unit: ShoppingItemUnit.kg,
      status: ShoppingItemStatus.Created,
    },
    {
      name: "Milk",
      amount: 1,
      unit: ShoppingItemUnit.l,
      status: ShoppingItemStatus.Created,
    },
  ];

  return <List data={items}>{(datum: ShoppingItem) => <ShoppingListItem {...datum} />}</List>;
}

export default ShoppingList;
