import { Box, Heading, Button, Flex, Text  } from "@chakra-ui/react";
import { BiMailSend } from 'react-icons/bi';
import ContactForm from "../../components/ContactForm";

export function Contact() {
  return(
    <Flex
      w='100%'
      direction="column"
      align='center'
    >
      <Box h={12} display="flex" justifyContent="left" alignItems="center" mt={8} mb={8} >
        <Heading fontWeight={600} color="gray.700"fontSize="3xl">Entre em Contato</Heading>
      </Box> 
      <Flex
        direction="column"
        w="40%"
        h="55%"
        p="15px"
        justifyContent="start"
        border="1px solid"
        borderColor="teal.500"
        borderRadius="20px"
        boxShadow="2px"
        gap="15px"
        >
        <Flex gap={2} align="center" justifyContent="center">
          <Heading fontSize="18px" color="teal.500">Insira seus dados e me envie um e-mail!</Heading>
          <BiMailSend size={24} />
        </Flex>
        <ContactForm />
      </Flex>
    </Flex>    
  )
}

export default Contact;