import React from "react";

export function Analytics() {
  const amounts = {
    created: 3,
    bought: 2,
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
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(amounts).map(([status, amount], i) => (
            <tr key={status}>
              <td style={{ textAlign: "right" }}>{`${status.substring(0, 1).toUpperCase()}${status.substring(1)}`}</td>
              <td style={{ textAlign: "right" }}>{amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th style={{ textAlign: "right" }}>Total</th>
            <th style={{ textAlign: "right" }}>{Object.values(amounts).reduce((sum, value) => sum + value, 0)}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
