"use client";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Container,
  Center,
} from "@chakra-ui/react";
// import Specialization from "../panaverse/Specialization";
import { quarterOne } from "../../../../data/data";
import { AiFillLinkedin } from "react-icons/ai";
import JavaScriptFundamentals from "./JavaScriptBasic";
import OOP_with_Typescript from "./OOP_with_Typescript";
import VC_with_Git from "./VC_with_Git";
import Link from "next/link";
import Image from "next/image";

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
          id="quarter-i-core"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Quarter I (Core)
        </Heading>

        {quarterOne.map((data, index) => (
          <Box key={index}>
            <Heading
              id="cs-101-object-oriented-programming-using-typescript"
              as="h2"
              fontSize="1.5em"
              mt="1rem"
              mb="1rem"
              fontWeight="normal"
              color="#159957"
            >
              {data.objective}
            </Heading>

            <Text as="p" mt="1em" mb="1em" color="#606C71">
              {data.duration_weeks} Weeks
            </Text>

            <Text as="p" mt="1em" mb="1em" color="#606C71">
              Course Description:
            </Text>

            <Text as="p" mt="1em" mb="1em" color="#606C71">
              {data.description}
            </Text>

            <Text as="p" mt="1em" mb="1em" color="#606C71">
              Course Outline:
            </Text>

            <Heading
              as="h3"
              fontSize="1.5em"
              mt="1rem"
              mb="1rem"
              fontWeight="normal"
              color="#159957"
            >
              {data.title}
            </Heading>

            <Text
              as="p"
              mt="0.7rem"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link href={data.outline[0].url} target="_blank">
                {data.outline[0].text}
              </Link>
            </Text>

            <Text
              as="p"
              mt="0.7rem"
              mb="0.8rem"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link href={data.outline[1].url} target="_blank">
                {data.outline[1].text}
              </Link>
            </Text>

            <Heading
              as="h3"
              fontSize="1.5em"
              mt="0.7rem"
              mb="1rem"
              fontWeight="normal"
              color="#159957"
            >
              Web 3.0 and Metaverse Theory
            </Heading>

            <Text
              as="p"
              mb="0.7em"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link href={data.outline[2].url} target="_blank">
                {data.outline[2].text}
              </Link>
            </Text>

            <Text
              as="p"
              mt="0.7em"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link href={data.outline[3].url} target="_blank">
                {data.outline[3].text}
              </Link>
            </Text>

            <Text as="p" mt="0.7em" color="#606C71">
              Complete Web 3 Assignments included in the Web 3 User Guide
            </Text>

            <Text
              as="p"
              mt="0.6em"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link href={data.outline[4].url} target="_blank">
                {data.outline[4].text}
              </Link>
            </Text>

            <Heading
              id="fundamentals-of-javascript-ecmascript-2022-language-specification"
              as="h3"
              fontSize="1.5em"
              mt="1rem"
              mb="1rem"
              fontWeight="normal"
              color="#159957"
            >
              {data.title2}
            </Heading>

            <Text
              as="p"
              mt="0.6em"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link href={data.outline[5].url} target="_blank">
                {data.outline[5].text}
              </Link>
            </Text>

            <Text
              as="p"
              mt="0.6em"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link href={data.outline[6].url} target="_blank">
                {data.outline[6].text}
              </Link>
            </Text>

            <Text
              as="p"
              mt="0.6em"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link href={data.outline[7].url} target="_blank">
                {data.outline[7].text}
              </Link>
            </Text>

            <Text
              as="p"
              mt="0.6em"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link href={data.outline[8].url} target="_blank">
                {data.outline[8].text}
              </Link>
            </Text>
          </Box>
        ))}

        <JavaScriptFundamentals />
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
        <Text
          as="p"
          mt="0.8em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://profy.dev/article/react-typescript"
            target="_blank"
          >
            Minimal TypeScript Crash Course For React With Interactive Code
            Exercises
          </Link>
        </Text>

        {/*********** TypeScript for Quizzes ********* */}

        <Heading
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          TypeScript Quizzes
        </Heading>
        <Text as="p" mt="0.7em" color="#606C71">
          Fundamentals of TypeScript Quiz
        </Text>
        <Text as="p" mt="0.7em" color="#606C71">
          TypeScript Professional Proficiency Quiz
        </Text>

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
