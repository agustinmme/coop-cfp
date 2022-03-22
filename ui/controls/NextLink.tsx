import Link from "next/link";
import {Link as ChakraLink, LinkProps} from "@chakra-ui/react";

interface Props extends LinkProps {
  href: string;
  children: React.ReactNode;
}

const NextLink: React.VFC<Props> = ({href, children, ...props}) => {
  return (
    <Link passHref href={href}>
      <ChakraLink
        _focus={{textDecoration: "none"}}
        _focusVisible={{borderBottom: "2px solid", borderBottomColor: "primary.200"}}
        _hover={{textDecoration: "none"}}
        textDecoration={"none"}
        {...props}
      >
        {children}
      </ChakraLink>
    </Link>
  );
};

export default NextLink;
