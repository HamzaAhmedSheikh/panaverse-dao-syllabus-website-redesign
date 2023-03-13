import React from "react";
import { Heading, Box, Text } from "@chakra-ui/react";
import Link from "next/link";

import { quarter_break_data } from "../../../database/quarter1/Quarter1_Data";

const Quarter_Break = () => {
  return (
    <>
      <Heading
        as="h3"
        fontSize="1.5em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        Quarter Break Assignments and Quizzes
      </Heading>

      {quarter_break_data.map(({ id, title, href, hrefHeading }) => (
        <Box color="#606C71" mb="0.8em" key={id}>
          <Text as="p" mt="0.8em" color="#606C71">
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

      <Text as="span" mt="0.8em" mr="0.4rem" color="#606C71">
        The best-developed Website will be hosted on
      </Text>
      <Text
        as="span"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link href="www.piaic.org" target="_blank">
          www.piaic.org
        </Link>
        <Text as="span" ml="0.4rem" color="#606C71">
          domain
        </Text>
      </Text>

      <Text as="p" mt="0.8rem" color="#606C71" fontWeight="bold">
        After completing the above Five Assignments everyone will appear in the
        following two Quizzes covering Github and TypeScript:
      </Text>
    </>
  );
};

export default Quarter_Break;
