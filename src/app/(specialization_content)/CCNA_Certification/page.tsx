"use client";
import { Box, Text, Heading, Divider, Center } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Home.module.css";

const CCNA_Certification = () => {
  return (
    <>
      <Box mt="1px">
        <Center>
          <Image
            src="/images/ccna2.jpg"
            width={650}
            height={500}
            alt="CCNA_Certification"
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
          id="quarter-iv-network-programmability-and-automation-specialization"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Quarter IV Network Programmability and Automation Specialization
        </Heading>
        <Heading
          id="npa-351-ccna-200-301-certification"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          NPA-351: CCNA 200-301 Certification
        </Heading>

        <Text as="p" mt="0.8em" color="#606C71">
          Duration: 13 Weeks
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          Course Description:
        </Text>
        <Text as="p" mt="0.6em" color="#606C71">
          This course will focus on learning the basics of the networking and
          preparing for the new Cisco Certified Network Associate (CCNA) exam.
          This comprehensive course focuses on the solutions and technologies
          needed to implement and administer a broad range of modern networking
          and IT infrastructure.
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
            href="https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1"
            target="_blank"
          >
            https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1
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
          <Link href="/Network_Programmability_Automation">Go back</Link>
        </Text>
      </Box>
    </>
  );
};

export default CCNA_Certification;
