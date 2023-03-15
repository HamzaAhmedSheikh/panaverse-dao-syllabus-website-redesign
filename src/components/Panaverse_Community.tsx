"use client";
import {
  Flex,
  Container,
  VStack,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const PanaverseCommunity = () => {
  return (
    <>
      <Container maxW={"5xl"} py={6} fontFamily="sans-serif">
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
          <Stack spacing={4}>
            <Heading
              as="h2"
              fontSize="1.5em"
              fontWeight="semibold"
              color="#159957"
              fontFamily="serif"
            >
              The Panaverse Community and Syllabus:
            </Heading>
            <Text
              as="div"
              color="#606C71"
              fontSize={"lg"}
              fontFamily="sans-serif"
              fontWeight="medium"
            >
              The internet is without a doubt the most important technological
              development in human history. Web3, 3D Metaverse, AI, IoT, Cloud
              and Edge technologies expand the internet as we know it by
              introducing novel features and advancements. Metaverse will make
              use of all aspects of modern technology, including 3D, VR, AR, AI,
              blockchain, cloud and edge computing, voice computing, ambient
              computing, and more
              <VStack px="10" py="10">
                <Box>
                  <Image
                    src="https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2021/11/11/f0b915ea-41fd-11ec-b9bb-5bc84a21bb41_image_hires_161600.jpg"
                    width={500}
                    height={500}
                    alt="metavese vision image"
                  />
                </Box>
              </VStack>
              Citi is the latest Wall Street business to give a positive
              prognosis for Web 3.0 and the Metaverse, terms used to depict a
              future internet vision centered on decentralized technologies and
              virtual worlds. Citi stated in a March 2022 research paper that
              the metaverse economy might have a total addressable market of up
              to $13 trillion and five billion people by 2030.
              <Text
                as="span"
                ml="0.4rem"
                color="#1e6bb8"
                bgColor="transparent"
                fontWeight="normal"
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
              >
                <Link
                  href="https://www.citivelocity.com/citigps/metaverse-and-money/"
                  target="blank"
                >
                  https://www.citivelocity.com/citigps/metaverse-and-money/
                </Link>
              </Text>
            </Text>

            <Heading
              as="h2"
              fontSize="1.5em"
              fontWeight="semibold"
              color="#159957"
              fontFamily="serif"
            >
              The Program in a Nutshell: Earn While You Learn
            </Heading>

            <Text
              as="p"
              fontSize="lg"
              fontFamily="serif"
              color="#606C71"
              fontWeight="medium"
            >
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the program's beginning. It resembles a
              cross between a corporate venture and an educational project.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>

      <Introduction />
    </>
  );
};

export function Introduction() {
  return (
    <>
      <Container maxW={"5xl"} py={2} fontFamily="sans-serif">
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
          <Stack spacing={4}>
            <Heading
              as="h2"
              fontSize="1.5em"
              fontWeight="semibold"
              color="#159957"
              fontFamily="serif"
            >
              Program of Studies
            </Heading>
            <Text color={"gray.500"} fontSize={"lg"} fontFamily="sans-serif">
              This curriculum is intended for beginners who want to learn
              software development from the ground up. The first three quarters
              are shared by all specialties and are dedicated to studying
              Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
              development. It is going to be a fifteen-month-long hybrid program
              that includes both onsite and online classes and is divided into
              five quarters of 13 weeks each. The emphasis will be on hands-on
              learning by educating students to produce projects. To accommodate
              everyone, courses will be held primarily on weekends or after 6:00
              p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching
              format, with core onsite classes complemented by online Zoom
              laboratories and recorded videos.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}
