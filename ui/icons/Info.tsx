import React from "react";
import {Box, BoxProps, VisuallyHidden, chakra} from "@chakra-ui/react";
import {FaInfo} from "react-icons/fa";

const Info: React.FC = (props: BoxProps): JSX.Element => {
  return (
    <Box alignItems={"center"} display={"inline-flex"} justifyContent={"center"}>
      <chakra.div
        alignItems={"center"}
        bg={"primary"}
        color={"tertiary"}
        display={"inline-flex"}
        height={12}
        justifyContent={"center"}
        rounded={"full"}
        width={12}
        {...props}
      >
        <VisuallyHidden>{"Ayuda"}</VisuallyHidden>
        <FaInfo fontSize={24} />
      </chakra.div>
    </Box>
  );
};

export default Info;
