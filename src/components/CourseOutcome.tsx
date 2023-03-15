"use client";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";

import Link from "next/link";

import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function CourseOutcome() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Plan
          </Text>
          <Heading fontWeight="semibold" color="#159957" fontFamily="serif">
            The Outcome for Participants of the Program
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"} fontFamily="sans-serif">
            The graduates of this program will own products (Full-Stack App
            Templates, AR and VR Experiences, and APIs) that are marketed
            globally by the Panaverse DAO and, if they like, will also be able
            to start off by offering services at a rate of $50 per hour ($96,000
            per year). This would give Pakistani professionals and students a
            fantastic opportunity to better their financial situation while also
            giving the economy a much-needed boost by expanding software
            exports.
          </Text>

          <Box
            display={"flex"}
            justifyContent={{ base: "center", md: "flex-start" }}
            fontSize={{ base: "20px", md: "large" }}
          >
            <Text fontWeight={"bold"}>Read these important links</Text>
          </Box>

          <Stack
            spacing={2}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Text
              as="p"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link
                href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms"
                target="_blank"
              >
                Top 5 &quot;Metaverse&quot; jobs that will rule the future of
                tech industry
              </Link>
            </Text>

            <Text
              as="p"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link
                href="https://web3.career/web3-salaries/blockchain-developer"
                target="_blank"
              >
                Blockchain Developer Salary - Jun 2022
              </Link>
            </Text>

            <Text
              as="p"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link
                href="https://thedefiant.io/web3-soaring-salaries/"
                target="_blank"
              >
                Web3 Salaries Soar to $750,000 for Rank-and-File Devs
              </Link>
            </Text>

            <Text
              as="p"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link
                href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022"
                target="_blank"
              >
                The Metaverse, Blockchain Gaming, and NFTs: Navigating the
                Internet&apos;s Uncharted Waters
              </Link>
            </Text>
            <Text
              as="p"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link
                href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/"
                target="_blank"
              >
                How To Become Metaverse Developer: Scope, Skills, and Salary
              </Link>
            </Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
