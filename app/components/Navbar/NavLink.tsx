import React from "react";

import NextLink from "../../../ui/controls/NextLink";

const NavLink = ({children, href}: {children: React.ReactNode; href: string}) => (
  <NextLink
    _hover={{
      textDecoration: "none",
      bg: "secondary.100",
    }}
    color={"primary"}
    fontSize={{base: "xs", md: "lg"}}
    href={href}
    px={2}
    py={{base: 0, md: 1}}
    rounded={"md"}
    textTransform="capitalize"
  >
    {children}
  </NextLink>
);

export default NavLink;
