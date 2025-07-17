import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <Box bg={"white"} padding={4} color="black">
        <Flex justifyContent="space-between">
          <Box><Text fontWeight={800}><Link href={"/"}>Up skill</Link></Text></Box>
          <Flex gap={4}>
              <Text><Link href={"/skillDevelopment/"}>Skill development</Link></Text>
              <Text><Link href={"/aboutUs"}>About Us</Link></Text>
              <Text><Link href={"/contactUs"}>Contanct Us</Link></Text>
          </Flex>
        </Flex>
    </Box>
  )
}

export default Navbar