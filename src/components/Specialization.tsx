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
        _hover={{ bg: "gray.700", color: "#ffffff" }}
        height="100%"
      >
        <CardBody>
          <Image src={imageUrl} width={500} height={500} alt={imageAlt} />
          <Stack mt="6" spacing="3">
            <Heading size="md" mt="7px">
              {title}
            </Heading>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

const coreQuarters = [
  {
    title: "Web 3.0 (Blockchain) and Metaverse Specialization",
    content:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    imagePath: "/images/download.jpg",
    imageAlt: "web-3",
    url: "/Web_3_Blockchain_Metaverse_Specialization",
  },
  {
    title: "Artificial Intelligence (AI) and Deep Learning Specialization",
    content:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    imagePath: "/images/ai.jpg",
    imageAlt: "ai",
    url: "/AI_Deep_Learning_Specialization",
  },
  {
    title: "Cloud-Native Computing Specialization",
    content: "CN-351: Certified Kubernetes Application Developer (CKAD)",
    imagePath: "/images/cloud-native-diagram.png",
    imageAlt: "cloud-native-computing",
    url: "/CNCC",
  },
  {
    title: "Ambient Computing and IoT Specialization",
    content:
      "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
    imagePath: "/images/internet-of-things.png",
    imageAlt: "ambient computing and internet-of-thing",
    url: "/Ambient_Computing_IoT_Specialization",
  },
  {
    title: "Genomics and Bioinformatics Specialization",
    content: "Bio-351: Python for Biologists",
    imagePath: "/images/Bioinformatics-graphic.png",
    imageAlt: "genomics and bioinformatics",
    url: "/Genomics_Bioinformatics",
  },
  {
    title: "Network Programmability and Automation Specialization",
    content: "NPA-351: CCNA 200-301 Certification",
    imagePath: "/images/program-3.webp",
    imageAlt: "network programmability and automation",
    url: "/Network_Programmability_Automation",
  },
];

function Specialization() {
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
        <Heading fontWeight="semibold" color="#159957" fontFamily="serif">
          Specialized Tracks:
        </Heading>
        <Text
          as="p"
          fontSize="lg"
          fontFamily="sans-serif"
          color="#606C71"
          fontWeight="semi-bold"
        >
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each:
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
                // content={elem.content}
              />
            </Link>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
}

export default Specialization;
