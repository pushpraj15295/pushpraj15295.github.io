import Icon from "@chakra-ui/icon";
import { SimpleGrid, Box, Text, Flex } from "@chakra-ui/layout";
import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";
import ReactTooltip from "react-tooltip";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoBitbucket } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import styles from "./social.module.css";
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
import { useColorMode, useMediaQuery } from "@chakra-ui/react";

const skillsData = [
  {
    id: 1,
    iconName: SiReact,
    titleName: "ReactJS",
  },
  {
    id: 2,
    iconName: TbBrandNextjs,
    titleName: "NextJS",
  },
  {
    id: 3,
    iconName: SiJavascript,
    titleName: "Javascript",
  },
  {
    id: 4,
    iconName: SiCss3,
    titleName: "CSS...",
  },
  {
    id: 5,
    iconName: SiRedux,
    titleName: "Redux & Redux Toolkit",
  },
  {
    id: 6,
    iconName: SiMongodb,
    titleName: "MongoDB",
  },
  {
    id: 7,
    iconName: FaNodeJs,
    titleName: "NodeJS",
  },
  {
    id: 8,
    iconName: SiExpress,
    titleName: "Express",
  },
  {
    id: 9,
    iconName: SiHtml5,
    titleName: "HTML...",
  },
  {
    id: 10,
    iconName: SiChakraui,
    titleName: "Chakra UI",
  },
  {
    id: 11,
    iconName: SiTypescript,
    titleName: "Type Script",
  },
  {
    id: 12,
    iconName: FaGitAlt,
    titleName: "Git...",
  },
  {
    id: 13,
    iconName: IoLogoBitbucket,
    titleName: "Bitbuket",
  },
  {
    id: 15,
    iconName: FaGithubSquare,
    titleName: "Github...",
  },
  {
    id: 16,
    iconName: SiFlutter,
    titleName: "Flutter - currently learning...",
  },
];
const softSkills = [
  {
    id: 1,
    skill: "Teamwork & Adaptability",
  },
  {
    id: 2,
    skill: " Hardwork & Problem solving",
  },
  {
    id: 3,
    skill: "Time & workloads management",
  },
  {
    id: 4,
    skill: "Contributing to the improvement of existing processes",
  },
  {
    id: 5,
    skill: "Taking responsibility for personal and professional growth",
  },
  {
    id: 6,
    skill: "Embracing change and learning new technologies",
  },
];
function Social() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Box width="100%">
      <Box width="80%" margin="auto" alignItems="center">
        <Flex>
          <Box marginTop="12px">
            <Icon as={GiSkills} boxSize={isNotSmallerScreen ? "46" : "10"} />
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
              className={isNotSmallerScreen && styles.tooltip}
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
            <Icon
              as={SiMicrosoftacademic}
              boxSize={isNotSmallerScreen ? "46" : "10"}
            />
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
