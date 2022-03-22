import {Box, Center, HStack} from "@chakra-ui/react";
import React from "react";

import {ICONS, Links, TITLES} from "./Navigation";
import NavLink from "./NavLink";

interface Props {}

const MobileNav: React.FC<Props> = () => {
  return (
    <Box bottom={0} display={{base: "block", md: "none"}} left="0" position={"fixed"} right="0">
      <HStack
        align="center"
        bg={"white"}
        borderTopColor={"secondary.400"}
        borderTopWidth="2px"
        height={16}
        justify="space-around"
        mt="auto"
        py={2}
        shadow="0 -2px 10px 0 rgba(0,0,0, 0.035);"
        zIndex={9999}
      >
        <Center justifyContent={"space-between"} px={10} w="100%">
          {Links.map((link) => (
            <NavLink key={link} href={link !== "home" ? `/${link}` : `/`}>
              <Box alignItems="center" color={"primary"} display={"flex"} flexDirection={"column"}>
                {ICONS[link]}
                {TITLES[link]}
              </Box>
            </NavLink>
          ))}
        </Center>
      </HStack>
    </Box>
  );
};

export default MobileNav;
