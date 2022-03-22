import {Stack, Text} from "@chakra-ui/react";
import React from "react";

import Heart from "../icons/Heart";
import Info from "../icons/Info";
interface Props {
  msg: string;
  type?: boolean;
}

const AlertInfo: React.FC<Props> = ({msg, type = "true"}) => {
  return (
    <Stack bg="white" boxShadow={"lg"} direction={["column", "row"]} p={{base: 3, md: 5}}>
      {type ? <Info /> : <Heart />}
      <Text fontSize={{base: "sm", md: "md"}} ml={{base: 0, md: 5}} p={2} textAlign={"justify"}>
        {msg}
      </Text>
    </Stack>
  );
};

export default AlertInfo;
