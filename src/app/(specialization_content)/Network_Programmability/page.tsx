"use client";
import { Box, Text, Heading, Divider, Center } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Home.module.css";
import Reuseable_Link from "@/components/Reuseable_Links/Reuseable_Link";

const Network_Programmability = () => {
  return (
    <>
      <Box mt="1px">
        <Center>
          <Image
            src="/images/computer_networking.jpg"
            width={650}
            height={500}
            alt="Network_Programmability"
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
          id="quarter-v-npa-361-network-programmability-and-automation"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Quarter V NPA-361: Network Programmability and Automation
        </Heading>

        <Text as="p" mt="0.8em" color="#606C71">
          Duration: 13 Weeks
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          Course Description:
        </Text>
        <Text as="p" mt="0.6em" color="#606C71">
          Traditional network management techniques can't be effectively
          automated and don't scale well. By implementing network
          programmability based on Application Programming Interfaces, this
          course will assist in overcoming issues of the future and help you
          develop the skills required for the Next-Generation Network Engineer.
        </Text>

        <Text as="p" mt="0.8em" fontWeight="semibold " color="#606C71">
          Textbook:
        </Text>

        <Reuseable_Link
          href="https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3"
          hrefHeading="https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3"
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
          <Link href="/Network_Programmability_Automation">Go back</Link>
        </Text>
      </Box>
    </>
  );
};

export default Network_Programmability;
