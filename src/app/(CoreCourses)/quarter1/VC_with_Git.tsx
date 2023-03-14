import { Box, Heading, Text } from "@chakra-ui/react";
import Reuseable_Link from "@/components/Reuseable_Links/Reuseable_Link";
import {
  Inline_Text_Link,
  Reuseable_Text_Link,
} from "@/components/Reuseable_Links/Reuseable_Text_Link";

import Link from "next/link";
import { git_data } from "@/database/quarter1/Quarter1_Data";

const VC_with_Git = () => {
  return (
    <>
      <Heading
        id="fundamentals-of-version-control-with-git-recorded-videos"
        as="h3"
        fontSize="1.5em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        Fundamentals of Version Control with Git (Recorded Videos)
      </Heading>

      <Reuseable_Link
        href="Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)"
        hrefHeading="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF"
      />

      <Text as="p" mt="0.8em" color="#606C71">
        Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step
        course for the complete beginner by Tobias Günther
      </Text>

      <Text as="p" mt="0.8em" color="#606C71">
        We will also cover these readings:
      </Text>

      {git_data.map(({ id, title, href, hrefHeading }) => (
        <Box color="#606C71" key={id} mb="0.3rem">
          <Text as="p" mt="0.4em" color="#606C71">
            {title}
          </Text>

          <Text
            as="span"
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

      <Inline_Text_Link
        title="For practice:"
        href="https://try.github.io/levels/1/challenges/1"
        hrefHeading="https://try.github.io/levels/1/challenges/1"
      />

      <Reuseable_Text_Link
        title="Homework: "
        href="https://www.datacamp.com/courses/introduction-to-git-for-data-science"
        hrefHeading="https://www.datacamp.com/courses/introduction-to-git-for-data-science"
      />

      <Reuseable_Text_Link
        title="Git Cheatsheet: "
        href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html"
        hrefHeading="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html"
      />

      <Text as="p" mt="0.5em" color="#606C71">
        <b> Git Quiz: </b> Total Questions: 60, Total Duration: 75 minutes
      </Text>

      <Text as="p" mt="0.5em" color="#606C71">
        <b> TypeScript Proficiency Quiz </b> Total Questions: 63 Duration: 120
        minutes
      </Text>

      <Reuseable_Text_Link
        title="Study Material: "
        href="https://github.com/panaverse/learn-typescript"
        hrefHeading="https://github.com/panaverse/learn-typescript"
      />
    </>
  );
};

export default VC_with_Git;
