"use client";
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

interface ILink {
  title: string;
  href: string;
  hrefHeading: string;
  subHeading?: string;
}

export const Reuseable_Text_Link: React.FC<ILink> = ({
  title,
  href,
  hrefHeading,
  subHeading,
}) => {
  return (
    <>
      <Box color="#606C71" mb="0.8em">
        <Text as="p" mt="0.8em" color="#606C71">
          {title}
        </Text>
        <Text
          as="span"
          mr="0.3rem"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href={href} target="_blank">
            {hrefHeading}
          </Link>
        </Text>
        {subHeading}
      </Box>
    </>
  );
};

interface IQuarter {
  title?: string;
  href: string;
  hrefHeading: string;
  desc?: string;
}

export const Inline_Text_Link: React.FC<IQuarter> = ({
  title,
  href,
  hrefHeading,
  desc,
}) => {
  return (
    <>
      <Box mt="1rem">
        <Text as="span" color="#606C71">
          {title}
          <Text
            as="span"
            mr="0.2rem"
            ml="0.2rem"
            color="#1e6bb8"
            bgColor="transparent"
            fontWeight="normal"
            _hover={{ cursor: "pointer", textDecoration: "underline" }}
          >
            <Link href={href} target="_blank">
              {hrefHeading}
            </Link>
          </Text>
          <Text as="p" mt="0.7rem" color="#606C71">
            {desc}
          </Text>
        </Text>
      </Box>
    </>
  );
};
