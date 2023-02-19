"use client";
import {
  Box,
  Text,
  Heading,
  Flex,
  Stack,
  Grid,
  Card,
  CardBody,
  Divider,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Home.module.css";

export interface StateElement {
  title: string;
  content?: string;
  imageUrl: string;
  imageAlt: string;
}

export function CardsToDisplay(props: StateElement) {
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

const AI = () => {
  return (
    <>
      <Box display="block" mt="1px">
        <Center>
          <Image src="/images/aibanner.jpg" width={650} height={650} alt="ai" />
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
          id="web-30-blockchain-and-metaverse-specialization"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Artificial Intelligence (AI) and Deep Learning Specialization
        </Heading>

        <Text as="p" mt="1em" mb="1em" color="#606C71">
          The AI and Deep Learning specialization focuses on building and
          deploying intelligent APIs using OpenAI models and building custom
          Deep Learning Tensorflow models
        </Text>

        <Text
          as="p"
          mt="1em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="/Python">
            Quarter IV AI-351: Developing Planet-Scale Intelligent APIs and
            Python Programming
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
          <Link href="/Deep_Learning_MLOps">
            Quarter V AI-361: Deep Learning and MLOps
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

export default AI;

const coreQuarters = [
  {
    title: "Quarter IV",
    content:
      "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
    imagePath: "/images/py.jpg",
    imageAlt: "python",
    url: "/Python",
  },
  {
    title: "Quarter V",
    content: `AI-361: Deep Learning and MLOps`,
    imagePath: "/images/mlops.jpg",
    imageAlt: "mlops",
    url: "/Deep_Learning_MLOps",
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
        <Heading> The Specialization Course Information: </Heading>

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
