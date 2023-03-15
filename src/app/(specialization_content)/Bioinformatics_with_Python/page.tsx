"use client";
import { Box, Text, Heading, Divider, Center } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Home.module.css";
import Reuseable_Link from "@/components/Reuseable_Links/Reuseable_Link";
import Content_Component from "@/components/Reuseable_Links/Content_Component";

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
        <Content_Component
          heading="Quarter V Bio-361: Bioinformatics with Python"
          information="Duration: 13 Weeks"
          descriptionHeading="Course Description:"
          description="In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data."
        />

        <Text as="p" mt="0.8em" fontWeight="semibold " color="#606C71">
          Textbook:
        </Text>

        <Reuseable_Link
          href="https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_"
          hrefHeading="https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_"
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
          <Link href="/Genomics_Bioinformatics">Go back</Link>
        </Text>
      </Box>
    </>
  );
};

export default Bioinformatics_with_Python;
