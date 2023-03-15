"use client";

import React from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

interface Link {
  href: string;
  hrefHeading: string;
  mb?: string;
}

const Reuseable_Link: React.FC<Link> = ({
  href,
  hrefHeading,
  mb = "0.8rem",
}) => {
  return (
    <>
      <Text
        as="p"
        color="#1e6bb8"
        mt="0.5rem"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
        mb={mb}
      >
        <Link href={href} target="_blank">
          {hrefHeading}
        </Link>
      </Text>
    </>
  );
};

export default Reuseable_Link;
