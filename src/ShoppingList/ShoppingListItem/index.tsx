import React from "react";
import { Box, BoxProps, CheckBox, Text } from "grommet";
import styled from "styled-components";

import { ShoppingItemStatus } from "../../common";

export enum ShoppingItemUnit {
  g = "g",
  kg = "kg",
  l = "l",
  ml = "ml",
  pcs = "pcs",
}

export interface ShoppingItem {
  name: string;
  amount: number;
  unit: ShoppingItemUnit;
  status: ShoppingItemStatus;
}

type Props = ShoppingItem & BoxProps & JSX.IntrinsicElements["div"];

export function ShoppingListItem({ amount, name, status, unit, ...props }: Props) {
  return (
    <Box direction="row-responsive" gap="large" align="center" {...props}>
      <Status status={status} />
      <Label amount={amount} name={name} status={status} unit={unit} />
    </Box>
  );
}

function Status({ status }: { status: ShoppingItemStatus }) {
  return <CheckBox checked={status === ShoppingItemStatus.Bought} />;
}

interface DisabledTextProps {
  disabled?: boolean;
}

const DisabeldText = styled(Text)<DisabledTextProps>`
  color: ${(props) => (props.disabled ? props.theme.global.colors["status-disabled"] : undefined)};
  text-decoration: ${(props) => (props.disabled ? "line-through" : undefined)};
`;

function Label({ amount, name, status, unit }: ShoppingItem) {
  const isBought = status === ShoppingItemStatus.Bought;
  return (
    <DisabeldText disabled={isBought}>
      {amount}
      {unit === ShoppingItemUnit.pcs ? "" : unit} {name}
    </DisabeldText>
  );
}

export default ShoppingListItem;
