import React from "react";
import { Box, BoxProps, List } from "grommet";

import { ShoppingItem, ShoppingItemStatus, ShoppingItemUnit } from "../common";

import ShoppingListItem from "./ShoppingListItem";

type Props = BoxProps & JSX.IntrinsicElements["div"];

export function ShoppingList(props: Props) {
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

  return (
    <Box {...props}>
      <List data={items}>{(datum: ShoppingItem) => <ShoppingListItem {...datum} />}</List>
    </Box>
  );
}

export default ShoppingList;
