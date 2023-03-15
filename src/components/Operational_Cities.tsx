import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  Box,
  Grid,
} from "@chakra-ui/react";

import Image from "next/image";

let operationalCities = [
  {
    imagePath: "/images/mazar-e-quaid.jpg",
    alt: "Mazar-e-Quaid Karachi",
  },
  {
    imagePath: "/images/faisal-mosque2.jpg",
    alt: "Faisal Mosque Islamabad",
  },
  {
    imagePath:
      "http://1.bp.blogspot.com/-Wv01i3Pkh00/UvqJ30Ht-wI/AAAAAAAABOI/ML9fNEiON-8/s1600/Badshahi+Mosque-Lahore.jpg",
    alt: "Badshahi Mosque Lahore",
  },
  {
    imagePath: "/images/bab-e-khyber.jpg",
    alt: "Peshawar",
  },
];

const Operational_Cities = () => {
  return (
    <Box>
      <Container maxW="8xl">
        <Flex
          flexDir={{ base: "column", md: "row" }}
          align={{ base: "center", md: "center" }}
          maxW={"1440px"}
          mx="auto"
          pt={{ base: "5", md: "10" }}
          px={{ base: "10", md: "20" }}
          textAlign={{ base: "center", md: "center" }}
          justifyContent={{ base: "center", md: "flex-end" }}
        >
          <Box as="section" order={{ base: "2", md: "2" }} mr={{ md: "auto" }}>
            <Box
              display={"flex"}
              justifyContent={{ base: "center", md: "flex-start" }}
              mb="4px"
              fontSize={{ base: "20px", md: "large" }}
            >
              <Text
                fontWeight="semibold"
                color="#159957"
                fontFamily="serif"
                fontSize="3xl"
              >
                Operational Cities:
              </Text>
            </Box>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              }}
              gap={6}
              mx="auto"
              maxW="8xl"
              mt="20px"
              ml="20px"
            >
              {operationalCities.map((_img, index) => (
                <Image
                  key={index}
                  src={_img.imagePath}
                  alt={_img.alt}
                  width={250}
                  height={450}
                />
              ))}
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Operational_Cities;
