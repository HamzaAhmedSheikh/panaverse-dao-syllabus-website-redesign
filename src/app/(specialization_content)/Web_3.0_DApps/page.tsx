"use client";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import Tokennomics from "./Tokennomics";

const Section_I = () => {
  return (
    <>
      <Box display="flex" position="relative">
        <Image
          src="/images/what_is_smart_contract.avif"
          height={200}
          width={1270}
          alt="smart_contract"
        />
      </Box>
      <Box
        display="block"
        padding={{ sm: "2em 1em", md: "2em 4em", lg: "2em 6em" }}
        margin="0 auto"
        fontSize={{ sm: "1em", md: "1.1em", lg: "1.1em" }}
        // className={styles.mainContent}
        // lineHeight='1.75'
      >
        <Heading
          id="web-3-and-metaverse-specialization"
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Web 3 and Metaverse Specialization
        </Heading>
        <Heading
          id="quarter-iv-web3-and-metaverse"
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Quarter IV Web3 and Metaverse
        </Heading>
        <Heading
          id="w3-351-developing-smart-contracts-and-planet-scale-web-30-dapps"
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
        </Heading>

        <Text as="p" mt="0.8em" color="#606C71">
          {" "}
          Duration: 13 Weeks{" "}
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          {" "}
          Course Description:{" "}
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          In this course you will learn how to develop Web 3.0 DApps, create a
          project, deploy it in production, write smart contracts, unit test
          them, and create user interfaces for them. We will also learn to
          develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in
          order to develop Web 3 applications you also need to build on top of
          Web 2.0 technologies which we have already covered in the previous
          quarters.
        </Text>

        <Text
          as="p"
          mt="0.7em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db"
            target="_blank"
          >
            The reasons for learning Web 2 before Web 3
          </Link>
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          {" "}
          Course Outline:{" "}
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

        <Text
          as="p"
          mt="0.8em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0"
            target="_blank"
          >
            The Metaverse: And How It Will Revolutionize Everything by Matthew
            Ball
          </Link>
        </Text>

        <Text
          as="p"
          mt="0.8em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067">
            Mastering Blockchain - Fourth Edition by Imran Bashir
          </Link>
        </Text>

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

        <Text
          as="p"
          mt="0.8em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181"
            target="_blank"
          >
            Solidity Programming Essentials - Second Edition By Ritesh Modi
          </Link>
        </Text>

        <Text
          as="p"
          mt="0.8em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts"
            target="_blank"
          >
            Solidity Learning Repo
          </Link>
        </Text>

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

        <Text
          as="p"
          mt="0.8em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://github.com/panaverse/dapps-nextjs"
            target="_blank"
          >
            Dapp Learning Repo
          </Link>
        </Text>

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

export default Section_I;
