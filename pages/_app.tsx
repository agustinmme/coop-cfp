import type {AppProps} from "next/app";

import {ChakraProvider} from "@chakra-ui/react";

import theme from "../app/theme";
import App from "../app";

function AppContainer(props: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <App {...props} />
    </ChakraProvider>
  );
}

export default AppContainer;
