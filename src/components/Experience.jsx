import React from "react";
import { FcWorkflow } from "react-icons/fc";
import { useMediaQuery } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Text, Flex, SimpleGrid } from "@chakra-ui/layout";

const Experience = () => {
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
            <FcWorkflow size={isNotSmallerScreen ? "60px" : "30px"} />
          </Box>
          &nbsp;&nbsp;
          <Box>
            <Text
              fontSize={isNotSmallerScreen ? "6xl" : "3xl"}
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
              bgClip="text"
            >
              Professional Experience
            </Text>
          </Box>
        </Flex>

        <SimpleGrid
          columns={[1, 2, 2]}
          spacing={isNotSmallerScreen ? "10" : "4"}
          height={isNotSmallerScreen ? "400px" : ""}
          mt={isNotSmallerScreen ? "1rem" : "0rem"}
          direction={["column-reverse", "row", "row"]}
        >
          <Box className="about" height="-webkit-fit-content" borderRadius="20">
            <Box>
              <Text
                fontSize={isNotSmallerScreen ? "26px" : "18px"}
                color={isDark ? "whiteAlpha.800" : "blackAlpha.800"}
                fontWeight="bold"
                marginTop="20px"
                lineHeight={isNotSmallerScreen ? "8" : "6"}
              >
                👨‍💻 Frontend Developer
                <br />
              </Text>
              <Text
                color={isDark ? "whiteAlpha.800" : "blackAlpha.800"}
                fontSize={isNotSmallerScreen ? "18px" : "14px"}
                marginTop="20px"
                lineHeight={isNotSmallerScreen ? "8" : "6"}
              >
                🏬 Honeysys IT Service Pvt Ltd, Banglore, India
                <br />
                <i>📅 jan/2023 - present</i>
              </Text>

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
                ▣ created a dynamic and user-friendly website builder platforms
                and implemented a comprehensive solution for users to
                effortlessly create and customize their websites.
                <br />
                ▣ Collaborated on numerous projects like e-commerce solutions .
                <br />▣ These project not only showcases my technical
                proficiency in web development but also demonstrates my
                commitment to creating innovative solutions that empower users
                to bring their ideas to life on the web.
              </Text>
            </Box>
          </Box>

          <Box
            height={isNotSmallerScreen ? "" : "200px"}
            borderRadius="20"
            backgroundPosition="bottom"
            backgroundSize="contain"
            backgroundRepeat="space"
            backgroundImage={`url(${
              isDark
                ? "https://www.mrisoftware.com/hk/wp-content/uploads/2022/10/Agora_Put-your-data-to-work-for-your-business-1338x1080.png"
                : "https://smarterp.ro/wp-content/uploads/2019/01/slider-image.png"
            })`}
          ></Box>
        </SimpleGrid>

        <br />
        <br />
        <SimpleGrid
          columns={[1, 2, 2]}
          spacing={isNotSmallerScreen ? "10" : "4"}
          height={isNotSmallerScreen ? "400px" : ""}
          mt={isNotSmallerScreen ? "1rem" : "0rem"}
          direction={["column-reverse", "row", "row"]}
        >
          <Box className="about" height="-webkit-fit-content" borderRadius="20">
            <Box>
              <Text
                fontSize={isNotSmallerScreen ? "26px" : "18px"}
                color={isDark ? "whiteAlpha.800" : "blackAlpha.800"}
                fontWeight="bold"
                marginTop="20px"
                lineHeight={isNotSmallerScreen ? "8" : "6"}
              >
                👨‍💻 Frontend Developer
                <br />
              </Text>
              <Text
                color={isDark ? "whiteAlpha.800" : "blackAlpha.800"}
                fontSize={isNotSmallerScreen ? "18px" : "14px"}
                marginTop="20px"
                lineHeight={isNotSmallerScreen ? "8" : "6"}
              >
                🏬 Crazliv Games Private Limited, Noida, India
                <br />
                <i>📅 Oct/2020 - Dec-2022</i>
              </Text>

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
                ▣ Utilized CSS preprocessors such as SASS to streamline
                stylessheet management and facilitate code reusability,
                resulting in more efficient development workflows.
                <br />
                ▣ Leant team Collaborated on live enviroment .
                <br />▣ These project not only showcases my technical
                proficiency in web development but also demonstrates my
                commitment to creating innovative solutions that empower users
                to bring their ideas to life on the web.
              </Text>
            </Box>
          </Box>

          <Box
            height={isNotSmallerScreen ? "" : "200px"}
            borderRadius="20"
            backgroundPosition="bottom"
            backgroundSize="contain"
            backgroundRepeat="space"
            backgroundImage={`url(${
              isDark
                ? "https://smarterp.ro/wp-content/uploads/2019/01/slider-image.png"
                : "https://www.mrisoftware.com/hk/wp-content/uploads/2022/10/Agora_Put-your-data-to-work-for-your-business-1338x1080.png"
            })`}
          ></Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Experience;
