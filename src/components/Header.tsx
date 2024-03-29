import { Box, Heading } from "@chakra-ui/react";
import { PanaverseCommunity } from "../components/Panaverse_Community";
import styles from "../styles/Home.module.css";
import CoreCourse from "../components/CoreCourse";
import Specialization from "../components/Specialization";
import CourseOutcome from "../components/CourseOutcome";
import Operational_Cities from "../components/Operational_Cities";
import StrategicPartners from "../components/StrategicPartners";

const Header = () => {
  return (
    <>
      <Box
        className={styles.pageHeader}
        display="block"
        color="#fff"
        textAlign="center"
        backgroundColor="#159957"
        bgGradient="linear-gradient(120deg, #155799, #159957)"
        role="banner"
        border="none"
      >
        <Heading
          as="h1"
          margin="0.67em 0"
          mt="0"
          mb="0.1rem"
          fontWeight="bold"
          fontSize="2.9rem"
          textAlign="center"
          lineHeight="inherit"
        >
          Certified Web 3.0 and Metaverse Developer: A <br /> Nationwide Program
          in Karachi, Lahore, Islamabad, and Peshawar
        </Heading>
        <Heading
          as="h2"
          className={styles.projectTagline}
          mt="1.7rem"
          fontSize="18px"
          fontWeight="normal"
          opacity="0.7"
          textAlign="center"
        >
          Getting Ready for the Next Generation and Future of the Internet -
          Join a 13 Trillion Dollar Industry with 5 Billion Users
        </Heading>
      </Box>

      <PanaverseCommunity />
      <CoreCourse />
      <Specialization />
      <CourseOutcome />
      <Operational_Cities />
      <StrategicPartners />
    </>
  );
};

export default Header;
