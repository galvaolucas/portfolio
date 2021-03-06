import { Box, Button, Flex, Text  } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { FiUser } from "react-icons/fi";

export function Introduce() {
  return(
    <Flex
    w="100%"
    h="100vh"
    mt={12}
    direction="row"
    >
    <Box
    display="flex"
    width="100vw"
    height="400px"
    > 
      <Box w="55%" h="100%">
        <Box
          height="100%"
          w="100%"
          display="flex"
          flexDirection="column"
          mt={12}
          pl={12}
          alignItems="start">
          <Text fontSize="5xl" color="gray.700" fontFamily="Tapestry" >
            Lucas Galvão
          </Text>
          <Text
            fontSize="2xl"
            color="gray.700"
            fontWeight={600}
            fontFamily="Poppins"
            mt={5}
            >
            Fullstack Software Developer
          </Text>
          <Text
            fontSize="0xl"
            color="gray.700"
            fontWeight={300}
            fontFamily="Poppins"
            mt={2}
            >
            Olá, sou o Lucas Galvão.
            <br/>
            Tenho 26 anos, formado em Engenharia Elétrica pela UFRN.
            <br/>
            Atualmente estou cursando Análise e Desenvolvimento de Sistemas na UnP.
          </Text>
          <Link to="contact" smooth={true} duration={2000}>
            <Button
              leftIcon={<FiUser/>}
              size="sm"
              mt={5}
              color="white"
              backgroundColor="teal.400"
              colorScheme="black"
              _hover={{
                background: "white",
                color: "teal.400"
              }}
              variant="solid">
                Entre em Contato
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
    </Flex>    
  )
}

export default Introduce;