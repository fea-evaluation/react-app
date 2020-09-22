import React, { useState } from "react";
import {
  Box,
  Button,
  Collapsible,
  grommet,
  Grommet,
  Header,
  Heading,
  Layer,
  Main,
  ResponsiveContext,
  ThemeType,
} from "grommet";
import { deepMerge } from "grommet/utils";
import { FormClose, Notification } from "grommet-icons";

import Overview from "../Overview";
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
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <Grommet full theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <Header background="brand" pad={{ left: "medium", right: "small", vertical: "small" }}>
              <Heading level="3" margin="none">
                Shopping List
              </Heading>
              <Button icon={<Notification />} onClick={() => setShowSidebar((showSidebar) => !showSidebar)} />
            </Header>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Main align="center" justify="center">
                <ShoppingList />
              </Main>
              {!showSidebar || size !== "small" ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box flex width="medium" background="light-2" elevation="small" align="center" justify="center">
                    <Overview />
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box background="light-2" tag="header" justify="end" align="center" direction="row">
                    <Button icon={<FormClose />} onClick={() => setShowSidebar(false)} />
                  </Box>
                  <Box fill background="light-2" align="center" justify="center">
                    <Overview />
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
