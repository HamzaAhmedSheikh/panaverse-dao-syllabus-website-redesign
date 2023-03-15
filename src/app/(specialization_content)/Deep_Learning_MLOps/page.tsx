"use client";
import { Box, Heading, Text, Divider, Center } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Home.module.css";
import Content_Component from "@/components/Reuseable_Links/Content_Component";
import { Reuseable_Text_Link } from "@/components/Reuseable_Links/Reuseable_Text_Link";

const Quarter_V = () => {
  return (
    <>
      <Box>
        <Center>
          <Image
            src="/images/mlops-cycle.png"
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
          heading="Quarter V AI-361: Deep Learning and MLOps"
          information="Duration: 13 Weeks"
          descriptionHeading="Course Description:"
          description="This course will help you understand the capabilities, challenges, and
          consequences of deep learning and prepare you to participate in the
          development of leading-edge AI technology. We will finish the program
          by learning how to envision, create, and maintain integrated systems
          that run constantly in production. Production systems must manage
          constantly changing data, in stark contrast to typical machine
          learning modeling. The production system must also operate
          continuously at the lowest possible cost while delivering the highest
          possible performance."
        />

        <Text as="p" mt="0.8em" color="#606C71">
          Course Outline:
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          Deep Learning with Tensorflow
        </Text>

        <Reuseable_Text_Link
          title="Deep Learning with Python, Second Edition 2nd Edition"
          href="https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2"
          hrefHeading="https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2"
        />

        <Text as="p" mt="0.7em" color="#606C71">
          Machine Learning Engineering for Production (MLOps) using Terraform
          for CDK
        </Text>

        <Reuseable_Text_Link
          title="A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)"
          href="https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351"
          hrefHeading="https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351"
        />

        <Reuseable_Text_Link
          title="MLOps leveraging AWS SageMaker and Terraform"
          href="https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce"
          hrefHeading="https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce"
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
          <Link href="/AI_Deep_Learning_Specialization">Go back </Link>
        </Text>
      </Box>
    </>
  );
};

export default Quarter_V;
