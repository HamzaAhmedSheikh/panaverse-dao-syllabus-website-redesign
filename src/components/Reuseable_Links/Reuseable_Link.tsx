"use client";

import React from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

interface Link {
  href: string;
  hrefHeading: string;
  mb?: string;
}

const Reuseable_Link = (props: Link) => {
  return (
    <>
      <Text
        as="p"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
        mb={props.mb}
      >
        <Link href={props.href} target="_blank">
          {props.hrefHeading}
        </Link>
      </Text>
    </>
  );
};

export default Reuseable_Link;
