import React from "react";
import styles from "./social.module.css";
import { GiSkills } from "react-icons/gi";
import { skillsData, softSkills } from "../utils";
import { SiMicrosoftacademic } from "react-icons/si";
import { useColorMode, useMediaQuery } from "@chakra-ui/react";
import { SimpleGrid, Box, Text, Flex } from "@chakra-ui/layout";

function Social() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Box>
      <Box width="80%" margin="auto" alignItems="center">
        <Flex>
          <Box marginTop="12px">
            <GiSkills size={isNotSmallerScreen ? "46" : "10"} />
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box>
            <Text
              fontSize={isNotSmallerScreen ? "5xl" : "3xl"}
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
        <SimpleGrid spacing="55" columns={[2, 2, 3, 4, 5]}>
          {skillsData?.map((el) => (
            <Box
              boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
              padding="35px"
              margin="auto"
              position="relative"
              borderRadius="50%"
              cursor="pointer"
              bgGradient="linear(to-r, cyan.200, blue.300, purple.400)"
              key={el.id}
              titl={el.titleName ? el.titleName : ""}
              className={isNotSmallerScreen ? styles.tooltip : ""}
            >
              <div
                style={{
                  fontSize: "40px",
                  color: isDark ? "white" : "grey.400",
                }}
              >
                {el?.iconName()}
              </div>
            </Box>
          ))}
        </SimpleGrid>
        <br /> <br /> <br />
        <Flex>
          <Box marginTop="12px">
            <SiMicrosoftacademic size={isNotSmallerScreen ? "46" : "10"} />
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box>
            <Text
              fontSize={isNotSmallerScreen ? "5xl" : "3xl"}
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
        <SimpleGrid columns={[1, 2, 2, 3]} spacing="18">
          {softSkills.map((el) => (
            <Box
              key={el.id}
              textAlign="center"
              boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
              padding="30px"
              margin="auto"
              borderRadius={isNotSmallerScreen ? "40px" : "30px"}
              bgGradient="linear(to-r, cyan.200, blue.300, purple.400)"
              height={isNotSmallerScreen ? "150px" : "120px"}
              width={isNotSmallerScreen ? "350px" : "250px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              overflow={"hidden"}
            >
              <Text
                fontSize={isNotSmallerScreen ? "20px" : "1xl"}
                fontWeight="bold"
                color={!isDark ? "whiteAlpha.900" : "blackAlpha.700"}
                paddingRight={isNotSmallerScreen && "20%"}
              >
                {el.skill}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Social;
