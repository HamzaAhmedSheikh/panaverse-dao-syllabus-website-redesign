import { Heading, Text, List, ListItem, Box } from "@chakra-ui/react";
import { Reuseable_Text_Link } from "@/components/Reuseable_Links/Reuseable_Text_Link";
import { data, data_part2 } from "@/database/quarter1/Quarter1_Data";

import styles from "../../../styles/Home.module.css";

const TypescriptFundamentals = () => {
  return (
    <>
      {/************* Fundamentals of Typescript   **************/}

      <Heading
        id="fundamentals-of-typescript"
        as="h2"
        fontSize="1.5em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        Fundamentals of Typescript
      </Heading>

      <Reuseable_Text_Link
        title="TypeScript Presentation"
        href="https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing"
        hrefHeading="https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing"
      />

      <Reuseable_Text_Link
        title="Getting Started Exercises with TypeScript and Node.js"
        href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
        hrefHeading="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
      />

      <Text as="p" mt="0.5em" color="#606C71">
        <b> Fundamentals of JavaScript and Node.js Quiz </b>
      </Text>

      <Text as="p" mt="0.5em" color="#606C71">
        <b> Topics Covered in the Quiz: </b>
      </Text>

      <List
        as="ol"
        className={styles.list}
        display="list-item"
        styleType="decimal"
      >
        {data.map(({ id, description }) => (
          <ListItem color="#606C71" mt="0.5rem" key={id}>
            {description}
          </ListItem>
        ))}

        <ListItem color="#606C71">
          <Reuseable_Text_Link
            title="Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm: "
            href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
            hrefHeading="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing "
          />
        </ListItem>

        <ListItem color="#606C71">
          <Reuseable_Text_Link
            title="How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs: "
            href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
            hrefHeading="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
          />
        </ListItem>

        <Text as="p" mt="1em" mb="1em" color="#606C71">
          <b> Note: </b>
          After this point, we will do all our class work and exercises using
          Node.js in .mjs files. We will also be able to develop interactive
          Node.js console programs which will greatly help the students to
          learn.
        </Text>

        {data_part2.map(({ id, description }) => (
          <ListItem color="#606C71" mt="0.5rem" key={id}>
            {description}
          </ListItem>
        ))}

        <ListItem color="#606C71">
          <Reuseable_Text_Link
            title="JavaScript promises, mastering the asynchronous"
            href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"
            hrefHeading="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"
          />
        </ListItem>

        <ListItem color="#606C71">
          <Reuseable_Text_Link
            title="New JavaScript Features in ECMAScript 2022 and 2021"
            href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"
            hrefHeading="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"
          />
        </ListItem>
      </List>
    </>
  );
};

export default TypescriptFundamentals;
