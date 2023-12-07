import Icon from "@chakra-ui/icon";
import { SimpleGrid, Box, Text, Flex } from "@chakra-ui/layout";
import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiChakraui,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiReact,
  SiMicrosoftacademic,
  SiRedux,
} from "react-icons/si";
function Social() {
  return (
    <Box width="100%">
      <Box width="80%" margin="auto" alignItems="center">
        <Flex>
          <Box marginTop="12px">
            <Icon as={GrTechnology} boxSize="50" />
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box>
            <Text
              fontSize="5xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
              bgClip="text"
            >
              Tech Skills
            </Text>
          </Box>
          <br /> <br />
        </Flex>
        <br />
        <br />
        <SimpleGrid spacing="55" columns={[1, 2, 3, 4, 5]}>
          <Box
            boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            padding="40px"
            margin="auto"
            borderRadius="50%"
          >
            <Icon as={SiHtml5} boxSize="50" />
          </Box>

          <Box
            boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            padding="40px"
            margin="auto"
            borderRadius="50%"
          >
            <Icon as={SiCss3} boxSize="50" />
          </Box>

          <Box
            boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            padding="40px"
            margin="auto"
            borderRadius="50%"
          >
            <Icon as={SiJavascript} boxSize="50" />
          </Box>

          <Box
            boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            padding="40px"
            margin="auto"
            borderRadius="50%"
          >
            {" "}
            <Icon as={SiChakraui} boxSize="50" />
          </Box>

          <Box
            boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            padding="40px"
            margin="auto"
            borderRadius="50%"
          >
            <Icon as={SiMongodb} boxSize="50" />
          </Box>

          <Box
            boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            padding="40px"
            margin="auto"
            borderRadius="50%"
          >
            {" "}
            <Icon as={SiExpress} boxSize="50" />
          </Box>

          <Box
            boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            padding="40px"
            margin="auto"
            borderRadius="50%"
          >
            <Icon as={SiReact} boxSize="50" />
          </Box>

          <Box
            boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            padding="40px"
            margin="auto"
            borderRadius="50%"
          >
            <Icon as={FaNodeJs} boxSize="50" />
          </Box>

          <Box
            boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            padding="40px"
            margin="auto"
            borderRadius="50%"
          >
            <Icon as={SiRedux} boxSize="50" />
          </Box>

          <Box
            boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            padding="40px"
            margin="auto"
            borderRadius="50%"
          >
            <Icon as={TbBrandNextjs} boxSize="50" />
          </Box>
        </SimpleGrid>
        <br /> <br /> <br />
        <Flex>
          <Box marginTop="12px">
            <Icon as={SiMicrosoftacademic} boxSize="50" />
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box>
            <Text
              fontSize="5xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
              bgClip="text"
            >
              Soft Skills
            </Text>
          </Box>
          <br /> <br />{" "}
        </Flex>
        <br /> <br />
        <SimpleGrid columns={[1, 2, 2, 3]} spacing="20">
          <Box
            textAlign="center"
            boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            padding="40px"
            margin="auto"
            borderRadius="20%"
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
              bgClip="text"
            >
              Teamwork & Adaptability
            </Text>
          </Box>

          <Box
            textAlign="center"
            boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            padding="40px"
            margin="auto"
            borderRadius="20%"
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
              bgClip="text"
            >
              Time management .
            </Text>
          </Box>

          <Box
            textAlign="center"
            boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            padding="40px"
            margin="auto"
            borderRadius="20%"
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
              bgClip="text"
            >
              Hardwork & Problem solving
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Social;
