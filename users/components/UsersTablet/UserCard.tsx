import {Heading, Box, Stack, Text, Wrap, WrapItem, IconButton} from "@chakra-ui/react";
import {useRouter} from "next/router";
import React from "react";
import {FaChevronRight, FaUser} from "react-icons/fa";

import Avatar from "../../../ui/icons/Avatar";
import {IUser} from "../../types";

interface Props {
  user: IUser;
}

const UserCard: React.FC<Props> = ({user: {id, name, type, course}}) => {
  const router = useRouter();

  const handlerClick = () => {
    router.push(`./users/${id}`);
  };

  return (
    <Box
      _hover={{
        bgGradient: "linear(to-r, transparent, secondary.200)",
      }}
      alignSelf={{base: "center", lg: "flex-start"}}
      bg={"white"}
      borderColor={"secondary.300"}
      borderTopWidth="2px"
      cursor={"pointer"}
      p={5}
      onClick={handlerClick}
      onKeyPress={handlerClick}
    >
      <Stack isInline alignItems="center" justifyContent={"space-between"}>
        <Box alignItems="center" display={"flex"} flexDirection={"row"}>
          <Avatar name={name} size="md" />
          <Box alignItems="left" gap={0} ml={3}>
            <Heading color="primary" fontWeight={"semibold"} size={"md"} textTransform="capitalize">
              {name}
            </Heading>
            <Stack isInline alignItems={"center"} mt={1}>
              <FaUser color="primary" fontSize={12} />
              <Text color="primary" fontSize="13" fontWeight={"500"}>
                {type}
              </Text>
            </Stack>
            {course.length > 0 && (
              <Wrap>
                <WrapItem alignItems="center">
                  <Box bg={"pink.500"} minH={"6px"} ml={"3px"} rounded="full" w={"6px"} />
                  <Text
                    color="primary"
                    fontSize="13"
                    fontWeight={"500"}
                    ml={3}
                    textTransform={"capitalize"}
                  >
                    {course}
                  </Text>
                </WrapItem>
              </Wrap>
            )}
          </Box>
        </Box>
        <IconButton
          aria-label={`Enter a card ${name}`}
          color={"primary"}
          colorScheme="transparent"
          icon={<FaChevronRight />}
          rounded="full"
          roundedLeft={"full"}
        />
      </Stack>
    </Box>
  );
};

export default UserCard;
