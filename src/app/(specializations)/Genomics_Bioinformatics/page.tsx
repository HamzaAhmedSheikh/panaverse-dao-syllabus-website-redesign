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

const Genomics_and_Bioinformatics = () => {
  return (
    <>
      <Box mt="1px">
        <Center>
          <Image
            src="/images/Bioinformatics-graphic.png"
            width={800}
            height={400}
            alt="Genomics_and_Bioinformatics"
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
          id="genomics-and-bioinformatics-specialization"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Genomics and Bioinformatics Specialization
        </Heading>

        <Text as="p" mt="1em" mb="1em" color="#606C71">
          Genomics is the study of the total genetic makeup of individual
          organisms, and how this genetic information is structured, functions,
          and has evolved; bioinformatics encompasses a diverse range of
          analytical methods and tools applied to genomic data. This
          Specialization focus on performing complex bioinformatics analysis
          using the most essential Python libraries and applications
        </Text>

        <Text
          as="p"
          mt="1em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="/Python_for_Biologists">
            Quarter IV Bio-351: Python for Biologists
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
          <Link href="/Bioinformatics_with_Python">
            Quarter V Bio-361: Bioinformatics with Python
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

export default Genomics_and_Bioinformatics;

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
    content: "Bio-351: Python for Biologists",
    imagePath: "/images/image6.png",
    imageAlt: "Python_for_Biologists",
    url: "/Python_for_Biologists",
  },
  {
    title: "Quarter V",
    content: `Bio-361: Bioinformatics with Python`,
    imagePath: "/images/image10.png",
    imageAlt: "Bioinformatics with Python",
    url: "/Bioinformatics_with_Python",
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
      height="100%"
    >
      <Box mx="auto" pt="5" pb="10" textAlign="center">
        <Heading color="#159957" fontFamily="sans-serif">
          The Specialization Course Information:
        </Heading>

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
          {coreQuarters.map((elem, index) => (
            <Link href={elem.url} key={index}>
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
