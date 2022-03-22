import type {AppProps} from "next/app";

import {Box, Container, Stack, Text} from "@chakra-ui/react";

import MobileNav from "./components/Navbar/MobileNav";
import DesktopNav from "./components/Navbar/DesktopNav";

function App({Component, pageProps}: AppProps) {
  return (
    <Box bg={"bgColor"} minH={"100vh"}>
      <DesktopNav />
      <Container layerStyle="container" maxWidth="container.md" padding={0}>
        <Component {...pageProps} />
        <Stack mt={5}>
          <Box display={"flex"} justifyContent={"space-between"} maxW={"6xl"} p={4}>
            <Text bg={"primary"} color={"white"} fontSize={"xs"} mx="auto" p={2} rounded={"lg"}>
              Deployed by ▲ Vercel
            </Text>
          </Box>
        </Stack>
      </Container>
      <MobileNav />
    </Box>
  );
}

export default App;
