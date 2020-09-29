import React, { useCallback } from "react";
import { useMachine } from "@xstate/react";

import { ShoppingItemUnit, ShoppingItemUnitUtil } from "../common";

import {
  Context,
  CreateShoppingItemMachine,
  EditingStateEnum,
  EventEnum,
  matchesStateEnum,
  xStateStateValueToString,
} from "./machine/one-file";

const checkIsSubmittable = matchesStateEnum(EditingStateEnum.pristine);

const unitLabels = Object.values(ShoppingItemUnit).map(ShoppingItemUnitUtil.toLabel);

const onSubmit = async ({ values }: Context) => {
  console.log("onSubmit", values);

  const errors = {} as { [key: string]: string };

  if (typeof values.name !== "string" || values.name.trim() === "") {
    errors.name = "You have to put in a Name!";
  }

  if ((values?.amount || "").match(/^\d+(:?\.\d+)?$/gm)) {
    errors.amount = "Amount has to be a number!";
  }

  if (!unitLabels.includes(values?.unit || "")) {
    errors.unit = `Unit has to be one of ${unitLabels.map((label) => `"${label}"`).join(",")}`;
  }

  if (Object.keys(errors).length > 0) {
    return Promise.reject(errors);
  }

  return true;
};

export function CreateShoppingItem() {
  const [state, send] = useMachine(CreateShoppingItemMachine, {
    services: { onSubmit },
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      send(EventEnum.SUBMIT);
    },
    [send]
  );

  const handleChange = useCallback(
    (e) => {
      e.preventDefault();
      send(EventEnum.CHANGE, { payload: { key: e.target.name, value: e.target.value } });
    },
    [send]
  );

  const { values, errors } = state.context;

  const stateType = xStateStateValueToString(state.value);

  console.info("STATE", stateType, "VALUES", values, "ERRORS", errors);

  return (
    <div>
      <form style={{ display: "grid", gridGap: "1em", gridTemplateRows: "1fr 1fr 1fr" }} onSubmit={handleSubmit}>
        <label
          style={{ display: "grid", gridGap: ".5em", gridTemplateColumns: "minmax(50px, 1fr) minmax(100px, 3fr)" }}
        >
          Name
          <input type="text" name="name" value={values.name} onChange={handleChange} />
        </label>
        {errors?.name && <Error>{errors.name}</Error>}

        <label
          style={{ display: "grid", gridGap: ".5em", gridTemplateColumns: "minmax(50px, 1fr) minmax(100px, 3fr)" }}
        >
          Amount
          <input type="text" name="amount" value={values.amount} onChange={handleChange} />
        </label>
        {errors?.amount && <Error>{errors.amount}</Error>}

        <label
          style={{ display: "grid", gridGap: ".5em", gridTemplateColumns: "minmax(50px, 1fr) minmax(100px, 3fr)" }}
        >
          Unit
          <input type="text" name="unit" value={values.unit} onChange={handleChange} />
        </label>
        {errors?.unit && <Error>{errors.unit}</Error>}

        <div style={{ display: "grid", gridGap: ".5em", gridTemplateColumns: "minmax(50px, 1fr) minmax(100px, 3fr)" }}>
          <span />
          <button disabled={!checkIsSubmittable(state.value)} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

function Error(props: JSX.IntrinsicElements["div"]) {
  return <div {...props} style={{ color: "red" }} />;
}
