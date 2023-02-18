"use client";
import {
  Flex,
  Grid,
  Box,
  Text,
  Heading,
  Card,
  CardBody,
  Stack,
  Divider,
  List,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";

const Embedded_Programming = () => {
  return (
    <>
      <Box
        display="block"
        padding={{ sm: "2em 1em", md: "2em 4em", lg: "2em 6em" }}
        margin="0 auto"
        fontSize={{ sm: "1em", md: "1.1em", lg: "1.1em" }}
        className={styles.mainContent}
      >
        <Heading
          id="quarter-v-ac-361-embedded-programming-using-c-and-rust"
          as="h2"
          fontSize="1.5em"
          mt="1rem"
          mb="1rem"
          fontWeight="normal"
          color="#159957"
        >
          AC-361: Embedded Programming using C and Rust
        </Heading>

        <Text as="p" mt="0.8em" color="#606C71">
          {" "}
          Duration: 13 Weeks{" "}
        </Text>
        <Text as="p" mt="0.8em" color="#606C71">
          {" "}
          Course Description:{" "}
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          This is an introductory course about using the C and Rust Programming
          Languages on "Bare Metal" embedded systems, such as Microcontrollers.
          We will start by introducing embedded systems and move on to learn the
          C++ and Rust programming languages. We'll learn about basic
          programming concepts using C and Rust, then we will explore key
          concepts in electronics, microcontrollers, and embedded programming.
          It is a fast-paced, thorough introduction to programming with C and
          Rust that will have you writing programs, solving problems, burning
          your code on microcontrollers, playing with GPIOs, and making things
          that work in no time.
        </Text>

        <Text as="p" mt="0.8em" color="#606C71">
          {" "}
          Introduction to the Internet of Things and Embedded Systems (Weeks 1
          and 2){" "}
        </Text>
        <Text
          as="p"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=sharing"
            target="_blank"
          >
            https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=sharing
          </Link>
        </Text>

        <Text as="p" mt="0.5em" mb="0.3em" color="#606C71">
          {" "}
          What is the Fourth Industrial Revolution?{" "}
        </Text>
        <Text as="p" mt="0.5em" mb="0.3em" color="#606C71">
          {" "}
          What is IoT?{" "}
        </Text>
        <Text as="p" mt="0.5em" mb="0.3em" color="#606C71">
          {" "}
          Embedded Systems{" "}
        </Text>
        <Text as="p" mt="0.5em" mb="0.3em" color="#606C71">
          {" "}
          Hardware and Software for IoT{" "}
        </Text>
        <Text as="p" mt="0.5em" mb="0.3em" color="#606C71">
          {" "}
          Edge and Cloud Computing{" "}
        </Text>
        <Text as="p" mt="0.5em" mb="0.3em" color="#606C71">
          {" "}
          The future of IoT is AI{" "}
        </Text>
        <Text as="p" mt="0.5em" mb="0.3em" color="#606C71">
          {" "}
          Blockchain in the Internet of Things?{" "}
        </Text>
        <Text as="p" mt="0.5em" mb="0.3em" color="#606C71">
          {" "}
          IoT + AI + Blockchain: The Fourth Industrial Revolution has begu{" "}
        </Text>
        <Text as="p" mt="0.5em" mb="0.3em" color="#606C71">
          {" "}
          How will Matter change the IoT Infrastructure and address issues
          Metaverse and IoT{" "}
        </Text>

        <Text as="p" mt="0.6em" color="#606C71">
          {" "}
          Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in Week
          3{" "}
        </Text>
        <Text as="p" mt="0.6em" color="#606C71">
          {" "}
          Total Questions: 46, Total Time: 60 minutes{" "}
        </Text>

        <Text as="p" mt="0.7em" color="#606C71">
          {" "}
          The C Reference Book: The C programming language Embedded Programming
          book: Internet of things with ESP8266{" "}
        </Text>

        <Text as="p" mt="0.3em" color="#606C71">
          {" "}
          Download Link:{" "}
        </Text>
        <Text
          as="p"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing"
            target="_blank"
          >
            https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing
          </Link>
        </Text>

        <Text as="p" mt="0.8em" fontWeight="semibold" color="#606C71">
          {" "}
          Introduction to C Part 1 (Weeks 3B, 4, and 5){" "}
        </Text>
        <Text as="p" mt="0.5em" color="#606C71" fontWeight="bold">
          {" "}
          C environment Setup for (Windows, Linux, and Mac OS systems){" "}
        </Text>
        <Text as="p" mt="0.5em" fontWeight="semibold" color="#606C71">
          {" "}
          Chapters 1-2 of “The C programming language”{" "}
        </Text>

        <List as="ul" styleType="disc" className={styles.list}>
          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              {" "}
              Variable names types{" "}
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              {" "}
              Data types and sizes{" "}
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              {" "}
              Constants{" "}
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              {" "}
              Arithmetic operations{" "}
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              {" "}
              Logical and relational operators{" "}
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              {" "}
              Type conversion{" "}
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              {" "}
              Bitwise operators{" "}
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              {" "}
              Conditional expressions{" "}
            </Text>
          </ListItem>
        </List>

        <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
          {" "}
          Programming Assignments will also be given.{" "}
        </Text>

        <Text as="p" mt="0.7em" color="#606C71" fontWeight="semibold">
          {" "}
          C Programming Part 2 (Weeks 6 and 7){" "}
        </Text>
        <Text
          as="p"
          mt="0.7em"
          mb="0.7em"
          color="#606C71"
          fontWeight="semibold"
        >
          {" "}
          Topics 3 and 4 of “The C programming language”{" "}
        </Text>

        <List as="ul" styleType="disc" className={styles.list}>
          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              {" "}
              Control flow statements (else if, loops, switch, break continue){" "}
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              {" "}
              Function and Program structure(Returning and non-returning, scope
              rules, Recursion){" "}
            </Text>
          </ListItem>
        </List>

        <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
          {" "}
          Programming Assignments will also be given.{" "}
        </Text>

        <Text as="p" mt="0.7em" color="#606C71" fontWeight="semibold">
          {" "}
          Introduction to Embedded systems Part 1 (Weeks 8){" "}
        </Text>
        <Text as="p" mt="0.7em" color="#606C71" fontWeight="semibold">
          {" "}
          Basic Electronics and Introduction to microcontrollers <br /> Chapter
          1 of “Internet of things with ESP8266”{" "}
        </Text>

        <List as="ul" styleType="disc" className={styles.list}>
          <ListItem>
            <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
              {" "}
              Arduino IDE installation and env setup for ESP8266{" "}
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
              {" "}
              Burning your first code on ESP8266{" "}
            </Text>
          </ListItem>
        </List>

        <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
          {" "}
          Programming Assignments will also be given.{" "}
        </Text>

        <Text as="p" mt="0.7em" color="#606C71" fontWeight="semibold">
          {" "}
          Mid-Term II: C Programming Quiz 1 in Week 9{" "}
        </Text>
        <Text as="p" mt="0.7em" color="#606C71" fontWeight="semibold">
          {" "}
          Total Questions: 62, Total Time: 75 minutes{" "}
        </Text>

        <Text as="p" mt="0.7em" color="#606C71" fontWeight="semibold">
          {" "}
          Introduction to Embedded systems Part 2 (Weeks 9-12){" "}
        </Text>
        <Text as="p" mt="0.6em" color="#606C71" fontWeight="semibold">
          {" "}
          Chapters 2-5 of “Internet of things with ESP8266”{" "}
        </Text>

        <List as="ul" styleType="disc" className={styles.list}>
          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              Connecting your hardware to wifi. <br />
              <Text
                as="span"
                color="#1e6bb8"
                bgColor="transparent"
                fontWeight="normal"
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
              >
                <Link
                  href="https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/"
                  target="_blank"
                >
                  {" "}
                  https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/{" "}
                </Link>
              </Text>
            </Text>
          </ListItem>
          <ListItem>
            <Text
              as="p"
              mt="0.6em"
              mb="0.4em"
              color="#606C71"
              fontWeight="semibold"
            >
              Reading data from GPIOs. <br />
              <Text
                as="span"
                color="#1e6bb8"
                bgColor="transparent"
                fontWeight="normal"
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
              >
                <Link
                  href="https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number)"
                  target="_blank"
                >
                  {" "}
                  https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number){" "}
                </Link>
              </Text>
            </Text>
          </ListItem>
          <ListItem>
            {" "}
            <Text as="p" mt="0.6em" color="#606C71" fontWeight="semibold">
              {" "}
              Controlling LEDs{" "}
            </Text>{" "}
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.6em" color="#606C71" fontWeight="semibold">
              Reading data from digital sensors <br />
              <Text
                as="span"
                color="#1e6bb8"
                bgColor="transparent"
                fontWeight="normal"
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
              >
                <Link
                  href="https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/"
                  target="_blank"
                >
                  {" "}
                  https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/{" "}
                </Link>
              </Text>
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
              Cloud data logging
            </Text>

            <Text
              as="p"
              mt="0.2em"
              mb="0.2em"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link
                href="https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html"
                target="_blank"
              >
                {" "}
                https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html{" "}
              </Link>
            </Text>

            <Text
              as="p"
              mt="0.3em"
              mb="0.3em"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link
                href="https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform"
                target="_blank"
              >
                {" "}
                https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform{" "}
              </Link>
            </Text>

            <Text
              as="p"
              mt="0.3em"
              mb="0.3em"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link
                href="https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver"
                target="_blank"
              >
                {" "}
                https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver{" "}
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
              {" "}
              Displaying data on the cloud{" "}
            </Text>
            <Text
              as="p"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link
                href="https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud"
                target="_blank"
              >
                {" "}
                https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud{" "}
              </Link>
            </Text>
          </ListItem>

          <ListItem>
            <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
              {" "}
              Controlling controller remotely{" "}
            </Text>
            <Text
              as="p"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link
                href="https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/"
                target="_blank"
              >
                {" "}
                https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/{" "}
              </Link>
            </Text>
          </ListItem>

          <ListItem>
            {" "}
            <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
              {" "}
              Controlling a lamp anywhere in the world{" "}
            </Text>{" "}
          </ListItem>
          <ListItem>
            {" "}
            <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
              {" "}
              Interacting with different web services{" "}
            </Text>{" "}
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
              {" "}
              Embedded Programming using Rust (Extra Weeks in the Course){" "}
            </Text>

            <Text
              as="p"
              mt="0.2em"
              mb="0.2em"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link
                href="https://www.rust-lang.org/what/embedded"
                target="_blank"
              >
                {" "}
                https://www.rust-lang.org/what/embedded{" "}
              </Link>
            </Text>

            <Text
              as="p"
              mt="0.2em"
              mb="0.2em"
              color="#1e6bb8"
              bgColor="transparent"
              fontWeight="normal"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <Link href="https://crates.io/crates/esp8266" target="_blank">
                {" "}
                https://crates.io/crates/esp8266{" "}
              </Link>
            </Text>
          </ListItem>
        </List>

        <Text as="p" mt="0.8em" color="#606C71" fontWeight="semibold">
          {" "}
          Hardware Requirements:{" "}
        </Text>

        <List as="ol" styleType="decimal" className={styles.list} mt="0.4em">
          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              {" "}
              Esp8266 (Node MCU){" "}
            </Text>
          </ListItem>

          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              {" "}
              Jumper Wires{" "}
            </Text>
          </ListItem>

          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              {" "}
              Bread Board{" "}
            </Text>
          </ListItem>

          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              {" "}
              LEDs{" "}
            </Text>
          </ListItem>

          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              {" "}
              Sensors: (Dht11, ultrasonic sensor, IR sensor){" "}
            </Text>
          </ListItem>
        </List>

        <Divider mt="1rem" />
        <Text
          as="p"
          mt="1em"
          color="#1e6bb8"
          bgColor="transparent"
          fontWeight="normal"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link href="/Ambient_Computing_IoT_Specialization">Go back</Link>
        </Text>
      </Box>
    </>
  );
};

export default Embedded_Programming;
