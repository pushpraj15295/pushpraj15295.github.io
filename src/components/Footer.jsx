import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
// import { Fade } from "react-reveal";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Footer() {
  const {text} = useTypewriter({
    words: ["Thank You So Much 🫂"],
    loop: 100,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  })

    return(
      <Box width="100%" margin="auto" class="text-center p-4 bg-black footer" backgroundColor="rgb(31,53,80)" >
      
       <Box bottom duration={1000} distance="40px" margin="auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">
        <Text
            fontSize="4xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.600, blue.500, purple.300)"
            bgClip="text"
            padding="20px"
          >
                {text}
          </Text>
        
     
         </h2> </Box>
      
      </Box>
    )
}

export default Footer