"use client";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Blender_3D from "./Blender_3D";

const Metaverse = () => {
  return (
    <>
      <Box display="flex" position="relative">
        <Image
          src="/images/metaverse3.jpg"
          height={500}
          width={1300}
          //   style={{ width: "220vh" }}
          alt="metaverse"
        />
      </Box>

      <Box
        display="block"
        padding={{ sm: "2em 1em", md: "2em 4em", lg: "2em 6em" }}
        margin="0 auto"
        fontSize={{ sm: "1em", md: "1.1em", lg: "1.1em" }}
      >
        <Heading
          id="quarter-v-mv-361-developing-planet-scale-open-virtual-and-augmented-metaverse-experiences"
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Quarter V MV-361: Developing Planet-Scale Open Virtual and Augmented
          Metaverse Experiences
        </Heading>
        <Text as="p" mt="0.8em" color="#606C71">
          Duration: 13 Weeks
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          Course Description:
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          The Web is the Metaverse. The metaverse requires an infrastructure
          that connects all of the metaverses so that we can travel between
          them. This is only achievable with open web-based metaverses. The
          internet and its browsers are magical. Federated but linked
          experiences connect pages, people, technology, businesses, standards,
          and nations. It's unlike anything else. The metaverse should replicate
          the best qualities of the web - it should just be the web. We just
          have to extend online responsive design from mobile to desktop to 3D,
          Augmented Reality, and Virtual Reality. This course will teach you how
          to build the Open Social Spatial Web with WebXR and WebGPU
          technologies.
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          {" "}
          Course Outline:{" "}
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          {" "}
          Open Metaverse Web Development{" "}
        </Text>
        <Text
          as="p"
          mt="0.5em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://github.com/panaverse/metaverse-web"
            target="_blank"
          >
            Open Metaverse Learning Repo
          </Link>
        </Text>
        <Blender_3D />

        <Divider mt="1rem" />
        <Text
          as="p"
          mt="1em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="/Web_3_Blockchain_Metaverse_Specialization">Go back</Link>
        </Text>
      </Box>
    </>
  );
};

export default Metaverse;
