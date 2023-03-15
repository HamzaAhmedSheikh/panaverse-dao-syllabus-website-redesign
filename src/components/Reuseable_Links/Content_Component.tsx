import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface IComponent {
  heading: string;
  title?: string;
  title2?: string;
  information: string;
  descriptionHeading: string;
  description: string;
  sub_description?: string;
  sub_description2?: string;
}

const Content_Component: React.FC<IComponent> = ({
  heading,
  title,
  title2,
  information,
  descriptionHeading,
  description,
  sub_description,
  sub_description2,
}) => {
  return (
    <>
      <Box as="div">
        <Heading
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          {heading}
        </Heading>
        <Heading
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          {title}
        </Heading>
        <Heading
          as="h3"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          {title2}
        </Heading>

        <Text as="p" mt="0.8em" color="#606C71">
          {information}
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          {descriptionHeading}
        </Text>
        <Text as="p" mt="0.6em" color="#606C71">
          {description}
        </Text>

        <Text as="p" mt="0.6em" color="#606C71">
          {sub_description}
        </Text>

        <Text as="p" mt="0.6em" color="#606C71">
          {sub_description2}
        </Text>
      </Box>
    </>
  );
};

export default Content_Component;
