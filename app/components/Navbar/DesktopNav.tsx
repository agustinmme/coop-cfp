import {Box, Center, Flex, HStack} from "@chakra-ui/react";
import React from "react";

import {Links, TITLES} from "./Navigation";
import NavLabel from "./NavLink";

interface Props {}

const DesktopNav: React.FC<Props> = () => {
  return (
    <Box
      bg={"bgColor"}
      display={{base: "none", md: "block"}}
      height={16}
      left={0}
      pos="fixed"
      right={0}
      top={0}
    >
      <Center w="100%">
        <Flex h={16}>
          <HStack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLabel key={link} href={link !== "home" ? `/${link}` : `/`}>
                {TITLES[link]}
              </NavLabel>
            ))}
          </HStack>
        </Flex>
      </Center>
    </Box>
  );
};

export default DesktopNav;
