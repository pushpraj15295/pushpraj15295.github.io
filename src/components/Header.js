import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import resume from "../Pushpraj_Patel_Resume.pdf";

import styles from "./Header.module.css";
function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  const { text } = useTypewriter({
    words: isDark ? ["MERN Stack Developer"] : [" I'm a Full Stack Developer"],
    loop: 100,
    Cursor: "|",
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
        spacing="50px"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Pushpraj patel
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            {text}{" "}
          </Text>

          <Box>
            <a href={resume} download={true} target="_blank" rel="noreferrer">
              <Button mt={8} colorScheme="telegram">
                {" "}
                Resume 📩
              </Button>
            </a>
          </Box>
        </Box>
        <Box className={styles.ImageBox}>
          <Box>
            {isDark ? (
              <Image
                alignSelf="center"
                mt={isNotSmallerScreen ? "0" : "12"}
                mb={isNotSmallerScreen ? "0" : "12"}
                borderRadius="full"
                backgroundColor="transparent"
                boxShadow="lg"
                width="-webkit-fit-content"
                boxSize="350px"
                src="https://avatars.githubusercontent.com/u/101568029?v=4"
              />
            ) : (
              <Image
                alignSelf="center"
                mt={isNotSmallerScreen ? "0" : "12"}
                mb={isNotSmallerScreen ? "0" : "12"}
                borderRadius="full"
                backgroundColor="transparent"
                boxShadow="lg"
                boxSize="350px"
                src="https://avatars.githubusercontent.com/u/101568029?v=4"
              />
            )}
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
              boxShadow="lg"
              width="-webkit-fit-content"
              boxSize="350px"
              src="https://avatars.githubusercontent.com/u/101568029?v=4"
            />
          ) : (
            <Image
              alignSelf="center"
              mt={isNotSmallerScreen ? "0" : "12"}
              mb={isNotSmallerScreen ? "0" : "12"}
              borderRadius="full"
              backgroundColor="transparent"
              boxShadow="lg"
              boxSize="350px"
              src="https://avatars.githubusercontent.com/u/101568029?v=4"
            />
          )}
        </Box>
      </Box>
    </Stack>
  );
}

export default Header;
