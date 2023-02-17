"use client";
import { Flex, Container, VStack, Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export const PanaverseCommunity = () => {
  return (
    <>
      <Box as="main">
        <Container maxW="8xl">
          <Flex
            flexDir={{ base: "column", md: "row" }}
            align={{ base: "center", md: "center" }}
            maxW={"1440px"}
            mx="auto"
            pt={{ base: "5", md: "10" }}
            px={{ base: "10", md: "20" }}
            textAlign={{ base: "center", md: "center" }}
            justifyContent={{ base: "center", md: "flex-end" }}
          >
            <Box
              as="section"
              order={{ base: "2", md: "2" }}
              mr={{ md: "auto" }}
            >
              <Box
                display={"flex"}
                justifyContent={{ base: "center", md: "flex-start" }}
                mb="4px"
                fontSize={{ base: "20px", md: "large" }}
              >
                <Text fontWeight={"bold"}>
                  The Panaverse Community and Syllabus:
                </Text>
              </Box>
              <Text wordBreak="inherit" fontFamily="sans-serif">
                The internet is without a doubt the most important technological
                development in human history. Web3, 3D Metaverse, AI, IoT, Cloud
                and Edge technologies expand the internet as we know it by
                introducing novel features and advancements. Metaverse will make
                use of all aspects of modern technology, including 3D, VR, AR,
                AI, blockchain, cloud and edge computing, voice computing,
                ambient computing, and more
                <br />
              </Text>
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
              <Text wordBreak="inherit" fontFamily="sans-serif">
                Citi is the latest Wall Street business to give a positive
                prognosis for Web 3.0 and the Metaverse, terms used to depict a
                future internet vision centered on decentralized technologies
                and virtual worlds. Citi stated in a March 2022 research paper
                that the metaverse economy might have a total addressable market
                of up to $13 trillion and five billion people by 2030.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Introduction />
    </>
  );
};

export function Introduction() {
  return (
    <>
      <Box as="main">
        <Container maxW="8xl">
          <Flex
            flexDir={{ base: "column", md: "row" }}
            align={{ base: "center", md: "center" }}
            maxW={"1440px"}
            mx="auto"
            pt={{ base: "5", md: "10" }}
            px={{ base: "10", md: "20" }}
            textAlign={{ base: "center", md: "center" }}
            justifyContent={{ base: "center", md: "flex-end" }}
          >
            <Box
              as="section"
              order={{ base: "2", md: "2" }}
              mr={{ md: "auto" }}
            >
              <Box
                display={"flex"}
                justifyContent={{ base: "center", md: "flex-start" }}
                mb="4px"
                fontSize={{ base: "20px", md: "large" }}
              >
                <Text fontWeight={"bold"}>
                  The Program in a Nutshell: Earn While You Learn
                </Text>
              </Box>
              <Text wordBreak="inherit" fontFamily="sans-serif">
                In this brand-new type of curriculum, students will learn how to
                make money and boost exports in the classroom and will begin
                doing so within six months of the program's beginning. It
                resembles a cross between a corporate venture and an educational
                project.
              </Text>

              <Box
                display={"flex"}
                justifyContent={{ base: "center", md: "flex-start" }}
                mb="4px"
                fontSize={{ base: "20px", md: "large" }}
              >
                <Text fontWeight={"bold"} mt="10px">
                  Program of Studies
                </Text>
              </Box>

              <Text wordBreak="inherit" fontFamily="sans-serif">
                This curriculum is intended for beginners who want to learn
                software development from the ground up. The first three
                quarters are shared by all specialties and are dedicated to
                studying Object-Oriented Programming and cutting-edge Full-Stack
                Web 2.0 development. It is going to be a fifteen-month-long
                hybrid program that includes both onsite and online classes and
                is divided into five quarters of 13 weeks each. The emphasis
                will be on hands-on learning by educating students to produce
                projects. To accommodate everyone, courses will be held
                primarily on weekends or after 6:00 p.m. (Pakistan Time) on
                weekdays. It employs a hybrid teaching format, with core onsite
                classes complemented by online Zoom laboratories and recorded
                videos.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
