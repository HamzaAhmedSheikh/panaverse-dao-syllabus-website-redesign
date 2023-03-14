import { Heading, Text } from "@chakra-ui/react";
import { Reuseable_Text_Link } from "@/components/Reuseable_Links/Reuseable_Text_Link";

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

      <Reuseable_Text_Link
        title="Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript: "
        href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1"
        hrefHeading="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1"
      />

      <Reuseable_Text_Link
        title="Learning Repository: "
        href="https://github.com/panaverse/learn-typescript"
        hrefHeading="https://github.com/panaverse/learn-typescript"
      />

      <Reuseable_Text_Link
        title="In Class Companion projects and articles for Learning TypeScript: "
        href="https://www.learningtypescript.com/"
        hrefHeading="https://www.learningtypescript.com/"
      />

      <Reuseable_Text_Link
        title="Home Project: "
        href="https://github.com/panaverse/typescript-node-projects"
        hrefHeading="https://github.com/panaverse/typescript-node-projects"
      />

      <Text as="p" mt="0.8em" color="#606C71">
        Fundamentals of TypeScript Quiz
      </Text>
      <Text as="p" mt="0.8em" color="#606C71">
        TypeScript Professional Proficiency Quiz
      </Text>
    </>
  );
};

export default OOP_with_Typescript;
