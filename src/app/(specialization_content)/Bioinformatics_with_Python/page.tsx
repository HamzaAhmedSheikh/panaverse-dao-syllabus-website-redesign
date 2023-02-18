"use client";
import { Box, Text, Heading, Divider, Center } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Home.module.css";

const Bioinformatics_with_Python = () => {
  return (
    <>
      <Box mt="1px">
        <Center>
          <Box mt="1px">
            <Center>
              <Image
                src="/images/image10.png"
                width={500}
                height={400}
                alt="Python_for_Biologists"
              />
            </Center>
          </Box>
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
          id="quarter-v-bio-361-bioinformatics-with-python"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Quarter V Bio-361: Bioinformatics with Python
        </Heading>

        <Text as="p" mt="0.8em" color="#606C71">
          Duration: 13 Weeks
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          Course Description:
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          In this course we will discover modern, next-generation sequencing
          libraries from the powerful Python ecosystem to perform cutting-edge
          research and analyze large amounts of biological data.
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
          <Link
            href="https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_"
            target="_blank"
          >
            https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_
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

export default Bioinformatics_with_Python;
