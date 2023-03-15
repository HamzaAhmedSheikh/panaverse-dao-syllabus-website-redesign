"use client";
import { Box, Text, Heading, Divider, Center } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import Content_Component from "@/components/Reuseable_Links/Content_Component";
import { Reuseable_Text_Link } from "@/components/Reuseable_Links/Reuseable_Text_Link";

const CKAD = () => {
  return (
    <>
      <Box
        display="block"
        padding={{ sm: "2em 1em", md: "2em 4em", lg: "2em 6em" }}
        margin="0 auto"
        fontSize={{ sm: "1em", md: "1.1em", lg: "1.1em" }}
        className={styles.mainContent}
      >
        <Center mb="1.5rem">
          <Image
            src="/images/ckad-share.png"
            width={500}
            height={300}
            alt="terraform cdk"
          />
        </Center>

        <Content_Component
          heading="Quarter IV Cloud-Native Computing Specialization"
          title="CN-351: Certified Kubernetes Application Developer (CKAD)"
          information="Duration: 13 Weeks"
          descriptionHeading="Course Description:"
          description=" Cloud-native architecture and technologies are an approach to
          designing, constructing, and operating workloads that are built in the
          cloud and take full advantage of the cloud computing model.
          Cloud-native technologies empower organizations to build and run
          scalable applications in modern, dynamic environments such as public,
          private, and hybrid clouds. Containers, service meshes, microservices,
          immutable infrastructure, and declarative APIs exemplify this
          approach."
          sub_description="These techniques enable loosely coupled systems that are resilient,
          manageable, and observable. Combined with robust automation, they
          allow engineers to make high-impact changes frequently and predictably
          with minimal toil"
          sub_description2="Kubernetes is an open-source system for automating the deployment,
          scaling, and management of containerized applications. In this course,
          you will learn how to develop cloud applications using cloud-native
          technologies like Containers, Kubernetes, and CDK for Kubernetes"
        />

        <Text as="p" mt="0.8em" color="#606C71">
          Course Outline:
        </Text>

        <Reuseable_Text_Link
          title="Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition"
          href="https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3"
          hrefHeading="https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3"
        />

        <Reuseable_Text_Link
          title="Cloud Development Kit for Kubernetes"
          href="https://cdk8s.io/"
          hrefHeading="https://cdk8s.io/"
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
          <Link href="/CNCC">Go back</Link>
        </Text>
      </Box>
    </>
  );
};

export default CKAD;
