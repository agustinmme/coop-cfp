import {Box, Heading} from "@chakra-ui/react";
import React from "react";

import StaggeredSlideFade from "../../../ui/common/StaggeredSlideFade";
import {IUser} from "../../types";
import {timeSince} from "../../utils";
import UserNotFound from "../UserNotFound";

import UserCard from "./UserCard";

interface Props {
  users: IUser[];
  totalData: number;
  date: Date;
}

const UserTablet: React.FC<Props> = ({users, totalData, date}) => {
  return (
    <>
      <StaggeredSlideFade>
        <Box as="article" borderBottomRadius="lg" borderTopRadius="lg" boxShadow={"lg"}>
          <Box
            alignItems="center"
            bg={"white"}
            display="flex"
            justifyContent={"space-between"}
            px={5}
            py={2}
          >
            <Heading color={"secondary.900"} fontSize={"xl"} fontWeight={"bold"}>
              # Resultados
            </Heading>
            <Heading color={"secondary.700"} fontSize={"md"} fontWeight={"bold"}>
              {users.length + "/" + totalData}
            </Heading>
          </Box>

          {users.length >= 1 ? (
            users.map((user) => <UserCard key={user.id} user={user} />)
          ) : (
            <UserNotFound />
          )}

          <Box bg={"white"} borderColor={"secondary.300"} borderTopWidth="2px" px={14} py={2}>
            <Heading
              color={"secondary.700"}
              fontSize={{base: "xs", md: "md"}}
              fontWeight={"bold"}
              textAlign="center"
            >
              Ultima actualizacion {timeSince(date)}
            </Heading>
          </Box>
        </Box>
      </StaggeredSlideFade>
    </>
  );
};

export default UserTablet;
