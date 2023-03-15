"use client";
import { Box, Text, Heading, Divider, Center } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Home.module.css";
import Reuseable_Link from "@/components/Reuseable_Links/Reuseable_Link";
import Content_Component from "@/components/Reuseable_Links/Content_Component";

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
        <Content_Component
          heading="Quarter IV Network Programmability and Automation Specialization"
          title="NPA-351: CCNA 200-301 Certification"
          information="Duration: 13 Weeks"
          descriptionHeading="Course Description:"
          description="This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure."
        />

        <Text as="p" mt="0.8em" fontWeight="semibold " color="#606C71">
          Textbook:
        </Text>

        <Reuseable_Link
          href="https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1"
          hrefHeading="https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1"
        />

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
