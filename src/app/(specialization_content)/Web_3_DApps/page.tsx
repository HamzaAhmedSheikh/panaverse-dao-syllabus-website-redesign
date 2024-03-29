"use client";
import { Box, Divider, Heading, Text, Center } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import Tokennomics from "./Tokennomics";

import styles from "../../../styles/Home.module.css";
import Content_Component from "@/components/Reuseable_Links/Content_Component";
import Reuseable_Link from "@/components/Reuseable_Links/Reuseable_Link";

const Web3_DApps = () => {
  return (
    <>
      <Box mt="1px">
        <Center>
          <Image
            src="/images/what_is_smart_contract.avif"
            height={400}
            width={650}
            alt="smart_contract"
          />
        </Center>
      </Box>
      <Box
        display="block"
        padding={{ sm: "2em 1em", md: "2em 4em", lg: "2em 6em" }}
        margin="0 auto"
        fontSize={{ sm: "1em", md: "1.1em", lg: "1.1em" }}
        className={styles.mainContent}
        // lineHeight='1.75'
      >
        <Content_Component
          heading="Web 3 and Metaverse Specialization"
          title="Quarter IV Web3 and Metaverse"
          title2="W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
          information="Duration: 13 Weeks"
          descriptionHeading="Course Description:"
          description="In this course you will learn how to develop Web 3.0 DApps, create a
          project, deploy it in production, write smart contracts, unit test
          them, and create user interfaces for them. We will also learn to
          develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in
          order to develop Web 3 applications you also need to build on top of
          Web 2.0 technologies which we have already covered in the previous
          quarters."
        />

        <Reuseable_Link
          href="https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db"
          hrefHeading="The reasons for learning Web 2 before Web 3"
        />

        <Text as="p" mt="0.8em" color="#606C71">
          Course Outline:
        </Text>

        <Heading
          id="blockchain-and-metaverse-theory"
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Blockchain and Metaverse Theory
        </Heading>

        <Reuseable_Link
          href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0"
          hrefHeading="The Metaverse: And How It Will Revolutionize Everything by Matthew Ball"
        />

        <Reuseable_Link
          href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067"
          hrefHeading="Mastering Blockchain - Fourth Edition by Imran Bashir"
        />

        <Heading
          id="smart-contract-development-in-solidity"
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Smart Contract Development in Solidity
        </Heading>

        <Reuseable_Link
          href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181"
          hrefHeading="Solidity Programming Essentials - Second Edition By Ritesh Modi"
        />

        <Reuseable_Link
          href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts"
          hrefHeading="Solidity Learning Repo"
        />

        <Heading
          id="dapp-development-using-ethersjs-and-nextjs-13"
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Dapp Development using Ethers.js and Next.js 13
        </Heading>

        <Reuseable_Link
          href="https://github.com/panaverse/dapps-nextjs"
          hrefHeading="Dapp Learning Repo"
        />

        <Tokennomics />

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

export default Web3_DApps;
