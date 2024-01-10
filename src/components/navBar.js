import React from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { AnchorLink } from "gatsby-plugin-anchor-links";

//import Logo from "./Logo";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
        <Flex  w='100%' h='50px' borderRadius='30px' m='10px' justifyContent={'space-between'}>
        <AniLink paintDrip to="/" color="black">
Keyaria Walker
</AniLink>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      </Flex>
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {

  return (
    <AnchorLink
    to={to}> 
      <Text display="block" {...rest} >
        {children}
      </Text>
      </AnchorLink>
  );
};

const MenuLinks = ({ isOpen }) => {
    
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing='4rem'
        textTransform='uppercase'
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={['4px', '4px', 0, 0]}
      >
               <AniLink paintDrip to="/" color="black">
Home</AniLink>
<MenuItem to="/#about">About </MenuItem>
        <MenuItem to="/#works">Works</MenuItem>
        <MenuItem to="/#contact">Contact </MenuItem>
        <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            color={["red.500", "red.500", "black", "black"]}
            bg={["white", "white", "white", "White"]}
            _hover={{
              bg: ["red.100", "red.100", "red.600", "red.600"]
            }}
          >
            EN
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb='12px'
      p='16px'
      bg={["black", "black", "transparent", "transparent"]}
      color={["black", "black", "black", "black"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
