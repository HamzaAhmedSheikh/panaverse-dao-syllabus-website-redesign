"use client";
import { Box, Heading, Text, Divider, Center } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Home.module.css";
import Content_Component from "@/components/Reuseable_Links/Content_Component";
import { Reuseable_Text_Link } from "@/components/Reuseable_Links/Reuseable_Text_Link";
import Reuseable_Link from "@/components/Reuseable_Links/Reuseable_Link";

const Quarter_IV = () => {
  return (
    <>
      <Box mt="1px">
        <Center>
          <Image
            src="/images/machine-learning.jpg"
            height={650}
            width={650}
            alt="python"
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
          heading="Quarter IV Artificial Intelligence (AI) and Deep Learning Specialization"
          title="AI-351: Developing Planet-Scale Intelligent APIs and Python Programming"
          information="Duration: 13 Weeks"
          descriptionHeading="Course Description:"
          description="Artificial intelligence is the simulation of human intelligence
          processes by machines, especially computer systems. The AI and Deep
          Learning Specialization is a foundational program that will aid in
          your comprehension of deep learning's potential, difficulties, and
          effects as well as equip you to take part in the creation of
          cutting-edge AI technology. We will start this course by understanding
          the fundamentals and use cases for AI and move on to building next-gen
          intelligent apps using OpenAI's powerful models and Next.js 13."
          sub_description="We'll conclude the course by learning about basic programming concepts
          using Python, such as lists, dictionaries, classes, functions, and
          loops, and practice writing clean and readable code with exercises for
          each topic. We'll also learn how to make your programs interactive and
          how to test your code safely before adding it to a project. It is a
          fast-paced, thorough introduction to programming with Python 3.10+
          that will have you writing programs, solving problems, and making
          things that work in no time. In this quarter we will also learn Git,
          the distributed version control system. We will also review Git-based
          GitHub services."
          sub_description2="Course Outline:"
        />

        <Text as="p" mt="0.5em" color="#606C71">
          Introduction to Machine Learning, Data Science, and AI
        </Text>

        <Reuseable_Text_Link
          title="AI for Everyone: "
          href="https://www.coursera.org/learn/ai-for-everyone"
          hrefHeading="https://www.coursera.org/learn/ai-for-everyone"
        />

        <Text as="p" mt="0.5em" color="#606C71">
          AI for Everyone Quiz in Week 3
        </Text>

        <Text as="p" mt="0.5em" color="#606C71">
          Total Questions: 60, Total Time: 75 minutes
        </Text>

        <Text as="p" mt="0.5em" color="#606C71">
          Building Next-Gen Intelligent Apps with OpenAI's Powerful Models
        </Text>

        <Reuseable_Text_Link
          title="We will cover GPT-4, ChatGPT, etc. and Next.js 13"
          href="https://openai.com/api/"
          hrefHeading="https://openai.com/api/"
        />

        <Reuseable_Link
          href="https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45"
          hrefHeading="https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45"
        />

        <Text as="p" mt="0.7em" color="#606C71">
          Python Crash Course for TypeScript Developers
        </Text>

        <Reuseable_Text_Link
          title="Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition"
          href="https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5"
          hrefHeading="https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5"
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
          <Link href="/AI_Deep_Learning_Specialization">Go back</Link>
        </Text>
      </Box>
    </>
  );
};

export default Quarter_IV;
