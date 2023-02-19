import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  //   Link,
  useColorModeValue,
  Button,
  useDisclosure,
  Text,
  VStack,
  HStack,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import DAO_LOGO from "public/images/dao-logo.png";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  return (
    <>
      <Box boxShadow="lg">
        <Container maxW={1400}>
          <SimpleGrid templateColumns="repeat(2, 1fr)">
            <Box>
              <Image src={DAO_LOGO} height={110} alt="dao logo" />
            </Box>

            <Flex placeItems="center" alignItems="flex-end" gap={2}>
              <Link href="/"> Home </Link>
              <Link href="#"> Course </Link>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    </>
    // <Box
    //   position="fixed"
    //   w="100%"
    //   zIndex="9999"
    //   bg={navBackground}
    //   transition="background-color 0.5s ease-out"
    // >
    //   <Box px={{ base: "4", md: "16" }} py="4">
    //     <Flex h="16" alignItems="center" justifyContent="space-between">
    //       <Box width="110px">
    //         <Link href="/">
    //           <Image src={DAO_LOGO} height={110} alt="Logo" />
    //         </Link>
    //       </Box>
    //       <HStack display={{ base: "none", md: "flex" }} spacing="8">
    //         {NAV_ITEMS.map((navItem) => (
    //           <Link
    //             key={navItem.href}
    //             href={navItem.href}
    //             as="nav"
    //             color="#ffffff"
    //             // color={router.pathname === navItem.href ? "green.400" : "white"}
    //           >
    //             {navItem.label}
    //           </Link>
    //         ))}
    //       </HStack>
    //       <Box
    //         display={{ base: "block", md: "none" }}
    //         onClick={isOpen ? onClose : onOpen}
    //       >
    //         {isOpen ? (
    //           <CloseIcon w={6} h={6} color="white" />
    //         ) : (
    //           <HamburgerIcon w={6} h={6} color="white" />
    //         )}
    //       </Box>
    //     </Flex>

    //     {isOpen ? (
    //       <VStack mt="4" spacing="4" align="stretch">
    //         {NAV_ITEMS.map((navItem) => (
    //           <Link
    //             key={navItem.href}
    //             href={navItem.href}
    //             as="nav"
    //             color="#ffffff"
    //           >
    //             {navItem.label}
    //           </Link>
    //         ))}
    //       </VStack>
    //     ) : null}
    //   </Box>
    // </Box>
  );
};

export default Navbar;
