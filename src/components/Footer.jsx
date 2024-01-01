import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";

function Footer() {
  const { text } = useTypewriter({
    words: ["Thank You 🫂 Designed by Pushpraj from India"],
    loop: 100,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Box
      width="100%"
      margin="auto"
      className="text-center p-4 bg-black footer"
      backgroundColor="rgb(31,53,80)"
      height={isNotSmallerScreen ? "120px" : "150px"}
    >
      <Box
        bottom
        duration={1000}
        distance="40px"
        margin="auto"
        textAlign={"center"}
      >
        <Text
          bgClip="text"
          padding="20px"
          fontWeight="bold"
          fontSize={isNotSmallerScreen ? "4xl" : "2xl"}
          bgGradient="linear(to-r, cyan.600, blue.500, purple.300)"
        >
          {text}
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
