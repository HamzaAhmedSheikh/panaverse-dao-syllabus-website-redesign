"use client";
import { Box, Text, Heading, Divider, Center } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Home.module.css";

const Python_for_Biologists = () => {
  return (
    <>
      <Box mt="1px">
        <Center>
          <Image
            src="/images/image6.png"
            width={700}
            height={400}
            alt="Python_for_Biologists"
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
          id="quarter-iv-genomics-and-bioinformatics-specialization"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Quarter IV Genomics and Bioinformatics Specialization
        </Heading>
        <Heading
          id="bio-351-python-for-biologists"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Bio-351: Python for Biologists
        </Heading>

        <Text as="p" mt="0.8em" color="#606C71">
          Duration: 13 Weeks
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          Course Description:
        </Text>
        <Text as="p" mt="0.6em" color="#606C71">
          This course will focus on learning the basics of the Python
          programming language through genomics examples
        </Text>

        <Text as="p" mt="0.8em" fontWeight="semibold " color="#606C71">
          Textbook:
        </Text>
        <Text
          as="p"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="https://www.pythonforbiologists.org/" target="_blank">
            https://www.pythonforbiologists.org/
          </Link>
        </Text>

        <Divider mt="1rem" />
        <Text
          as="p"
          mt="1em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="/Genomics_Bioinformatics">Go back</Link>
        </Text>
      </Box>
    </>
  );
};

export default Python_for_Biologists;
