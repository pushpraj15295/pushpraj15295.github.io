import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
// import { Fade } from "react-reveal";
import { useTypewriter } from "react-simple-typewriter";

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
      class="text-center p-4 bg-black footer"
      backgroundColor="rgb(31,53,80)"
      height={isNotSmallerScreen ? "94px" : "115px"}
    >
      <Box bottom duration={1000} distance="40px" margin="auto" textAlign={"center"} >
        {/* <h2 className="text-2xl sm:text-4xl font-bold text-white"> */}
          <Text
            fontSize={isNotSmallerScreen ? "4xl" : "2xl"}
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.600, blue.500, purple.300)"
            bgClip="text"
            padding="20px"
          >
            {text}
          </Text>
        {/* </h2>{" "} */}
      </Box>
    </Box>
  );
}

export default Footer;
