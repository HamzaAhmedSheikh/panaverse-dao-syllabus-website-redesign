"use client";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Center,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import DAO_LOGO from "public/images/dao-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        padding="0px 30px 15px"
        borderBottom={0}
        borderStyle={"none"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        justifyContent="center"
        align={"flex-end"}
        alignItems="center"
        bgColor={"#ffffff"}
        fontSize="14px"
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "flex-start", md: "flex-start" }}
        >
          <Box as="div" pt="1rem" ml="10px">
            <Link href="/">
              <Image src={DAO_LOGO} height={50} alt="Logo" />
            </Link>
          </Box>
        </Flex>

        <Flex flex={{ base: 1, md: "auto" }} justify="flex-end">
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
            <Center>
              <Button
                color="#ffffff"
                // px="25px"
                // py="5px"
                // mt="20px"
                p="1rem"
                ml="1.2rem"
                height="2rem"
                alignItems="center"
                justifyItems="center"
                justifyContent="center"
                bgImage="linear-gradient(270deg,#08d88d,#0eb5a3);"
                _hover={{
                  backgroundImage: "linear-gradient(270deg,#0eb5a3,#08d88d);",
                }}
                _focus={{
                  backgroundImage: "linear-gradient(270deg,#0eb5a3,#08d88d);",
                }}
              >
                Apply
              </Button>
            </Center>
          </Flex>
          <Flex
            flex={{ base: 1, md: "auto" }}
            justify="flex-end"
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
            color="black"
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} justify="flex-end">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color="black"
                _hover={{
                  textDecoration: "none",
                  color: "#FF5349",
                }}
              >
                <Link href={navItem.href ?? ""}>{navItem.label}</Link>
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Link href={href}>
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "#159957" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"#159957"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Button
        color="#ffffff"
        // px="25px"
        // py="5px"
        // mt="20px"
        p="1rem"
        ml="1.2rem"
        mb="1rem"
        height="2rem"
        alignItems="center"
        justifyItems="center"
        justifyContent="center"
        bgImage="linear-gradient(270deg,#08d88d,#0eb5a3);"
        _hover={{
          backgroundImage: "linear-gradient(270deg,#0eb5a3,#08d88d);",
        }}
        _focus={{
          backgroundImage: "linear-gradient(270deg,#0eb5a3,#08d88d);",
        }}
      >
        Apply
      </Button>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} href={href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: `Tracks for Courses`,
    children: [
      {
        label: "Web 3 and Metaverse",
        subLabel: "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        href: "/Web_3_Blockchain_Metaverse_Specialization",
      },
      {
        label: "Cloud-Native Computing",
        subLabel: "Certified Kubernetes Application Developer (CKAD)",
        href: "/CNCC",
      },
      {
        label: "Artificial Intelligence (AI) and Deep Learning",
        subLabel:
          "Developing Planet-Scale Intelligent APIs and Python Programming",
        href: "/AI_Deep_Learning_Specialization",
      },
      {
        label: "Ambient Computing and IoT",
        subLabel: "Ambient Computing with Voice Assistants and Matter Devices",
        href: "/Ambient_Computing_IoT_Specialization",
      },
      {
        label: "Genomics and Bioinformatics",
        subLabel: "Python for Biologists",
        href: "/Genomics_Bioinformatics",
      },
      {
        label: "Network_Programmability_Automation",
        subLabel: "CCNA 200-301 Certification",
        href: "/Network_Programmability_Automation",
      },
    ],
  },
];
