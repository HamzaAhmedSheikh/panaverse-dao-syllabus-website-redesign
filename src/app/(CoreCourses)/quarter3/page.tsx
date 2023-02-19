"use client";
import { Box, Heading, Text, Center } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Home.module.css";

const Quarter_III = () => {
  return (
    <>
      <Box>
        <Center>
          <Image
            src="/images/dollars.jpg"
            height={375}
            width={1350}
            alt="cloud"
          />
        </Center>
      </Box>
      <Box
        display="block"
        padding={{ sm: "2em 1em", md: "2em 4em", lg: "2em 6em" }}
        margin="0 auto"
        fontSize={{ sm: "1em", md: "1.1em", lg: "1.1em" }}
        className={styles.mainContent}
      >
        <Heading
          id="quarter-iii-core"
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Quarter III (Core)
        </Heading>
        <Heading
          id="$-101-dollar-making-bootcamp-full-stack-template-and-api-product-development"
          as="h3"
          fontSize="1.3em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          $-101: Dollar Making Bootcamp - Full-Stack Template and API Product
          Development
        </Heading>

        <Text as="p" mt="0.8em" color="#606C71">
          Earn While You Learn Projects
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          Build Full-Stack Next.js 13 Jamstack Templates:
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          You will be assigned to build a template which we will sell on Theme
          Forest and Panaverse DAO marketplace. The Panaverse DAO will receive
          25% share on the sale of the template which will be used to manage the
          platform. An additional 15% will be spent on marketing the template.
          60% of the revenues will be distributed to the developer through the
          Panaverse DAO in the form of Panaverse tokens.
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          The Template Standard
        </Text>

        <Text
          as="p"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://github.com/panaverse/panaverse-template-standard"
            target="_blank"
          >
            https://github.com/panaverse/panaverse-template-standard
          </Link>
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          Build QraphQL APIs
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          You will be assigned to build APIs for which you will sell
          subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will
          receive 25% share on the sale of the template which will be used to
          manage the platform. An additional 15% will be spent on marketing the
          template. 60% of the revenues will be distributed to the developer
          through the Panaverse DAO in the form of Panaverse tokens.
        </Text>

        <Text
          as="p"
          color="#1e6bb8"
          mt="2em"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="/">Go to Home Page</Link>
        </Text>
      </Box>
    </>
  );
};

export default Quarter_III;
