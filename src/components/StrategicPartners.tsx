import { Box, Flex, Heading, Grid } from "@chakra-ui/react";
import Image from "next/image";

const StrategicPartners = () => {
  return (
    <>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        align={"center"}
        alignContent="center"
        alignItems={"center"}
        maxW={"1440px"}
        mx="auto"
        pt={{ base: "5", md: "7" }}
        px={{ base: "10", md: "20" }}
        bgColor="gray.200"
        mt="10px"
      >
        <Box mx="auto" pb="10" textAlign="center">
          <Heading color="#192A56" fontSize="3xl">
            Strategic Partners
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={6}
            mx="auto"
            maxW="8xl"
            mt="2rem"
          >
            <Image
              src="/images/panacloudLogo.svg"
              width={200}
              height={200}
              alt="panacloud logo"
            />

            <Image
              src="/images/saylanipartner.png"
              width={200}
              height={200}
              alt="hello world"
            />

            <Image
              src="/images/psxpartner.png"
              width={100}
              height={100}
              alt="hello world"
            />
          </Grid>
        </Box>
      </Flex>
    </>
  );
};

export default StrategicPartners;
