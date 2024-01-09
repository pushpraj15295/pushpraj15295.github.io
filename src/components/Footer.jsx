import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";

function Footer() {
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
          <Typewriter
            words={["Thank You 🫂 Designed by Pushpraj from India"]}
            loop={50}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
