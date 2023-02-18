"use client";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const Quarter_V = () => {
  return (
    <>
      <Box display="flex" position="relative">
        <Image
          src="/images/mlops-cycle.png"
          height={500}
          width={1000}
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
          id="quarter-v-ai-361-deep-learning-and-mlops"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Quarter V AI-361: Deep Learning and MLOps
        </Heading>

        <Text as="p" mt="0.8em" color="#606C71">
          Duration: 13 Weeks
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          Course Description:
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          This course will help you understand the capabilities, challenges, and
          consequences of deep learning and prepare you to participate in the
          development of leading-edge AI technology. We will finish the program
          by learning how to envision, create, and maintain integrated systems
          that run constantly in production. Production systems must manage
          constantly changing data, in stark contrast to typical machine
          learning modeling. The production system must also operate
          continuously at the lowest possible cost while delivering the highest
          possible performance.
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          Course Outline:
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          Deep Learning with Tensorflow
        </Text>

        <Text as="p" mt="0.7em" color="#606C71">
          Deep Learning with Python, Second Edition 2nd Edition
        </Text>

        <Text
          as="p"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2"
            target="_blank"
          >
            https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2
          </Link>
        </Text>

        <Text as="p" mt="0.7em" color="#606C71">
          Machine Learning Engineering for Production (MLOps) using Terraform
          for CDK
        </Text>

        <Text as="p" mt="0.7em" color="#606C71">
          A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)
        </Text>

        <Text
          as="p"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351"
            target="_blank"
          >
            https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351
          </Link>
        </Text>

        <Text as="p" mt="0.7em" color="#606C71">
          MLOps leveraging AWS SageMaker and Terraform
        </Text>

        <Text
          as="p"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce"
            target="_blank"
          >
            https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce
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
          <Link href="/">Go back to Home Page</Link>
        </Text>
      </Box>
    </>
  );
};

export default Quarter_V;
