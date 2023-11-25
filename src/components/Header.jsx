import { 
  Box,
  Flex, 
  Heading,  
  Image,
  Link,
  IconButton, 
  Text
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import logoImg from 'https://example.com/logo.png'
import marketImg from 'https://example.com/market.png'

export default function Header() {

  return (
    <Flex
      as="header"
      width="full"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="gray.100"
      color="gray.500"    
    >
    
      {/* Logo e Información */}

      <Flex direction="column" align="center" mr={8}>
        <Image  
          src={logoImg}
          height={10}
          mr={4} 
        />

        <Image
          src={marketImg}
          height={8}
          mr={4}
        />

        <Text fontWeight="medium">  
          Welcome to 
        </Text>

        <Heading size="md">Niko Market</Heading>
        
        <Text textAlign="center">
         Online Drop shipping Around the world
        </Text>
      </Flex>

      {/* Links */}

      <Flex
        width={{ base: "full", md: "auto" }} 
        flexGrow={1}   
        mt={{ base: 4, md: 0 }}
      >

      </Flex>

      {/* Menu Hamburguesa */}

      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
        />  
      </Box>

    </Flex>
  )
}
