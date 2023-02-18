"use client";
import { Box, Heading, Text, Divider, Center } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Home.module.css";

const Quarter_IV = () => {
  return (
    <>
      <Box mt="1px">
        <Center>
          <Image src="/images/py.jpg" height={650} width={650} alt="python" />
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
          id="quarter-iv-artificial-intelligence-(ai)-and-deep-learning-specialization"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Quarter IV Artificial Intelligence (AI) and Deep Learning
          Specialization
        </Heading>

        <Heading
          id="ai-351-developing-planet-scale-intelligent-apis-and-python-programming"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          AI-351: Developing Planet-Scale Intelligent APIs and Python
          Programming
        </Heading>

        <Text as="p" mt="0.8em" color="#606C71">
          Duration: 13 Weeks
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          Course Description:
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          Artificial intelligence is the simulation of human intelligence
          processes by machines, especially computer systems. The AI and Deep
          Learning Specialization is a foundational program that will aid in
          your comprehension of deep learning's potential, difficulties, and
          effects as well as equip you to take part in the creation of
          cutting-edge AI technology. We will start this course by understanding
          the fundamentals and use cases for AI and move on to building next-gen
          intelligent apps using OpenAI's powerful models and Next.js 13.
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          We'll conclude the course by learning about basic programming concepts
          using Python, such as lists, dictionaries, classes, functions, and
          loops, and practice writing clean and readable code with exercises for
          each topic. We'll also learn how to make your programs interactive and
          how to test your code safely before adding it to a project. It is a
          fast-paced, thorough introduction to programming with Python 3.10+
          that will have you writing programs, solving problems, and making
          things that work in no time. In this quarter we will also learn Git,
          the distributed version control system. We will also review Git-based
          GitHub services.
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          Course Outline:
        </Text>

        <Text as="p" mt="0.5em" color="#606C71">
          Introduction to Machine Learning, Data Science, and AI
        </Text>

        <Text as="p" mt="0.5em" color="#606C71">
          AI for Everyone:
          <Text
            as="span"
            ml="0.2rem"
            color="#1e6bb8"
            bgColor="transparent"
            fontWeight="normal"
            _hover={{ cursor: "pointer", textDecoration: "underline" }}
          >
            <Link
              href="https://www.coursera.org/learn/ai-for-everyone"
              target="_blank"
            >
              https://www.coursera.org/learn/ai-for-everyone
            </Link>
          </Text>
        </Text>

        <Text as="p" mt="0.5em" color="#606C71">
          AI for Everyone Quiz in Week 3
        </Text>

        <Text as="p" mt="0.5em" color="#606C71">
          Total Questions: 60, Total Time: 75 minutes
        </Text>

        <Text as="p" mt="0.5em" color="#606C71">
          Building Next-Gen Intelligent Apps with OpenAI's Powerful Models
        </Text>

        <Text as="p" mt="0.4em" color="#606C71">
          We will cover GPT-4, ChatGPT, etc. and Next.js 13
        </Text>

        <Text
          as="p"
          mt="0.4em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="https://openai.com/api/" target="_blank">
            https://openai.com/api/
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
            href="https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45"
            target="_blank"
          >
            https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45
          </Link>
        </Text>

        <Text as="p" mt="0.7em" color="#606C71">
          Python Crash Course for TypeScript Developers
        </Text>

        <Text as="p" mt="0.7em" color="#606C71">
          Python Crash Course, 2nd Edition: A Hands-On, Project-Based
          Introduction to Programming 2nd Edition
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
            href="https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5"
            target="_blank"
          >
            https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5
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
          <Link href="/AI_Deep_Learning_Specialization">Go back</Link>
        </Text>
      </Box>
    </>
  );
};

export default Quarter_IV;
