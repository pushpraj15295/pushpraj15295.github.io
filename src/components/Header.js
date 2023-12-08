import React from "react";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import resume from "../Pushpraj_Patel_Resume.pdf";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useTypewriter } from "react-simple-typewriter";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";

import styles from "./Header.module.css";
function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  const { text } = useTypewriter({
    words: isDark ? ["MERN Stack Developer"] : ["Full Stack Developer"],
    loop: 100,
    Cursor: "|",
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <Stack>
      <Circle
        position="absolute"
        bg={isDark ? "blue.100" : "blue.600"}
        opacity="0.1"
        w={isNotSmallerScreen ? "300px" : "200px"}
        h={isNotSmallerScreen ? "300px" : "200px"}
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        p={isNotSmallerScreen ? "24" : "0"}
        alignSelf="flex-start"
        gap={isNotSmallerScreen ? "50px" : "0px"}
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text
            fontSize={isNotSmallerScreen ? "5xl" : "3xl"}
            fontWeight="semibold"
          >
            Hi, I am
          </Text>
          <Text
            fontSize={isNotSmallerScreen ? "7xl" : "4xl"}
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Pushpraj patel
          </Text>
          <Text
            fontSize={isNotSmallerScreen ? "4xl" : "23px"}
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            height={isNotSmallerScreen ? "50px" : "40px"}
          >
            {text}
          </Text>

          <Box>
            <a href={resume} download={true} target="_blank" rel="noreferrer">
              <Button
                mt={8}
                variant="outline"
                bg={isDark ? "Highlight" : ""}
                bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                color={isDark ? "white" : "black"}
              >
                Download CV
              </Button>
            </a>
          </Box>
        </Box>
        <Box className={styles.ImageBox}>
          <Box>
            <Image
              alignSelf="center"
              mt={isNotSmallerScreen ? "0" : "12"}
              mb={isNotSmallerScreen ? "0" : "12"}
              borderRadius="full"
              backgroundColor="transparent"
              w={isNotSmallerScreen ? "350px" : "250px"}
              h={isNotSmallerScreen ? "350px" : "250px"}
              src="https://avatars.githubusercontent.com/u/101568029?v=4"
            />
          </Box>
        </Box>
      </Flex>

      <Box className={styles.NewImageBox}>
        <Box margin="auto" width="60%">
          {isDark ? (
            <Image
              alignSelf="center"
              mt={isNotSmallerScreen ? "0" : "12"}
              mb={isNotSmallerScreen ? "0" : "12"}
              borderRadius="full"
              backgroundColor="transparent"
              w={isNotSmallerScreen ? "350px" : "250px"}
              h={isNotSmallerScreen ? "350px" : "250px"}
              src="https://avatars.githubusercontent.com/u/101568029?v=4"
            />
          ) : (
            <Image
              alignSelf="center"
              mt={isNotSmallerScreen ? "0" : "12"}
              mb={isNotSmallerScreen ? "0" : "12"}
              borderRadius="full"
              backgroundColor="transparent"
              w={isNotSmallerScreen ? "350px" : "250px"}
              h={isNotSmallerScreen ? "350px" : "250px"}
              src="https://avatars.githubusercontent.com/u/101568029?v=4"
            />
          )}
        </Box>
      </Box>
    </Stack>
  );
}

export default Header;
