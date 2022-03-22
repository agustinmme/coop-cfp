import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  chakra,
  IconButton,
  FormLabel,
} from "@chakra-ui/react";
import React, {useEffect, useRef} from "react";
import {FaSearch} from "react-icons/fa";
import {BsFillCursorFill} from "react-icons/bs";

import AlertInfo from "../../ui/display/AlertInfo";
import UserTablet from "../components/UsersTablet";
import {IUser} from "../types";

interface Props {
  users: IUser[];
  date: Date;
}
const Coop: React.FC<Props> = ({users, date}) => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [search, setSearch] = React.useState<string>("");
  const matches = React.useMemo(() => {
    const norma = search
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase();

    return users.filter((user) => user.name.toLowerCase().includes(norma));
  }, [users, search]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handlerSumbit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setSearch(inputValue);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <>
      <Stack gap={{base: 3, md: 5}}>
        <Box mt={{base: "none", sm: 8, lg: 12}} py={{base: 0, sm: 5}}>
          <Box textAlign={"center"} w={"95%"}>
            <chakra.h1
              color={"gray.900"}
              fontSize={{base: "4xl", md: "6xl"}}
              fontWeight={{base: "bold", md: "extrabold"}}
              lineHeight="shorter"
              mb={3}
            >
              Cooperadora
            </chakra.h1>

            <chakra.p color="secondary.800" fontSize={{base: "xs", md: "xl"}} lineHeight="base">
              Centro de Formación Profesional N° 402 de Berisso
            </chakra.p>
          </Box>
        </Box>
        <AlertInfo
          msg={
            "Hola! Bienvenido a la web de la Cooperadora, aqui podras encontrar diferentes preguntas sobre la misma y un sistema donde podras buscar tus pagos de cuota societaria."
          }
        />
        <Box
          as={"form"}
          bg="white"
          boxShadow={"lg"}
          mx={2}
          pb={0}
          pt={3}
          px={3}
          onSubmit={handlerSumbit}
        >
          <FormLabel color={"primary"}>Buscar Usuario : </FormLabel>
          <InputGroup position="relative" size="lg" w="full" zIndex="initial">
            <Input
              ref={inputRef}
              _focus={{borderColor: "primary"}}
              _placeholder={{color: "secondary.600", fontSize: {base: "sm", md: "md"}}}
              autoComplete="off"
              colorScheme={"secondary"}
              placeholder="Juan Gonzales"
              required={true}
              roundedRight={0}
              size="lg"
              type="text"
              value={inputValue}
              variant={"filled"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            />
            <InputLeftElement ml={4} w="auto" zIndex={0}>
              <FaSearch />
            </InputLeftElement>
            <IconButton
              aria-label="Search database"
              icon={<BsFillCursorFill fontSize={24} />}
              type="submit"
            />
          </InputGroup>
          <FormLabel color={"secondary.700"} fontSize={"xs"} ml={2} mt={1}>
            Para iniciar la busqueda en nuestro sistema ingrese un nombre
          </FormLabel>
        </Box>

        {search.length && <UserTablet date={date} totalData={users.length} users={matches} />}
      </Stack>
    </>
  );
};

export default Coop;
