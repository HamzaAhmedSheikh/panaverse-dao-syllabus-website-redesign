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
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

interface StateElement {
  title: string;
  content?: string;
  imageUrl: string;
  imageAlt: string;
}

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
    title: "Quarter IV W3-351",
    content: "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
    imagePath: "/images/what_is_smart_contract.avif",
    imageAlt: "what_is_smart_contract",
    url: "/Web_3.0_DApps",
  },
  {
    title: "Quarter V MV-361",
    content: `Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences`,
    imagePath: "/images/download.jpg",
    imageAlt: "metaverses",
    url: "/Metaverse",
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

const WEB3_Metaverse = () => {
  return (
    <>
      <Box display="flex" position="relative">
        <Image
          src="/images/download.jpg"
          height={60}
          width={500}
          style={{ width: "240vh" }}
          alt="web-3-metaverse image"
        />
      </Box>

      <Box
        display="block"
        padding={{ sm: "2em 1em", md: "2em 4em", lg: "2em 6em" }}
        margin="0 auto"
        fontSize={{ sm: "1em", md: "1.1em", lg: "1.1em" }}
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
          Web 3.0 (Blockchain) and Metaverse Specialization
        </Heading>

        <Text as="p" mt="1em" mb="1em" color="#606C71">
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </Text>

        <Text
          as="p"
          mt="1em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="/Web_3.0_DApps">
            Quarter IV W3-351: Developing Smart Contracts and Planet-Scale Web
            3.0 Dapps
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
          <Link href="/Metaverse">
            Quarter V MV-361: Developing Planet-Scale Open Virtual and Augmented
            Metaverse Experiences
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

export default WEB3_Metaverse;
