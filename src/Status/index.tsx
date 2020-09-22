import React, { useState } from "react";
import { Heading, Meter, Stack, Text } from "grommet";

import { ShoppingItemStatus } from "../common";

interface ShoppingAmounts {
  [ShoppingItemStatus.Bought]: number;
  [ShoppingItemStatus.Created]: number;
}

export function Status() {
  const amounts: ShoppingAmounts = {
    [ShoppingItemStatus.Bought]: 2,
    [ShoppingItemStatus.Created]: 2,
  };
  const [visibleStatus, setVisibleStatus] = useState<ShoppingItemStatus>();

  return (
    <>
      <Heading>Status</Heading>
      <Stack anchor="center">
        <Meter
          size="small"
          type="circle"
          values={Object.keys(amounts).map((key) => ({
            value: amounts[(key as unknown) as ShoppingItemStatus],
            label: key,
            onHover: (isHovered) =>
              isHovered ? setVisibleStatus((key as unknown) as ShoppingItemStatus) : setVisibleStatus(undefined),
          }))}
        />
        <StatusText amounts={amounts} selectedStatus={visibleStatus} />
      </Stack>
    </>
  );
}

interface StatusTextProps {
  amounts: ShoppingAmounts;
  selectedStatus?: ShoppingItemStatus;
}

function StatusText({ amounts, selectedStatus }: StatusTextProps) {
  if (selectedStatus) {
    return (
      <Text>
        {amounts[selectedStatus]} {selectedStatus.toString().toLowerCase()}
      </Text>
    );
  }

  return <Text>{Object.values(amounts).reduce((sum, value) => sum + value, 0)} total</Text>;
}

export default Status;
