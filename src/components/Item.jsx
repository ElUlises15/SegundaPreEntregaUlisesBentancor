import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div>
      <Card maxW="sm">
        <CardBody style={{ backgroundColor: "#4A235A" }}>
          <Center>
            <Stack mt="6" spacing="3">
              <Heading size="md" color="#F4D03F">
                <img src={producto.imagen} alt={producto.nombre} />
                <p>Producto: {producto.nombre}</p>
              </Heading>
              <Text color="black">Categoría: {producto.categoria}</Text>
            </Stack>
          </Center>
        </CardBody>
        <CardFooter>
          <Center>
            <Link to={`/item/${producto.id}`}>
              <Button style={{ backgroundColor: "#F4D03F" }}>
                más detalles
              </Button>
            </Link>
          </Center>
        </CardFooter>
        <Divider />
      </Card>
    </div>
  );
};

export default Item;
