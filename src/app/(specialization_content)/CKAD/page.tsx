"use client";
import { Box, Text, Heading, Divider } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";

const CKAD = () => {
  return (
    <Box
      display="block"
      padding={{ sm: "2em 1em", md: "2em 4em", lg: "2em 6em" }}
      margin="0 auto"
      fontSize={{ sm: "1em", md: "1.1em", lg: "1.1em" }}
      className={styles.mainContent}
    >
      <Heading
        id="quarter-iv-cloud-native-computing-specialization"
        as="h2"
        fontSize="1.5em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        Quarter IV Cloud-Native Computing Specialization
      </Heading>
      <Heading
        id="cn-351-certified-kubernetes-application-developer(ckad)"
        as="h2"
        fontSize="1.5em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        CN-351: Certified Kubernetes Application Developer (CKAD)
      </Heading>

      <Text as="p" mt="0.8em" color="#606C71">
        Duration: 13 Weeks
      </Text>
      <Text as="p" mt="0.8em" color="#606C71">
        Course Description:
      </Text>
      <Text as="p" mt="0.6em" color="#606C71">
        Cloud-native architecture and technologies are an approach to designing,
        constructing, and operating workloads that are built in the cloud and
        take full advantage of the cloud computing model. Cloud-native
        technologies empower organizations to build and run scalable
        applications in modern, dynamic environments such as public, private,
        and hybrid clouds. Containers, service meshes, microservices, immutable
        infrastructure, and declarative APIs exemplify this approach.
      </Text>

      <Text as="p" mt="0.6em" color="#606C71">
        These techniques enable loosely coupled systems that are resilient,
        manageable, and observable. Combined with robust automation, they allow
        engineers to make high-impact changes frequently and predictably with
        minimal toil
      </Text>

      <Text as="p" mt="0.6em" color="#606C71">
        Kubernetes is an open-source system for automating the deployment,
        scaling, and management of containerized applications. In this course,
        you will learn how to develop cloud applications using cloud-native
        technologies like Containers, Kubernetes, and CDK for Kubernetes
      </Text>

      <Text as="p" mt="0.8em" color="#606C71">
        Course Outline:
      </Text>

      <Text as="p" mt="0.8em" color="#606C71">
        Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd
        Edition
      </Text>
      <Text
        as="p"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3"
          target="_blank"
        >
          https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3
        </Link>
      </Text>

      <Text as="p" mt="0.8em" color="#606C71">
        Cloud Development Kit for Kubernetes
      </Text>
      <Text
        as="p"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link href="https://cdk8s.io/" target="_blank">
          https://cdk8s.io/
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
        <Link href="/CNCC">Go back</Link>
      </Text>
    </Box>
  );
};

export default CKAD;
