import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text ,SimpleGrid} from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform } from 'react-icons/di'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { Image, Img } from '@chakra-ui/react';
import { SiNetlify } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';


import GitHubCalendar from 'react-github-calendar';

function Project() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
      <>
        
        <Box width="80%" margin="auto">
              <Box width="75%" margin="auto">
              <Flex>
        <Box marginTop="12px">
          <Icon as={AiOutlineFundProjectionScreen} boxSize="50" />
          </Box>&nbsp;&nbsp;&nbsp;
         <Box>
         <Text
            fontSize="5xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
            bgClip="text"
          >
            Projects
          </Text>
         </Box> 
          
        </Flex>
         
              </Box>
              <Box width="100%">


             

              <SimpleGrid columns={[1,2,3]} >

<Box rounded="xl" direction="column" mt={4} bg="blue.400" h="auto" w="auto"  _hover={{ bg: "rgb(33,120,103)", }}>  
            
         <Box w="100%">
         <Flex justifyContent="space-between" w="99%" >
            <Box>
            <a href="https://meanbuy-eosin.vercel.app/" target="_blank"><Icon color="white" p="4" as={SiNetlify} w="20" h="20" /></a>
             <Text marginLeft="17px"> <b>Live</b> </Text>
            </Box>
          
           <Text color="white" p="4" fontSize="26px" fontWeight="semibold">
               MeanBuy Clone
           </Text>
          <Box>
          <a href="https://github.com/pushpraj15295/early-hall-3206/tree/main/meanbuy" target="_blank"> <Icon color="white" p="4" as={FaGithub} w="20" h="20" /></a>
          <Text marginLeft="17px"> <b>Github</b> </Text>
          </Box>
          
          </Flex>
         </Box>
          <Box>
           <Img src="https://raw.githubusercontent.com/pushpraj15295/stopwatch/main/a.png"></Img>
          </Box>
          
          <Box margin="10px" lineHeight="8">
          <Text
fontSize="1.5xl" fontWeight="bold"
>
✪  MeanBuy.com is a website that specializes in
personalized gifts and you can choose the
gift recipient.
<br/>
✪  Tech stack : ReactJs, JavaScript, CSS,Chakra-
Ui and Swiper.
</Text>
          </Box>
       </Box>



       <Box rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
           bg="rgb(176,175,176)" h="auto" w="auto" justify="flex-end" _hover={{ bg: "teal.400", }}>
            
           <Box w="100%">
           <Flex justifyContent="space-between" w="100%" >
               <Box>
            <a href="https://radiant-alpaca-6dcb9c.netlify.app/" target="_blank"><Icon color="white" p="4" as={SiNetlify} w="20" h="20" /></a>
             <Text marginLeft="17px"> <b>Live</b> </Text>
            </Box>
            
           <Text color="black" p="4" fontSize="26px" fontWeight="semibold">
               Bath&Body Work
           </Text>
           <Box>
          <a href="https://github.com/pushpraj15295/U2-project-bathand-body-works" target="_blank"> <Icon color="white" p="4" as={FaGithub} w="20" h="20" /></a>
          <Text marginLeft="17px"> <b>Github</b> </Text>
          </Box>
            </Flex>
           </Box>
            <Box>
           <Img src="https://raw.githubusercontent.com/pushpraj15295/stopwatch/main/b.png"></Img>
          </Box>

          
          <Box margin="10px" lineHeight="8">
          <Text
fontSize="1.5xl" fontWeight="bold" 
>
✪  Deccan Herald is an Indian English-language
daily newspaper that published national and
international news..
<br/>
✪  Tech stack : ReactJs, JavaScript, CSS,Chakra-
Ui.
</Text>
          </Box>
       </Box>




       <Box rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
           bg="rgb(128,123,158)" h="auto" w="auto" justify="flex-end"
           _hover={{ bg: "green.400", }}

       >
         <Box w="100%">
         <Flex justifyContent="space-between" w="100%" >
          <Box>
            <a href="https://hilarious-blini-e94d94.netlify.app/" target="_blank"><Icon color="white" p="4" as={SiNetlify} w="20" h="20" /></a>
             <Text marginLeft="17px"> <b>Live</b> </Text>
            </Box>
          
           <Text color="black" p="4" fontSize="26px" fontWeight="semibold">
           Deccan Herald
           </Text>
           <Box>
          <a href="https://github.com/pushpraj15295/deccan-project4" target="_blank"> <Icon color="white" p="4" as={FaGithub} w="20" h="20" /></a>
          <Text marginLeft="17px"> <b>Github</b> </Text>
          </Box>
           
          </Flex>
         </Box>
          
          <Box>
           <Img src="https://raw.githubusercontent.com/pushpraj15295/stopwatch/main/c.png"></Img>
          </Box>

          
          <Box margin="10px" lineHeight="8">
          <Text
fontSize="1.5xl" fontWeight="bold" 
>
✪  Bath and Body works is a website that
mainly concentrates on healthy and daily-
use products.
<br/>
✪  Tech stack: Html, CSS, JavaScript
</Text>
          </Box>
       </Box>

</SimpleGrid>
              </Box>
            
        </Box>

    <br/> <br/>
      
    
    <Box margin="auto" width="80%">
      <Flex>
      <Box marginTop="12px">
          <Icon as={FaGithub} boxSize="50" />
          </Box>&nbsp;&nbsp;&nbsp;
         <Box>
         <Text
            fontSize="5xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
            bgClip="text"
          >
            Github Calendar
          </Text>
         </Box> 
      </Flex>
    <br/> <br/> 
    <GitHubCalendar username="pushpraj15295" />
    </Box>

        </>
    )
}

export default Project
