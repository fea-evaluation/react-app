import React from "react";

export function Analytics() {
  const amounts = {
    bought: 2,
    created: 3,
  };

  return (
    <div
      style={{
        background: "#444499",
        color: "#ffffff",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "1em",
      }}
    >
      <h2>Analytics</h2>
      <table>
        <tr>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td style={{ textAlign: "right" }}>Created</td>
          <td style={{ textAlign: "right" }}>{amounts.created}</td>
        </tr>
        <tr>
          <td style={{ textAlign: "right" }}>Bought</td>
          <td style={{ textAlign: "right" }}>{amounts.bought}</td>
        </tr>
        <tr>
          <th style={{ textAlign: "right" }}>Total</th>
          <th style={{ textAlign: "right" }}>{Object.values(amounts).reduce((sum, value) => sum + value, 0)}</th>
        </tr>
      </table>
    </div>
  );
}
