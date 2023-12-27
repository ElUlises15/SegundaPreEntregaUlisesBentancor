import React from "react";
import CartWidget from "./CartWidget.jsx";
import {
  Flex,
  Box,
  Spacer,
  Menu,
  MenuButton,
  Button,
  Center,
  MenuList,
  MenuItem,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{ backgroundColor: "#4A235A", color: "#F4D03F", marginBottom: 5 }}
    >
      <Center fontSize="5xl" p="4" as="i">
        Tienda de ropa Aylen
      </Center>
      <Divider orientation="horizontal" />
      <Flex alignItems="center">
        <Box p="2">
          <Link to={"/"}>
            <h1>Inicio</h1>
          </Link>
        </Box>
        <Menu p="2">
          <MenuButton>Categorias</MenuButton>
          <MenuList style={{ backgroundColor: "#4A235A", color: "#F4D03F" }}>
            <MenuItem style={{ backgroundColor: "#4A235A" }}>
              <Link to="/category/calzado">
                <p>Calzado</p>
              </Link>
            </MenuItem>
            <MenuItem style={{ backgroundColor: "#4A235A" }}>
              <Link to="/category/pantalon">
                <p>Pantalones</p>
              </Link>
            </MenuItem>
            <MenuItem style={{ backgroundColor: "#4A235A" }}>
              <Link to="/category/camisa">
                <p>Camisas</p>
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Box p="4">
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
}

export default NavBar;
