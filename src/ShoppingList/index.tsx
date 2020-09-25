import React from "react";

import { ShoppingItem, ShoppingItemStatus, ShoppingItemUnit } from "../common";

import { ShoppingListItem } from "./ShoppingListItem";

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

  return (
    <div>
      {items.map((item, i) => (
        <ShoppingListItem key={`${i}-${item.name}`} {...item} />
      ))}
    </div>
  );
}
