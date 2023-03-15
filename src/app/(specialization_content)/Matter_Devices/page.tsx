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
import Content_Component from "@/components/Reuseable_Links/Content_Component";
import Reuseable_Link from "@/components/Reuseable_Links/Reuseable_Link";

const MatterDevies = () => {
  return (
    <>
      <Box mt="1px">
        <Center>
          <Image
            src="/images/internet-of-things.png"
            width={600}
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
        <Content_Component
          heading="Quarter IV Ambient Computing and IoT Specialization"
          title="AC-351: Ambient Computing with Voice Assistants and Matter Devices"
          information="Duration: 13 Weeks"
          descriptionHeading="Course Description:"
          description="Ambient computing, also commonly referred to as ubiquitous computing,
          is the concept of blending computing power into our everyday lives in
          a way that is embedded into our surroundings - invisible but useful.
          In a multi-device world, people don't want to spend their life fussing
          with technology. An ambient approach gets the tech out of your way so
          you can live your life while getting the help you need. It doesn't
          matter what device you're using, what context you're in, whether
          you're talking, typing, or tapping. The technology in your life works
          together seamlessly. Ambient computing uses all aspects of modern-day
          technology, including voice assistants, artificial intelligence,
          sensors, connectivity, cloud computing and more."
          sub_description="If you were thinking that the IoT and ambient computing sound a lot
          alike, you aren't wrong; the two concepts are intertwined. IoT refers
          to the vast array of devices that connect to the internet to optimize
          their functionality, like smart sensors and smart speakers: ambient
          computing builds on that. Ambient computing focuses on the interaction
          between these devices once they are connected"
          sub_description2="Matter, the next-generation smart home standard, solves many smart
          home pain points while bringing all our IoT devices together. Some of
          the biggest tech companies are working together to make Matter a
          unified protocol for future smart homes. These companies include
          Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa,
          Samsung SmartThings, Google Nest, and Samsung SmartThings will support
          the Matter standard by default for all new devices."
        />

        <Text as="p" mt="0.7em" color="#606C71">
          In this course we will learn to build smart homes with Amazon Alexa
          and Matter protocol.
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          Course Outline:
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          Alexa Skill Developement
        </Text>
        <Reuseable_Link
          href="https://developer.amazon.com/en-US/alexa"
          hrefHeading="https://developer.amazon.com/en-US/alexa"
        />

        <Text as="p" mt="0.8em" color="#606C71">
          Alexa with Matter Protocol
        </Text>

        <Reuseable_Link
          href="https://developer.amazon.com/en-US/alexa/matter"
          hrefHeading="https://developer.amazon.com/en-US/alexa/matter"
        />

        <Reuseable_Link
          href="https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html"
          hrefHeading="https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html"
        />

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
