"use client";
import { Box, Heading, Text, Center, Divider } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { quarter3_data } from "@/database/quarter3_data";
import styles from "../../../styles/Home.module.css";
import Reuseable_Link from "@/components/Reuseable_Links/Reuseable_Link";

const Quarter_III = () => {
  return (
    <>
      <Box>
        <Center>
          <Image
            src="/images/template.webp"
            height={650}
            width={650}
            alt="dollar"
          />
        </Center>
      </Box>

      <Box>
        {quarter3_data.map((data) => (
          <Box
            display="block"
            padding={{ sm: "2em 1em", md: "2em 4em", lg: "2em 6em" }}
            margin="0 auto"
            fontSize={{ sm: "1em", md: "1.1em", lg: "1.1em" }}
            className={styles.mainContent}
            key={data.id}
          >
            <Heading
              id={data.id}
              as="h3"
              fontSize="1.5em"
              mt="1rem"
              mb="1rem"
              fontWeight="normal"
              color="#159957"
            >
              {data.title}
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
              {data.heading}
            </Heading>

            <Text as="p" mt="0.8em" color="#606C71" fontWeight="semibold">
              {data.subHeading}
            </Text>

            <Text as="p" mt="0.8em" color="#606C71" fontWeight="semibold">
              {data.subHeading2}
            </Text>

            <Text as="p" mt="0.8em" color="#606C71">
              {data.description}
            </Text>

            <Text as="p" mt="0.8em" color="#606C71" fontWeight="semibold">
              {data.subHeading3}
            </Text>

            <Reuseable_Link
              href="https://github.com/panaverse/panaverse-template-standard"
              hrefHeading="https://github.com/panaverse/panaverse-template-standard"
            />

            <Text as="p" mt="0.8em" color="#606C71" fontWeight="semibold">
              {data.heading2}
            </Text>

            <Text as="p" mt="0.8em" color="#606C71">
              {data.description2}
            </Text>

            <Divider mt="4" mb="4" />

            <Text
              as="p"
              color="#1e6bb8"
              mt="0.5rem"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link href="/">Go to Home Page</Link>
            </Text>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Quarter_III;
