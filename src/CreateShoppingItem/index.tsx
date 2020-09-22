import React from "react";
import { Box, BoxProps, Button, Form, FormField, Grid, TextInput } from "grommet";

import { ShoppingItemUnit, ShoppingItemUnitUtil } from "../common";

type Props = BoxProps & JSX.IntrinsicElements["div"];

export function CreateShoppingItem(props: Props) {
  return (
    <Box {...props}>
      <Form validate="blur">
        <FormField required name="name" htmlFor="name" label="Name">
          <TextInput id="name" name="name" />
        </FormField>
        <Grid columns={["2/3", "auto"]} gap="medium">
          <FormField
            name="amount"
            htmlFor="amount"
            label="Amount"
            validate={(amount?: string) =>
              amount && amount.match(/^\d+(?:\.\d+)?$/gm)
                ? undefined
                : { message: "Amount must be a number", status: "error" }
            }
          >
            <TextInput id="amount" name="amount" />
          </FormField>
          <FormField
            name="unit"
            htmlFor="unit"
            label="Unit"
            validate={(unit: string) =>
              !ShoppingItemUnitUtil.fromLabel(unit || "") && {
                message: `Unit must be one of the following values: ${Object.values(ShoppingItemUnit)
                  .map((unit) => `"${ShoppingItemUnitUtil.toLabel(unit)}"`)
                  .join(", ")}`,
                status: "error",
              }
            }
          >
            <TextInput id="unit" name="unit" />
          </FormField>
        </Grid>
        <Box fill align="stretch" justify="stretch">
          <Button primary focusIndicator={false} label="Add" />
        </Box>
      </Form>
    </Box>
  );
}

export default CreateShoppingItem;
