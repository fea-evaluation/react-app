import React from "react";

import { Analytics } from "./Analytics";
import { CreateShoppingItem } from "./CreateShoppingItem";
import { ShoppingList } from "./ShoppingList";

function App() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        alignContent: "stretch",
        justifyItems: "stretch",
        justifyContent: "stretch",
      }}
    >
      <div
        style={{
          border: "1px solid",
          flexGrow: 1,
          flexShrink: 1,
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            alignItems: "center",
            justifyItems: "stretch",
            gridGap: "2em",
            padding: "2em",
            width: "100%",
          }}
        >
          <CreateShoppingItem />
          <ShoppingList />
        </div>
      </div>
      <div style={{ flexGrow: 0, flexShrink: 0, display: "flex", justifyContent: "stretch" }}>
        <Analytics />
      </div>
    </div>
  );
}

export default App;
