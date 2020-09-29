import React, { useCallback } from "react";
import { useMachine } from "@xstate/react";

import { ShoppingItemUnit } from "../common";

import { CreateShoppingItemMachine, EventEnum } from "./machine/modules";

const onSubmit = async (...args: any[]) => {
  console.log("onSubmit", ...args);

  return true;
};

export function CreateShoppingItem() {
  const [state, send] = useMachine(CreateShoppingItemMachine, {
    context: { values: { name: "Name", amount: 0, unit: ShoppingItemUnit.kg } },
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

  console.log("state", state);
  console.log("context", JSON.stringify(state.context));

  const { values, errors } = state.context;

  console.log("values", values);
  console.log("errors", errors);

  return (
    <div>
      <form style={{ display: "grid", gridGap: "1em", gridTemplateRows: "1fr 1fr 1fr" }} onSubmit={handleSubmit}>
        <label
          style={{ display: "grid", gridGap: ".5em", gridTemplateColumns: "minmax(50px, 1fr) minmax(100px, 3fr)" }}
        >
          Name
          <input type="text" name="name" value={values.name} onChange={handleChange} />
        </label>

        <label
          style={{ display: "grid", gridGap: ".5em", gridTemplateColumns: "minmax(50px, 1fr) minmax(100px, 3fr)" }}
        >
          Amount
          <input type="text" name="amount" value={values.amount} onChange={handleChange} />
        </label>

        <label
          style={{ display: "grid", gridGap: ".5em", gridTemplateColumns: "minmax(50px, 1fr) minmax(100px, 3fr)" }}
        >
          Unit
          <input type="text" name="unit" value={values.unit} onChange={handleChange} />
        </label>

        <div style={{ display: "grid", gridGap: ".5em", gridTemplateColumns: "minmax(50px, 1fr) minmax(100px, 3fr)" }}>
          <span />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
