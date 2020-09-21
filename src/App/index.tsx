import React, { useState } from "react";
import { Box, Button, Collapsible, grommet, Grommet, Heading, Layer, ResponsiveContext, ThemeType } from "grommet";
import { deepMerge } from "grommet/utils";
import { FormClose, Notification } from "grommet-icons";

import ShoppingList from "../ShoppingList";

const theme: ThemeType = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
});

export function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet full theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <Box
              tag="header"
              direction="row"
              align="center"
              justify="between"
              background="brand"
              pad={{ left: "medium", right: "small", vertical: "small" }}
              elevation="medium"
              style={{ zIndex: 1 }}
            >
              <Heading level="3" margin="none">
                My App
              </Heading>
              <Button icon={<Notification />} onClick={() => setShowSidebar((showSidebar) => !showSidebar)} />
            </Box>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="center">
                <ShoppingList />
              </Box>
              {!showSidebar || size !== "small" ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box flex width="medium" background="light-2" elevation="small" align="center" justify="center">
                    Side Bar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box background="light-2" tag="header" justify="end" align="center" direction="row">
                    <Button icon={<FormClose />} onClick={() => setShowSidebar(false)} />
                  </Box>
                  <Box fill background="light-2" align="center" justify="center">
                    Side Bar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
