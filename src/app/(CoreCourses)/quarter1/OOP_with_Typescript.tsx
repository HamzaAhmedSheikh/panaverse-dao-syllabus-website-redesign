import { Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const OOP_with_Typescript = () => {
  return (
    <>
      {/* Object-Oriented Programming with TypeScript **/}

      <Heading
        id="object-oriented-programming-with-typescript"
        as="h3"
        fontSize="1.5em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        Object-Oriented Programming with TypeScript
      </Heading>

      <Text
        as="p"
        mt="0.7em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        Chapters 1-11 of Learning TypeScript: Enhance Your Web Development
        Skills Using Type-Safe JavaScript:
        <Link
          href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1"
          target="_blank"
        >
          https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1
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
        Learning Repository:
        <Link
          href="https://github.com/panaverse/learn-typescript"
          target="_blank"
        >
          https://github.com/panaverse/learn-typescript
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
        In Class Companion projects and articles for Learning TypeScript:
        <Link href="https://www.learningtypescript.com/" target="_blank">
          {" "}
          https://www.learningtypescript.com/{" "}
        </Link>
      </Text>

      <Text as="p" mt="0.8em" color="#606C71">
        {" "}
        Home Project:{" "}
      </Text>

      <Text
        as="p"
        mt="0.4em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://github.com/panaverse/typescript-node-projects"
          target="_blank"
        >
          https://github.com/panaverse/typescript-node-projects{" "}
        </Link>
      </Text>
    </>
  );
};

export default OOP_with_Typescript;
