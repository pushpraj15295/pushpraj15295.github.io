import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import resume from "../resume.pdf";
function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    const {text} = useTypewriter({
        words: isDark ? ["MERN Stack Developer"] : [" I'm a Full Stack Developer"],
        loop: 100,
        Cursor:"|",
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
      })

    return (
        <Stack  >
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start" spacing="50px" >
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Pushpraj patel</Text>
                    <Text fontSize="4xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >{text} </Text>
                   
                    <Box>
                    <a href={resume} download={true} target="_blank"><Button mt={8} colorScheme='telegram'  > ✍️ Resume  🧧</Button></a>
                    </Box>

                </Box>
                 <Box marginLeft="80px" >
                  <Box>
                  {
                    isDark ?
                    
                    <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    
                    boxSize="350px" src='https://media-exp1.licdn.com/dms/image/C5603AQEJ64VyNrGYxg/profile-displayphoto-shrink_400_400/0/1646481692476?e=1668038400&v=beta&t=3ZiG1QLNm6qUl0AiViPcdQMZmQACk5Vyt1HL_JSM_zw' />
                    
                    : 
                        <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="350px" src="https://avatars.githubusercontent.com/u/101568029?v=4" />
                    
                }
                  </Box>
                 </Box>
                
            </Flex>

        </Stack>
    )
}

export default Header
