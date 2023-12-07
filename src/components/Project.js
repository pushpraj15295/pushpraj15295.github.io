import React from "react";
import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Button, Img } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

import { FaNodeJs } from "react-icons/fa";
import {
  SiChakraui,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiReact,
} from "react-icons/si";

import GitHubCalendar from "react-github-calendar";

import styles from "./project.module.css";

function Project() {
  return (
    <>
      <Box width="80%" margin="auto">
        <Flex>
          <Box marginTop="12px">
            <Icon as={AiOutlineFundProjectionScreen} boxSize="50" />
          </Box>
          &nbsp;&nbsp;&nbsp;
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
        <br /> <br />
        <Box w="100%">
          <Flex
            className={styles.projectBox}
            bg="blue.700"
            _hover={{ bg: "teal.600" }}
            w="99%"
            margin="auto"
            border="1px solid black"
            borderRadius="16px"
          >
            <Box className={styles.projectBoxLeft}>
              <Box
                margin="15px"
                border="5px solid rgb(237,242,247)"
                borderRadius="6px"
              >
                <Img src="https://raw.githubusercontent.com/Surya9263/hideous-crack-5602/main/Website%20sneak%20peeks/Homepage.png"></Img>
              </Box>
            </Box>
            <Box className={styles.projectBoxRight}>
              <Text
                color="white"
                p="4"
                fontSize="35px"
                fontWeight="semibold"
                textAlign="center"
              >
                MyHours Clone
              </Text>
              <br />
              <Text fontSize="20px" p="4" textAlign="center">
                My Hours is an easy way to track billable hours across various
                projects. makes time tracking for different tasks simple and
                reports your work.
              </Text>

              {/* ReactJs, JavaScript, CSS,Chakra-Ui and Swiper. */}
              <Flex
                margin="20px"
                marginBottom="30px"
                justifyContent="space-evenly"
              >
                <Icon as={SiHtml5} boxSize="25" />
                <Icon as={SiCss3} boxSize="25" />
                <Icon as={SiJavascript} boxSize="25" />
                <Icon as={SiChakraui} boxSize="25" />
                <Icon as={SiReact} boxSize="25" />
                <Icon as={SiMongodb} boxSize="25" />
                <Icon as={SiExpress} boxSize="25" />
                <Icon as={FaNodeJs} boxSize="25" />
              </Flex>

              <Flex
                margin="20px"
                marginBottom="15px"
                justifyContent="space-evenly"
              >
                <a
                  href="https://myhours-clone-jade.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button colorScheme="gray">Go Live ♂️</Button>
                </a>

                <a
                  href="https://github.com/Surya9263/hideous-crack-5602"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Button colorScheme="gray">Code Base</Button>
                </a>
              </Flex>
            </Box>
          </Flex>
          <br />

          <Flex
            className={styles.projectBox}
            bg="blue.700"
            _hover={{ bg: "rgb(33,120,103)" }}
            w="99%"
            margin="auto"
            border="1px solid black"
            borderRadius="16px"
          >
            <Box className={styles.projectBoxLeft}>
              <Box
                margin="15px"
                border="5px solid rgb(237,242,247)"
                borderRadius="6px"
              >
                <Img src="https://raw.githubusercontent.com/pushpraj15295/stopwatch/main/a.png"></Img>
              </Box>
            </Box>
            <Box className={styles.projectBoxRight}>
              <Text
                color="white"
                p="4"
                fontSize="35px"
                fontWeight="semibold"
                textAlign="center"
              >
                MeanBuy Clone
              </Text>
              <br />
              <Text fontSize="20px" p="4" textAlign="center">
                MeanBuy is an e-commerce website. where users purchase clothing.
                Items for home decoration, beauty, and gift giving it is an
                individual thing. The project was finished and executed in five
                days.
              </Text>

              {/* ReactJs, JavaScript, CSS,Chakra-Ui and Swiper. */}
              <Flex
                margin="20px"
                marginBottom="30px"
                justifyContent="space-evenly"
              >
                <Icon as={SiHtml5} boxSize="25" />
                <Icon as={SiCss3} boxSize="25" />
                <Icon as={SiJavascript} boxSize="25" />
                <Icon as={SiChakraui} boxSize="25" />
                <Icon as={SiReact} boxSize="25" />
              </Flex>

              <Flex
                margin="20px"
                marginBottom="15px"
                justifyContent="space-evenly"
              >
                <a
                  href="https://meanbuy-eosin.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button colorScheme="gray">Go Live ♂️</Button>
                </a>

                <a
                  href="https://github.com/pushpraj15295/early-hall-3206/tree/main/meanbuy"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Button colorScheme="gray">Code Base</Button>
                </a>
              </Flex>
            </Box>
          </Flex>
          <br />

          <Flex
            className={styles.projectBox}
            bg="blue.700"
            _hover={{ bg: "teal.600" }}
            w="99%"
            margin="auto"
            border="1px solid black"
            borderRadius="16px"
          >
            <Box className={styles.projectBoxLeft}>
              <Box
                margin="15px"
                border="5px solid rgb(237,242,247)"
                borderRadius="6px"
              >
                <Img src="https://raw.githubusercontent.com/pushpraj15295/stopwatch/main/b.png"></Img>
              </Box>
            </Box>
            <Box className={styles.projectBoxRight}>
              <Text
                color="white"
                p="4"
                fontSize="35px"
                fontWeight="semibold"
                textAlign="center"
              >
                Bath&Body Work Clone
              </Text>
              <br />
              <Text fontSize="20px" p="4" textAlign="center">
                Bath and Body Work is an e-commerce website. Bath and Body Works
                is a website that mainly concentrates on healthy and daily-use
                products.
              </Text>

              {/* ReactJs, JavaScript, CSS,Chakra-Ui and Swiper. */}
              <Flex
                margin="20px"
                marginBottom="30px"
                justifyContent="space-evenly"
              >
                <Icon as={SiHtml5} boxSize="25" />
                <Icon as={SiCss3} boxSize="25" />
                <Icon as={SiJavascript} boxSize="25" />
              </Flex>

              <Flex
                margin="20px"
                marginBottom="15px"
                justifyContent="space-evenly"
              >
                <a
                  href="https://bath-body-works-com-clone.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button colorScheme="gray">Go Live ♂️</Button>
                </a>

                <a
                  href="https://github.com/pushpraj15295/U2-project-bathand-body-works"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Button colorScheme="gray">Code Base</Button>
                </a>
              </Flex>
            </Box>
          </Flex>
          <br />
        </Box>
      </Box>
      <br /> <br />
      <Box width="80%" margin="auto">
        <Flex>
          <Box marginTop="12px">
            <Icon as={FaGithub} boxSize="50" />
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box>
            <Text
              fontSize="5xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
              bgClip="text"
            >
              Github Calendar & Stats
            </Text>
          </Box>
        </Flex>
        <br /> <br />
        <Box>
          <SimpleGrid columns={[1, 1, 2, 2, 3]} gap="7px">
            <img
              src="https://github-readme-stats.vercel.app/api?username=pushpraj15295&show_icons=true&theme=cobalt"
              alt="pushpraj15295"
              width="350px"
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=pushpraj15295&show_icons=true&theme=tokyonight"
              alt="pushpraj15295"
              width="350px"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=pushpraj15295&show_icons=true&locale=en&layout=compact&theme=cobalt"
              alt="pushpraj15295"
              width="350px"
            />
          </SimpleGrid>
          <br /> <br />
          <Box width="100%" margin="auto" display="flex" placeContent="center">
            <GitHubCalendar username="pushpraj15295" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Project;
