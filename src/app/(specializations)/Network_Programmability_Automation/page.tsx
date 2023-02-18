"use client";
import {
  Flex,
  Grid,
  Box,
  Text,
  Heading,
  Card,
  CardBody,
  Stack,
  Divider,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Home.module.css";

interface StateElement {
  title: string;
  content?: string;
  imageUrl: string;
  imageAlt: string;
}

const Network_Programmability_Automation = () => {
  return (
    <>
      <Box mt="1px">
        <Center>
          <Image
            src="/images/computer_networking.jpg"
            width={650}
            height={500}
            alt="Network_Programmability_Automation"
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
          id="network_programmability_and_automation_specialization"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Network Programmability and Automation Specialization
        </Heading>

        <Text as="p" mt="1em" mb="1em" color="#606C71">
          More than ever, network engineers are finding it challenging to
          complete their duties entirely manually. Network automation is now
          crucial due to new protocols, technologies, delivery models, and the
          requirement for enterprises to become more adaptable and agile. This
          course teaches network engineers how to automate systems with code
          using a variety of technologies and tools, including Linux, Python,
          APIs, and Git.
        </Text>

        <Text
          as="p"
          mt="1em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="/CCNA_Certification">
            Quarter IV NPA-351: CCNA 200-301 Certification
          </Link>
        </Text>

        <Text
          as="p"
          mt="1em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="/Network_Programmability">
            Quarter V NPA-361: Network Programmability and Automation
          </Link>
        </Text>

        <CoreCourse />

        <Divider mt="1rem" />
        <Text
          as="p"
          mt="1em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="/">Go back to Home Page</Link>
        </Text>
      </Box>
    </>
  );
};

export default Network_Programmability_Automation;

function CardsToDisplay(props: StateElement) {
  const { title, content, imageUrl, imageAlt } = props;
  return (
    <>
      <Card
        maxW="sm"
        bg="gray.200"
        _hover={{ bg: "gray.600", color: "#ffffff" }}
      >
        <CardBody>
          <Image src={imageUrl} width={500} height={500} alt={imageAlt} />
          <Stack mt="6" spacing="3">
            <Heading size="md"> {title} </Heading>
            <Text> {content} </Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

const coreQuarters = [
  {
    title: "Quarter IV",
    content: "NPA-351: CCNA 200-301 Certification",
    imagePath: "/images/ccna.jpg",
    imageAlt: "CCNA",
    url: "/CCNA_Certification",
  },
  {
    title: "Quarter V",
    content: `NPA-361: Network Programmability and Automation`,
    imagePath: "/images/computer_networking.jpg",
    imageAlt: "Network Programmability and Automation",
    url: "/Network_Programmability",
  },
];

function CoreCourse() {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      align={"center"}
      alignContent="center"
      alignItems={"center"}
      maxW={"1440px"}
      mx="auto"
      pt={{ base: "5", md: "10" }}
      px={{ base: "10", md: "20" }}
    >
      <Box mx="auto" pt="5" pb="10" textAlign="center">
        <Heading>Two more quarters remain for specialization:</Heading>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={6}
          mx="auto"
          maxW="8xl"
          mt="1.5rem"
        >
          {coreQuarters.map((elem) => (
            <Link href={elem.url}>
              <CardsToDisplay
                imageAlt={elem.imageAlt}
                imageUrl={elem.imagePath}
                title={elem.title}
                content={elem.content}
              />
            </Link>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
}
