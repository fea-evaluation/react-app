import React from "react";

import { ShoppingItem, ShoppingItemStatus, ShoppingItemUnitUtil } from "../../common";

type Props = ShoppingItem;

export function ShoppingListItem({ amount, name, status, unit }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "stretch" }}>
      <Status status={status} />
      <Label amount={amount} name={name} status={status} unit={unit} />
    </div>
  );
}

function Status({ status }: { status: ShoppingItemStatus }) {
  return (
    <div>
      <input
        type="checkbox"
        style={{ marginRight: ".5em" }}
        checked={status === ShoppingItemStatus.Bought}
        onChange={() => {}}
      />
    </div>
  );
}

function Label({ amount, name, status, unit }: ShoppingItem) {
  const isBought = status === ShoppingItemStatus.Bought;
  return (
    <div style={{ color: isBought ? "#aaaaaa" : undefined, textDecoration: isBought ? "line-through" : undefined }}>
      {amount}
      {ShoppingItemUnitUtil.toLabel(unit)} {name}
    </div>
  );
}
