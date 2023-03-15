"use client";
import { Box, Divider, Heading, Text, Center } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Blender_3D from "./Blender_3D";

import styles from "../../../styles/Home.module.css";
import Content_Component from "@/components/Reuseable_Links/Content_Component";
import { Reuseable_Text_Link } from "@/components/Reuseable_Links/Reuseable_Text_Link";

const Metaverse = () => {
  return (
    <>
      <Box mt="1px">
        <Center>
          <Image
            src="/images/metaverse1.jpg"
            height={650}
            width={650}
            alt="metaverse"
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
          heading="Quarter V MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
          information="Duration: 13 Weeks"
          descriptionHeading="Course Description:"
          description="The Web is the Metaverse. The metaverse requires an infrastructure
          that connects all of the metaverses so that we can travel between
          them. This is only achievable with open web-based metaverses. The
          internet and its browsers are magical. Federated but linked
          experiences connect pages, people, technology, businesses, standards,
          and nations. It's unlike anything else. The metaverse should replicate
          the best qualities of the web - it should just be the web. We just
          have to extend online responsive design from mobile to desktop to 3D,
          Augmented Reality, and Virtual Reality. This course will teach you how
          to build the Open Social Spatial Web with WebXR and WebGPU
          technologies."
        />

        <Text as="p" mt="0.8em" color="#606C71">
          Course Outline:
        </Text>

        <Reuseable_Text_Link
          title="Open Metaverse Web Development"
          href="https://github.com/panaverse/metaverse-web"
          hrefHeading="https://github.com/panaverse/metaverse-web"
        />

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
