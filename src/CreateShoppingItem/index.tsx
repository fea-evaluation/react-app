import React from "react";

export function CreateShoppingItem() {
  return (
    <div>
      <form style={{ display: "grid", gridGap: "1em", gridTemplateRows: "1fr 1fr 1fr" }}>
        <label
          style={{ display: "grid", gridGap: ".5em", gridTemplateColumns: "minmax(50px, 1fr) minmax(100px, 3fr)" }}
        >
          Name
          <input type="text" name="name" />
        </label>

        <label
          style={{ display: "grid", gridGap: ".5em", gridTemplateColumns: "minmax(50px, 1fr) minmax(100px, 3fr)" }}
        >
          Amount
          <input type="text" name="amount" />
        </label>

        <label
          style={{ display: "grid", gridGap: ".5em", gridTemplateColumns: "minmax(50px, 1fr) minmax(100px, 3fr)" }}
        >
          Unit
          <input type="text" name="unit" />
        </label>

        <div style={{ display: "grid", gridGap: ".5em", gridTemplateColumns: "minmax(50px, 1fr) minmax(100px, 3fr)" }}>
          <span />
          <button type="button">Add</button>
        </div>
      </form>
    </div>
  );
}
