import React from "react";
import { Box, Text, Flex ,SimpleGrid} from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { HiInformationCircle } from "react-icons/hi";
import { useColorMode } from "@chakra-ui/color-mode";
const About = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box width="100%">
      <Box width="80%" margin="auto" alignItems="center" >
        <Flex>
        <Box marginTop="12px">
          <Icon as={HiInformationCircle} boxSize="50" />
          </Box>&nbsp;&nbsp;&nbsp;
         <Box>
         <Text
            fontSize="5xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
            bgClip="text"
          >
            About Me
          </Text>
         </Box> 
          
        </Flex>
        <br /> <br /> 
         <SimpleGrid columns={[1,2]} spacing="7" height="400px">

         <Box border={isDark ? "6px solid white" :"2px solid rgb(46,135,208)"} borderRadius="20" backgroundPosition="center" backgroundSize="cover" backgroundRepeat="no-repeat" backgroundImage="url(https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966)">
  
                  
  </Box>
  {/* overflow="hidden" */}
           <Box className="about"    height="400px"  overflow="scroll"  borderRadius="20" border={ isDark ? "2px solid white": "2px solid rgb(46,135,208)" } boxShadow="rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" >
           <Text
            fontSize="1.5xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
            bgClip="text"
            
            
            padding="10px"
            lineHeight="8"
           
         
          > 
          
   <ul>
    <li>🥇 I am a very passionate web developer.</li>
    <li> 😎 Currently going through the intensive journey of masai school.</li>
    <li>🎯 Have an experience of 1200+ hours of coding and 600+ hours of data sturctures and algorithms.</li>
    <li>🪁 I like collaborating in the projects which includes a team.</li>
    <li>💚 My leisure interests include 🏊‍♂️Swimming and 🚵 cooking. </li>
    <li>✍️ Analytical and detail-oriented. Capable of writing usercentric solutions and production-ready code
using MERN.
</li>
 <li>👍 Intensely interested in obtaining a Software
Developer position to work on enhancing the
product experience.</li>
   </ul>

          </Text>
           </Box>
          
         </SimpleGrid>
      </Box>
    </Box>
  );
};

export default About;
