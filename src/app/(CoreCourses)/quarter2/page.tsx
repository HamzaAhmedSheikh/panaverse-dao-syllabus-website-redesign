"use client";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import Link from "next/link";
import AWS_API_Cloud from "./AWS_API_Cloud";
import Image from "next/image";

const Quarter_II = () => {
  return (
    <>
      <Box display="flex" position="relative">
        <Image
          src="/images/cloud.jpg"
          height={500}
          width={500}
          style={{ width: "270vh" }}
          alt="cloud"
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
          id="quarter-ii-core"
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Quarter II (Core)
        </Heading>
        <Heading
          id="w2-201-developing-planet-scale-web-20-serverless-cloud-apps-and-apis-using-nextjs-13-and-cloud-development-kit-cdk-for-terraform"
          as="h3"
          fontSize="1.3em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs
          using Next.js 13 and Cloud Development Kit (CDK) for Terraform
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
          The objective of this course is to teach participants to develop
          customer-facing planet-scale Websites, Full-Stack Apps and templates,
          Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter,
          the participants will be able to develop and deploy web platforms like
          Facebook, Shopify, etc. The technologies covered in this course will
          include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL,
          Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless
          Technologies, and Cloud Development Kit for Terraform (CDKTF).
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          {" "}
          Course Outline:{" "}
        </Text>
        <Heading
          id="nextjs-13-web-development"
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Next.js 13 Web Development
        </Heading>

        <Text
          as="p"
          mt="0.5em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="https://beta.nextjs.org/docs" target="_blank">
            Next 13 Official Documentation
          </Link>
        </Text>

        <Text
          as="p"
          mt="0.5em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="https://beta.reactjs.org/learn" target="_blank">
            {" "}
            Latest Learn React Official Website{" "}
          </Link>
        </Text>

        <Text
          as="p"
          mt="0.5em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://github.com/panaverse/learn-nextjs"
            target="_blank"
          >
            {" "}
            Learn Next.js 13 Learning Repo{" "}
          </Link>
        </Text>

        <Heading
          id="nextjs-13-using-chakra-ui-remote-zoom-class"
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Next.js 13 using Chakra UI (Remote Zoom Class)
        </Heading>

        <Text as="span" mt="0.8em" color="#606C71">
          {" "}
          <strong> Chakra UI Docs: </strong>{" "}
        </Text>
        <Text
          as="span"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="https://chakra-ui.com/getting-started" target="_blank">
            https://chakra-ui.com/getting-started
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
            href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/"
            target="_blank"
          >
            CSS Flexbox Explained – Complete Guide to Flexible Containers and
            Flex Items
          </Link>
        </Text>

        <Heading
          id="uiux-design-with-figma-tailwindcss-and-chakra-ui-remote-zoom-class"
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom
          Class)
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
            href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa"
            target="_blank"
          >
            Designing and Prototyping Interfaces with Figma: Learn essential
            UX/UI design principles by creating <br /> interactive prototypes
            for mobile, tablet, and desktop by Fabio Staiano
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
            href="https://www.figma.com/community/file/768809027799962739"
            target="_blank"
          >
            Figma Design Kit for TailwindCSS
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
            href="https://www.figma.com/community/file/971408767069651759"
            target="_blank"
          >
            Chakra UI Figma Kit
          </Link>
        </Text>

        <Heading
          id="api-routes-with-nextjs"
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          API Routes with Next.js
        </Heading>
        <Text
          as="p"
          mt="0.7em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://nextjs.org/docs/api-routes/introduction"
            target="_blank"
          >
            API Routes
          </Link>
        </Text>

        <Text as="p" mt="0.7em" color="#606C71">
          {" "}
          APIs with Next.js and tRPC{" "}
        </Text>

        <Text
          as="p"
          mt="0.7rem"
          mb="0.7rem"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/"
            target="_blank"
          >
            Build a tRPC CRUD API Example with Next.js
          </Link>
        </Text>

        <Text as="p" mt="0.2rem" color="#606C71">
          Stop building REST APIs for your Next.js apps, use tRPC instead:
        </Text>

        <Text
          as="p"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"
            target="_blank"
          >
            https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/
          </Link>
        </Text>

        <Heading
          id="sql-and-prisma"
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          SQL and Prisma
        </Heading>

        <Text
          as="p"
          mt="0.7em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres"
            target="_blank"
          >
            Start from scratch with relational databases
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
          <Link
            href="https://www.youtube.com/watch?v=5hzZtqCNQKk"
            target="_blank"
          >
            SQL For Beginners Video Tutorial
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
          <Link
            href="https://www.freecodecamp.org/news/dbms-and-sql-basics/"
            target="_blank"
          >
            Database Management Systems and SQL - Tutorial for Beginners
          </Link>
        </Text>

        <Heading
          id="nextjs-13-using-tailwindcss-remote-zoom-class"
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          Next.js 13 using TailwindCSS (Remote Zoom Class)
        </Heading>

        <Text
          as="p"
          mt="0.7em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/"
            target="_blank"
          >
            Modern CSS with Tailwind, Second Edition by Noel Rappin
          </Link>
        </Text>

        <AWS_API_Cloud />
        <Divider />
        <Text
          as="p"
          mt="0.7em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="/quarter-3">Go to Quarter 3 Page</Link>
        </Text>
      </Box>
    </>
  );
};

export default Quarter_II;
