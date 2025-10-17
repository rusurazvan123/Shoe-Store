import {Container, VStack, Text, SimpleGrid, Box} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";


const HomePage = () => {

  const {fetchProducts,products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  },[fetchProducts]);
  console.log("products",products);

  return (
    <Container maxW={"container.lg"}>
      <VStack spacing={8}>
        <Box textAlign={"center"}>
          <Text
            fontSize = {30}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient={"linear(to-r, red.400, red.600)"}
            bgClip={"text"}
            display={"inline-block"}
          >
            Current Products {" "}
          </Text>
          <Box  as="span"
                fontSize={30}
                position="relative"
                top="-2px"
                display="inline-block"
                ml="2"
                bgGradient="linear(to-r, red.400, red.600)"
                bgClip="text">
              🚀
            </Box>
        </Box>
        <SimpleGrid
          columns={{
            base:1,
            md:2,
            lg:3
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) =>(
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
          fontSize = "xl"
          fontWeight={"bold"}
          color={"gray.500"}
          textAlign={"center"}
        >
          No products found 😢{" "}
          <Link to={"/create"}>
            <Text as={"span"} color={"blue.500"} _hover={{textDecoration: "underline"}}>
                Create a product

            </Text>
          </Link>
        </Text>
        )}

      </VStack>
      
    </Container>
  )
}

export default HomePage