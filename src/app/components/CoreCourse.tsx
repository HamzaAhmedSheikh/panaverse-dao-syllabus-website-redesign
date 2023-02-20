import {
  Box,
  Flex,
  Text,
  Heading,
  Stack,
  Grid,
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
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
    title: "Quarter I (Core)",
    content: "CS-101: Object-Oriented Programming using TypeScript",
    imagePath: "/images/node.png",
    imageAlt: "node",
    url: "/quarter1",
  },
  {
    title: "Quarter II (Core)",
    content:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    imagePath: "/images/next.jpg",
    imageAlt: "react next.js",
    url: "/quarter2",
  },
  {
    title: "Quarter III (Core)",
    content:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    imagePath: "/images/dollar.avif",
    imageAlt: "earn-money",
    url: "/quarter3",
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
        <Heading>Core Courses (Common in All Specializations):</Heading>
        <Text>
          Every participant of the program will start by completing the
          following three core courses:
        </Text>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
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

export default CoreCourse;
