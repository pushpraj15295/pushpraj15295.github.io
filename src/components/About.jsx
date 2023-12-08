import React from "react";
import Icon from "@chakra-ui/icon";
import { useMediaQuery } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { HiInformationCircle } from "react-icons/hi";
import { Box, Text, Flex, SimpleGrid } from "@chakra-ui/layout";

const About = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Box width="100%">
      <Box
        width={isNotSmallerScreen ? "85%" : "100%"}
        margin="auto"
        alignItems="center"
      >
        <Flex>
          <Box marginTop={isNotSmallerScreen ? "18px" : "10px"}>
            <Icon
              as={HiInformationCircle}
              boxSize={isNotSmallerScreen ? "60px" : "30px"}
            />
          </Box>
          &nbsp;&nbsp;
          <Box>
            <Text
              fontSize={isNotSmallerScreen ? "6xl" : "3xl"}
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
              bgClip="text"
            >
              About Me
            </Text>
          </Box>
        </Flex>

        <SimpleGrid
          columns={[1, 1, 2]}
          spacing={isNotSmallerScreen ? "10" : "4"}
          height={isNotSmallerScreen ? "400px" : ""}
          mt={isNotSmallerScreen ? "1rem" : "0rem"}
        >
          <Box
            height={isNotSmallerScreen ? "" : "200px"}
            borderRadius="20"
            backgroundPosition="bottom"
            backgroundSize="contain"
            backgroundRepeat="space"
            backgroundImage={`url(${
              !isDark
                ? "https://searchspring.com/wp-content/uploads/2020/12/Get-support-from-before-day-one@2x.png"
                : "https://searchspring.com/wp-content/uploads/2020/12/Brand@2x.png"
            })`}
          ></Box>

          <Box className="about" height="-webkit-fit-content" borderRadius="20">
            <Box>
              <Text
                fontSize={isNotSmallerScreen ? "18px" : "14px"}
                bgGradient={`linear(to-r, ${
                  isDark
                    ? "gray.200, blue.400, purple.100"
                    : "blue.200, gray.400, gray.700"
                })`}
                bgClip="text"
                marginTop="20px"
                lineHeight={isNotSmallerScreen ? "8" : "6"}
              >
                ▣ Hello, I'm Pushpraj, a results-driven full-stack developer
                with a year of hands-on experiencea React.js with solid
                understanding of business needs.
                <br />
                ▣ While React.js is my forte, I also navigate Next.js and
                TypeScript effectively. With a unique blend of technical finesse
                and business acumen.
                <br />
                ▣ My expertise lies in creating responsive user interfaces that
                look awesome and work smoothly..
                <br />▣ With a year of experience under my belt, I bring
                innovation, efficiency, and a keen eye for detail to every
                project. Ready to contribute my skills to your team and take
                projects to the next level.
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default About;
