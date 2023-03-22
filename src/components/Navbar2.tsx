"use client";

import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { RiFlashlightFill } from "react-icons/ri";
import DAO_LOGO from "public/images/dao-logo.png";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";

const navLinks = [{ name: "Home", path: "/" }];

const dropdownLinks = [
  {
    name: "Web 3 and Metaverse",
    path: "/Web_3_Blockchain_Metaverse_Specialization",
  },
  {
    name: "Cloud-Native Computing",
    path: "/CNCC",
  },
  {
    name: "Artificial Intelligence (AI) and Deep Learning",
    path: "/AI_Deep_Learning_Specialization",
  },
  {
    name: "Ambient Computing and IoT",
    path: "/Ambient_Computing_IoT_Specialization",
  },
  {
    name: "Genomics and Bioinformatics",
    path: "/Genomics_Bioinformatics",
  },
  {
    name: "Network_Programmability_Automation",
    path: "/Network_Programmability_Automation",
  },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4} bg={"white"}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        m="1"
        className={styles._m}
        borderBottom="none"
      >
        <Box mx="2rem" my="1rem" className={styles._margin}>
          <Link href="/">
            <Image
              src={DAO_LOGO}
              height={100}
              width={100}
              alt="Panaverse Logo"
            />
          </Link>
        </Box>
        <HStack spacing={8} alignItems="center">
          <HStack
            as="nav"
            spacing={6}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}

            {/* Dropdown Menu */}
            <Menu autoSelect={false} isLazy>
              {({ isOpen, onClose }) => (
                <>
                  <MenuButton _hover={{ color: "blue.400" }}>
                    <Flex alignItems="center">
                      <Text> Courses </Text>
                      <Icon
                        as={BiChevronDown}
                        h={5}
                        w={5}
                        ml={1}
                        transition="all .25s ease-in-out"
                        transform={isOpen ? "rotate(180deg)" : ""}
                      />
                    </Flex>
                  </MenuButton>
                  <MenuList
                    zIndex={5}
                    bg="rgb(255, 255, 255)"
                    border="none"
                    boxShadow="2px 4px 6px 2px rgba(160, 174, 192, 0.6)"
                  >
                    {dropdownLinks.map((link, index) => (
                      <MenuLink
                        key={index}
                        name={link.name}
                        path={link.path}
                        onClose={onClose}
                      />
                    ))}
                  </MenuList>
                </>
              )}
            </Menu>
          </HStack>
        </HStack>

        <Button
          colorScheme="blue"
          size="md"
          rounded="md"
          // display={{ base: "block", md: "block" }}
        >
          <Link href="https://www.piaic.org/" target="_blank">
            Apply
          </Link>
        </Button>
        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={{ base: "inherit", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} display={{ base: "inherit", md: "none" }}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
            <Text fontWeight="semibold" color="gray.500">
              Courses
            </Text>
            <Stack pl={2} spacing={1} mt={"0 !important"}>
              {dropdownLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose} />
              ))}
            </Stack>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

// NavLink Component
interface NavLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = ({ name, path, onClose }: NavLinkProps) => {
  return (
    <ChakraLink
      href={path}
      lineHeight="inherit"
      _hover={{
        textDecoration: "none",
        color: "blue.300",
      }}
      onClick={() => onClose()}
    >
      {name}
    </ChakraLink>
  );
};

// Dropdown MenuLink Component
interface MenuLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const MenuLink = ({ name, path, onClose }: MenuLinkProps) => {
  return (
    <ChakraLink href={path} onClick={() => onClose()}>
      <MenuItem
        _hover={{
          color: "blue.400",
          bg: "gray.200",
        }}
      >
        <Text>{name}</Text>
      </MenuItem>
    </ChakraLink>
  );
};
