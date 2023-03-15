"use client";
import { Box, Text, Heading, Divider, Center } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import Content_Component from "@/components/Reuseable_Links/Content_Component";
import { Reuseable_Text_Link } from "@/components/Reuseable_Links/Reuseable_Text_Link";

import styles from "../../../styles/Home.module.css";

const CDK_Terraform = () => {
  return (
    <>
      <Box
        display="block"
        padding={{ sm: "2em 1em", md: "2em 4em", lg: "2em 6em" }}
        margin="0 auto"
        fontSize={{ sm: "1em", md: "1.1em", lg: "1.1em" }}
        className={styles.mainContent}
      >
        <Center>
          <Image
            src="/images/cdk-providers.png"
            width={700}
            height={300}
            alt="terraform cdk"
          />
        </Center>

        <Content_Component
          heading="Quarter V CN-361: Developing Multi-Cloud Apps using CDK for Terraform"
          information="Duration: 13 Weeks"
          descriptionHeading="Course Description: "
          description="Terraform lets you use the same workflow to manage multiple providers
          and handle cross-cloud dependencies. This simplifies management and
          orchestration for large-scale, multi-cloud infrastructures."
          sub_description="Cloud Development Kit for Terraform (CDKTF) allows you to use familiar
          programming languages to define and provision infrastructure. This
          gives you access to the entire Terraform ecosystem without learning
          HashiCorp Configuration Language (HCL) and lets you leverage the power
          of your existing toolchain for testing, dependency management, etc."
          sub_description2="Course Outline:"
        />

        <Reuseable_Text_Link
          title="CDK for Terraform"
          href="https://developer.hashicorp.com/terraform/cdktf"
          hrefHeading="https://developer.hashicorp.com/terraform/cdktf"
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

export default CDK_Terraform;
