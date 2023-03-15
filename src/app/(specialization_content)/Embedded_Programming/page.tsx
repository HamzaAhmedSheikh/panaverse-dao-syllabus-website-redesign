"use client";
import {
  Box,
  Text,
  Heading,
  Divider,
  List,
  ListItem,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import Content_Component from "@/components/Reuseable_Links/Content_Component";

import styles from "../../../styles/Home.module.css";
import { Reuseable_Text_Link } from "@/components/Reuseable_Links/Reuseable_Text_Link";
import {
  question,
  introduction,
} from "@/database/specialization_content/Embedded_Programming";
import Reuseable_Link from "@/components/Reuseable_Links/Reuseable_Link";

const Embedded_Programming = () => {
  return (
    <>
      <Box mt="1px">
        <Center>
          <Image
            src="/images/computer-programming-microelectronics.jpg"
            width={600}
            height={500}
            alt="Embedded Programming"
          />
        </Center>
      </Box>
      <Box
        display="block"
        padding={{ sm: "2em 1em", md: "2em 4em", lg: "2em 6em" }}
        margin="0 auto"
        fontSize={{ sm: "1em", md: "1.1em", lg: "1.1em" }}
        className={styles.mainContent}
      >
        <Content_Component
          heading="AC-361: Embedded Programming using C and Rust"
          information="Duration: 13 Weeks"
          descriptionHeading="Course Description: "
          description="This is an introductory course about using the C and Rust Programming Languages on 'Bare Metal' embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced, thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers, playing with GPIOs, and making things that work in no time."
        />

        <Reuseable_Text_Link
          title="Introduction to the Internet of Things and Embedded Systems (Weeks 1
          and 2)"
          href="https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=sharing"
          hrefHeading="https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=sharing"
        />

        {question.map(({ id, information }) => (
          <Box key={id}>
            <Text as="p" mt="0.5em" mb="0.3em" color="#606C71">
              {information}
            </Text>
          </Box>
        ))}

        <Reuseable_Text_Link
          title="Download Link: "
          href="https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing"
          hrefHeading="https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing"
        />

        <Text as="p" mt="0.8em" fontWeight="semibold" color="#606C71">
          Introduction to C Part 1 (Weeks 3B, 4, and 5)
        </Text>
        <Text as="p" mt="0.5em" color="#606C71" fontWeight="bold">
          C environment Setup for (Windows, Linux, and Mac OS systems)
        </Text>
        <Text as="p" mt="0.5em" fontWeight="semibold" color="#606C71">
          Chapters 1-2 of “The C programming language”
        </Text>

        {introduction.map(({ id, information }) => (
          <Box as="div" key={id}>
            <List as="ul" styleType="disc" className={styles.list}>
              <ListItem>
                <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
                  {information}
                </Text>
              </ListItem>
            </List>
          </Box>
        ))}

        <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
          Programming Assignments will also be given.
        </Text>
        <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
          C Programming Part 2 (Weeks 6 and 7)
        </Text>
        <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
          Topics 3 and 4 of “The C programming language”
        </Text>

        <List as="ul" styleType="disc" className={styles.list}>
          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              Control flow statements (else if, loops, switch, break continue)
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              Function and Program structure(Returning and non-returning, scope
              rules, Recursion)
            </Text>
          </ListItem>
        </List>

        <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
          Programming Assignments will also be given.
        </Text>

        <Text as="p" mt="0.7em" color="#606C71" fontWeight="semibold">
          Introduction to Embedded systems Part 1 (Weeks 8)
        </Text>
        <Text as="p" mt="0.7em" color="#606C71" fontWeight="semibold">
          Basic Electronics and Introduction to microcontrollers <br /> Chapter
          1 of “Internet of things with ESP8266”
        </Text>

        <List as="ul" styleType="disc" className={styles.list}>
          <ListItem>
            <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
              Arduino IDE installation and env setup for ESP8266
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
              Burning your first code on ESP8266
            </Text>
          </ListItem>
        </List>

        <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
          Programming Assignments will also be given.
        </Text>

        <Text as="p" mt="0.7em" color="#606C71" fontWeight="semibold">
          Mid-Term II: C Programming Quiz 1 in Week 9
        </Text>
        <Text as="p" mt="0.7em" color="#606C71" fontWeight="semibold">
          Total Questions: 62, Total Time: 75 minutes
        </Text>

        <Text as="p" mt="0.7em" color="#606C71" fontWeight="semibold">
          Introduction to Embedded systems Part 2 (Weeks 9-12)
        </Text>
        <Text as="p" mt="0.6em" color="#606C71" fontWeight="semibold">
          Chapters 2-5 of “Internet of things with ESP8266”
        </Text>

        <List as="ul" styleType="disc" className={styles.list}>
          <ListItem>
            <Reuseable_Text_Link
              title="Connecting your hardware to wifi."
              href="https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/"
              hrefHeading="https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/"
            />
          </ListItem>
          <ListItem>
            <Reuseable_Text_Link
              title="Reading data from GPIOs."
              href="https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number)"
              hrefHeading="https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number)"
            />
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.6em" color="#606C71" fontWeight="semibold">
              Controlling LEDs{" "}
            </Text>
          </ListItem>
          <ListItem>
            <Reuseable_Text_Link
              title="Reading data from digital sensors"
              href="https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/"
              hrefHeading="https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/"
            />
          </ListItem>
          <ListItem>
            <Reuseable_Text_Link
              title="Cloud data logging"
              href="https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html"
              hrefHeading="https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html"
            />
            <Reuseable_Link
              href="https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform"
              hrefHeading="https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform"
            />
            <Reuseable_Link
              href="https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver"
              hrefHeading="https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver"
            />
          </ListItem>
          <ListItem>
            <Reuseable_Text_Link
              title="Displaying data on the cloud"
              href="https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud"
              hrefHeading="https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud"
            />
          </ListItem>

          <ListItem>
            <Reuseable_Text_Link
              title="Controlling controller remotely"
              href="https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/"
              hrefHeading="https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/"
            />
          </ListItem>

          <ListItem>
            <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
              Controlling a lamp anywhere in the world
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p" mt="0.5em" color="#606C71" fontWeight="semibold">
              Interacting with different web services
            </Text>
          </ListItem>
          <ListItem>
            <Reuseable_Text_Link
              title="Embedded Programming using Rust (Extra Weeks in the Course)"
              href="https://www.rust-lang.org/what/embedded"
              hrefHeading="https://www.rust-lang.org/what/embedded"
            />
            <Reuseable_Link
              href="https://crates.io/crates/esp8266"
              hrefHeading="https://crates.io/crates/esp8266"
            />
          </ListItem>
        </List>

        <Text as="p" mt="0.8em" color="#606C71" fontWeight="semibold">
          Hardware Requirements:
        </Text>

        <List as="ol" styleType="decimal" className={styles.list} mt="0.4em">
          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              Esp8266 (Node MCU)
            </Text>
          </ListItem>

          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              Jumper Wires
            </Text>
          </ListItem>

          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              Bread Board
            </Text>
          </ListItem>

          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              LEDs
            </Text>
          </ListItem>

          <ListItem>
            <Text as="p" mt="0.4em" color="#606C71" fontWeight="semibold">
              Sensors: (Dht11, ultrasonic sensor, IR sensor)
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
