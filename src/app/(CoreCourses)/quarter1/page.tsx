"use client";
import { Box, Heading, Text, Center } from "@chakra-ui/react";

import TypescriptFundamentals from "./TypescriptBasic";
import OOP_with_Typescript from "./OOP_with_Typescript";
import VC_with_Git from "./VC_with_Git";

import Link from "next/link";
import Image from "next/image";

import Reuseable_Link from "@/components/Reuseable_Links/Reuseable_Link";
import {
  Inline_Text_Link,
  Reuseable_Text_Link,
} from "@/components/Reuseable_Links/Reuseable_Text_Link";
import Quarter_Break from "./Quarter_Break";

import styles from "../../../styles/Home.module.css";

const Quarter1 = () => {
  return (
    <>
      <Box>
        <Center>
          <Image
            src="/images/ts_logo.png"
            height={650}
            width={650}
            alt="typescript logo"
          />
        </Center>
      </Box>
      <Box
        display="block"
        padding={{ sm: "2em 2em", md: "2em 4em", lg: "2em 6em" }}
        margin="0 auto"
        fontSize={{ sm: "1em", md: "1.1em", lg: "1.1em" }}
        className={styles.mainContent}
        // lineHeight='1.75'
      >
        <Heading
          id="html-and-css-homework"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          HTML and CSS (Homework)
        </Heading>

        <Reuseable_Text_Link
          title="Learn HTML by Hira Khan (Watch Recorded Videos)"
          href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
          hrefHeading="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
        />

        <Reuseable_Text_Link
          title="Learn CSS Intro by Hira Khan (Watch Recorded Videos)"
          href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
          hrefHeading="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
        />

        <Heading
          id="web-3.0-and-metaverse-theory"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Web 3.0 and Metaverse Theory
        </Heading>

        <Reuseable_Text_Link
          title="Introduction to Panaverse DAO"
          href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
          hrefHeading="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
        />

        <Reuseable_Text_Link
          title="Web 3.0 User Guide"
          href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
          hrefHeading="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
        />

        <Text as="p" mt="0.7em" color="#606C71">
          Complete Web 3 Assignments included in the Web 3 User Guide
        </Text>

        <Reuseable_Text_Link
          title="Virtual and Augmented  Metaverse User Guide"
          href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
          hrefHeading="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
        />

        <Heading
          id="3d-e-commerce"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          3D E-commerce
        </Heading>

        <Text as="p" mt="0.7em" color="#606C71">
          First, in our Web 3 and Metaverse program, we are learning to develop
          Web 1, and Web 2 websites and apps. Later we will learn to develop Web
          3 and 3D Commerce templates and experiences.
        </Text>

        <Inline_Text_Link
          title="But we have to start thinking right now. Let's understand what one virtual store builder company is doing the company name is Emperia."
          href="https://emperiavr.com/"
          hrefHeading="https://emperiavr.com/"
          desc="Using technology, Emperia aims to make virtual worlds into the future of e-commerce, expanding the reach to new and future online shoppers, increasing brand loyalty, and creating a completely new shopping experience."
        />

        <Reuseable_Text_Link
          title="Emporia just got funded: "
          href="https://www.retail-insight-network.com/news/emperia-10m-growth/"
          hrefHeading="https://www.retail-insight-network.com/news/emperia-10m-growth/"
        />

        <Reuseable_Text_Link
          title="Checkout the Virtual Store Demos: "
          href="https://emperiavr.com/projects/"
          hrefHeading="https://emperiavr.com/projects/"
        />

        {/**************** Fundamentals of Typescript ********************/}

        <TypescriptFundamentals />

        {/********* Object-Oriented Programming with TypeScript ***************/}

        <OOP_with_Typescript />

        {/************  TypeScript for React **********/}

        <Heading
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          TypeScript for React
        </Heading>

        <Reuseable_Link
          href="https://profy.dev/article/react-typescript"
          hrefHeading="Minimal TypeScript Crash Course For React With Interactive Code Exercises"
        />

        {/*********** Quarter Break Assignments and Quizzes ********* */}

        <Quarter_Break />

        {/*********** TypeScript for Quizzes ********* */}

        <VC_with_Git />

        <Text
          as="p"
          mt="0.8em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="/quarter2">Go to quarter 2</Link>
        </Text>
      </Box>
    </>
  );
};

export default Quarter1;
