import {Box, Heading as ChakraHeading, Text, chakra, Stack, Wrap, WrapItem} from "@chakra-ui/react";
import React from "react";
import {FaUser, FaChalkboardTeacher} from "react-icons/fa";

import StaggeredSlideFade from "../../ui/common/StaggeredSlideFade";
import AlertInfo from "../../ui/display/AlertInfo";
import {IUser} from "../types";
import {parseCurrency} from "../utils";
interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({user: {name, course, type, payments}}) => {
  const count = React.useMemo(
    () =>
      payments.reduce((counter, obj) => {
        counter += Number(obj.amount);

        return counter;
      }, 0),
    [payments],
  );

  return (
    <Stack gap={5}>
      <StaggeredSlideFade>
        <Box mt={{base: "none", sm: 8, lg: 12}} mx="auto" py={18}>
          <Box mx="auto" textAlign={"center"} w={"95%"}>
            <chakra.h1
              color={"gray.900"}
              fontSize={{base: "4xl", md: "6xl"}}
              fontWeight={{base: "bold", md: "extrabold"}}
              lineHeight="shorter"
              mb={3}
              textTransform="capitalize"
            >
              {name}
            </chakra.h1>
            <Stack alignItems={"center"} gap={2} mt={5}>
              {course && (
                <Wrap>
                  <WrapItem alignItems="center">
                    <FaChalkboardTeacher color="primary" fontSize={"20px"} />
                    <chakra.p
                      isTruncated
                      color="secondary.800"
                      fontSize={{base: "sm", md: "md"}}
                      lineHeight="base"
                      maxW={{base: "320px", md: "800px"}}
                      ml={2}
                      textTransform="capitalize"
                    >
                      {course[0]}
                    </chakra.p>
                  </WrapItem>
                </Wrap>
              )}
              <Stack isInline alignItems={"center"}>
                <FaUser color="primary" fontSize={15} />
                <chakra.p
                  isTruncated
                  color="secondary.800"
                  fontSize={{base: "sm", md: "md"}}
                  lineHeight="base"
                >
                  {type}
                </chakra.p>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <AlertInfo
          msg={
            "Con tu aporte colabor??s con el gran trabajo que realiza la Asociaci??n Cooperadora para que cada dia est?? mejorando el centro. ??Gracias!"
          }
          type={false}
        />
        <Box>
          <Box
            alignItems="center"
            bg={"white"}
            display="flex"
            justifyContent={"space-between"}
            px={5}
            py={2}
          >
            <ChakraHeading color={"secondary.900"} fontSize={"lg"} fontWeight={"bold"}>
              # Pagos
            </ChakraHeading>
            <Box display={"flex"}>
              <ChakraHeading color={"secondary.700"} fontSize={"md"} fontWeight={"bold"}>
                Total:
              </ChakraHeading>
              <ChakraHeading color={"secondary.700"} fontSize={"md"} fontWeight={"bold"} ml={3}>
                {parseCurrency(count)}
              </ChakraHeading>
            </Box>
          </Box>
          {payments.map((payment, index) => (
            <Box
              key={index}
              _hover={{
                bgGradient: "linear(to-r, transparent, secondary.200)",
              }}
              alignItems="center"
              alignSelf={{base: "center", lg: "flex-start"}}
              bg={"white"}
              borderColor={"secondary.300"}
              borderTopWidth="2px"
              display="flex"
              justifyContent={"space-between"}
              p={5}
            >
              <Box>
                <Text fontWeight={"500"} textTransform={"capitalize"}>
                  - {payment.mth}
                </Text>
              </Box>
              <Text> {parseCurrency(Number(payment.amount))}</Text>
            </Box>
          ))}

          <Box bg={"white"} borderColor={"secondary.300"} borderTopWidth="2px" px={14} py={2}>
            <ChakraHeading
              color={"secondary.700"}
              fontSize={"sm"}
              fontWeight={"bold"}
              textAlign="center"
            >
              Recueda que el sistema se actualiza todos los viernes
            </ChakraHeading>
          </Box>
        </Box>
      </StaggeredSlideFade>
    </Stack>
  );
};

export default User;
