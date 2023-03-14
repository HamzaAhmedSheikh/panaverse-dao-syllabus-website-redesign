"use client";
import { Box, Heading, Text, Divider, Center } from "@chakra-ui/react";
import { Reuseable_Text_Link } from "@/components/Reuseable_Links/Reuseable_Text_Link";
import Reuseable_Link from "@/components/Reuseable_Links/Reuseable_Link";
import AWS_API_Cloud from "./AWS_API_Cloud";
import { qurter2_data, data_part2 } from "@/database/quarter2/quarter2_data";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Home.module.css";

const Quarter_II = () => {
  return (
    <>
      <Box mt="1px">
        <Center>
          <Image src="/images/cloud.jpg" height={650} width={650} alt="cloud" />
        </Center>
      </Box>

      <Box
        display="block"
        padding={{ sm: "2em 1em", md: "2em 4em", lg: "2em 6em" }}
        margin="0 auto"
        fontSize={{ sm: "1em", md: "1.1em", lg: "1.1em" }}
        className={styles.mainContent}
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
          Duration: 13 Weeks
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          Course Description:
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

        {qurter2_data.map(({ id, title, href, hrefHeading }) => (
          <Box color="#606C71" key={id} mb="0.3rem">
            <Text as="p" mt="0.4em" color="#606C71">
              {title}
            </Text>

            <Text
              as="p"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link href={href} target="_blank">
                {hrefHeading}
              </Link>
            </Text>
          </Box>
        ))}

        <Text as="span" mt="0.8em" color="#606C71" fontWeight="semibold">
          First Project for Quarter 2 Students: Build a Resume Website and
          Deploy it on a Custom Domain
        </Text>

        <Text as="span" mt="0.8em" color="#606C71" fontWeight="semibold">
          All Quarter 2 students are required to Build their resume/CV website
          using Next.js 13 and Tailwind CSS
        </Text>

        {data_part2.map(({ id, title, href, hrefHeading }) => (
          <Box color="#606C71" key={id} mb="0.3rem">
            <Text as="p" mt="0.4em" color="#606C71">
              {title}
            </Text>

            <Text
              as="span"
              ml="0.2rem"
              mr="0.2rem"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link href={href} target="_blank">
                {hrefHeading}
              </Link>
            </Text>
          </Box>
        ))}

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

        <Reuseable_Text_Link
          title="CSS Flexbox Explained - Complete Guide to Flexible Containers and Flex Items"
          href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/"
          hrefHeading="https://www.freecodecamp.org/news/css-flexbox-complete-guide/"
        />

        <Reuseable_Text_Link
          title="Chakra UI Docs"
          href="https://chakra-ui.com/getting-started"
          hrefHeading="https://chakra-ui.com/getting-started"
        />

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

        <Reuseable_Link
          href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa"
          hrefHeading="Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano"
          mb="0.8rem"
        />

        <Reuseable_Link
          href="https://www.figma.com/community/file/768809027799962739"
          hrefHeading="Figma Design Kit for TailwindCSS"
          mb="0.8rem"
        />

        <Reuseable_Link
          href="https://www.figma.com/community/file/971408767069651759"
          hrefHeading="Chakra UI Figma Kit"
        />

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

        <Reuseable_Text_Link
          title="API Routes"
          href="https://nextjs.org/docs/api-routes/introduction"
          hrefHeading="https://nextjs.org/docs/api-routes/introduction"
        />

        <Text as="p" mt="0.7em" color="#606C71" fontWeight="semibold">
          APIs with Next.js and tRPC (Remote Zoom Class)
        </Text>

        <Reuseable_Link
          href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/"
          hrefHeading="Build a tRPC CRUD API Example with Next.js"
        />

        <Reuseable_Text_Link
          title="Stop building REST APIs for your Next.js apps, use tRPC instead"
          href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"
          hrefHeading="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"
        />

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

        <Reuseable_Text_Link
          title="Start from scratch with relational databases"
          href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres"
          hrefHeading="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres"
        />

        <Reuseable_Text_Link
          title="SQL For Beginners Video Tutorial"
          href="https://www.youtube.com/watch?v=5hzZtqCNQKk"
          hrefHeading="https://www.youtube.com/watch?v=5hzZtqCNQKk"
        />

        <Reuseable_Text_Link
          title="Database Management Systems and SQL - Tutorial for Beginners"
          href="https://www.freecodecamp.org/news/dbms-and-sql-basics/"
          hrefHeading="https://www.freecodecamp.org/news/dbms-and-sql-basics/"
        />

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

        <Reuseable_Text_Link
          title="Modern CSS with Tailwind, Second Edition by Noel Rappin"
          href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/"
          hrefHeading="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/"
        />

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
          <Link href="/quarter3">Go to Quarter 3 Page</Link>
        </Text>
      </Box>
    </>
  );
};

export default Quarter_II;
