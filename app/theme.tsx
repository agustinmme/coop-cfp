import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: "#171717",
    secondary: theme.colors.blackAlpha,
    tertiary: "#dedede",
    bgColor: "#f5f5f5",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          color: "primary",
        },
        _focus: {
          color: "primary",
          boxShadow: "0 0 0 2px #171717",
        },
      },
      variants: {
        solid: () => ({
          roundedLeft: 0,
          colorScheme: "secondary",
        }),
      },
    },
  },
  styles: {
    global: () => ({
      "::selection": {
        bg: "secondary.200",
        color: "primary",
      },
    }),
  },
});
