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

const MatterDevies = () => {
  return (
    <>
      <Box mt="1px">
        <Center>
          <Image
            src="/images/internet-of-things.png"
            width={800}
            height={400}
            alt="Matter Device"
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
          id="quarter-iv-ambient-computing-and-iot-specialization"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Quarter IV Ambient Computing and IoT Specialization
        </Heading>
        <Heading
          id="ac-351-ambient-computing-with-voice-assistants-and-matter-devices"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          AC-351: Ambient Computing with Voice Assistants and Matter Devices
        </Heading>

        <Text as="p" mt="0.8em" color="#606C71">
          {" "}
          Duration: 13 Weeks{" "}
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          {" "}
          Course Description:{" "}
        </Text>

        <Text as="p" mt="0.6em" color="#606C71">
          Ambient computing, also commonly referred to as ubiquitous computing,
          is the concept of blending computing power into our everyday lives in
          a way that is embedded into our surroundings - invisible but useful.
          In a multi-device world, people don't want to spend their life fussing
          with technology. An ambient approach gets the tech out of your way so
          you can live your life while getting the help you need. It doesn't
          matter what device you're using, what context you're in, whether
          you're talking, typing, or tapping. The technology in your life works
          together seamlessly. Ambient computing uses all aspects of modern-day
          technology, including voice assistants, artificial intelligence,
          sensors, connectivity, cloud computing and more.
        </Text>

        <Text as="p" mt="0.6em" color="#606C71">
          If you were thinking that the IoT and ambient computing sound a lot
          alike, you aren't wrong; the two concepts are intertwined. IoT refers
          to the vast array of devices that connect to the internet to optimize
          their functionality, like smart sensors and smart speakers: ambient
          computing builds on that. Ambient computing focuses on the interaction
          between these devices once they are connected
        </Text>

        <Text as="p" mt="0.6em" color="#606C71">
          Matter, the next-generation smart home standard, solves many smart
          home pain points while bringing all our IoT devices together. Some of
          the biggest tech companies are working together to make Matter a
          unified protocol for future smart homes. These companies include
          Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa,
          Samsung SmartThings, Google Nest, and Samsung SmartThings will support
          the Matter standard by default for all new devices.
        </Text>

        <Text as="p" mt="0.7em" color="#606C71">
          {" "}
          In this course we will learn to build smart homes with Amazon Alexa
          and Matter protocol.{" "}
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          {" "}
          Course Outline:{" "}
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          {" "}
          Alexa Skill Developement{" "}
        </Text>
        <Text
          as="p"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="https://developer.amazon.com/en-US/alexa" target="_blank">
            https://developer.amazon.com/en-US/alexa
          </Link>
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          {" "}
          Alexa with Matter Protocol{" "}
        </Text>
        <Text
          as="p"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://developer.amazon.com/en-US/alexa/matter"
            target="_blank"
          >
            https://developer.amazon.com/en-US/alexa/matter
          </Link>
        </Text>

        <Text
          as="p"
          mt="0.4em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html"
            target="_blank"
          >
            https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html
          </Link>
        </Text>

        <Divider mt="1rem" />
        <Text
          as="p"
          mt="1em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="/Ambient_Computing_IoT_Specialization">Go back</Link>
        </Text>
      </Box>
    </>
  );
};

export default MatterDevies;
