import { useRef } from "react";

import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, Box } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";

import About from "./components/About";
import Contect from "./components/Contect";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Social from "./components/Social";
import SocialLinks from "./components/SocialLinks";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const homeref = useRef(null);
  const aboutref = useRef(null);
  const experienceref = useRef(null);
  const skillref = useRef(null);
  const projectref = useRef(null);
  const contectref = useRef(null);

  return (
    <>
      <Navbar
        homeref={homeref}
        aboutref={aboutref}
        experienceref={experienceref}
        skillref={skillref}
        projectref={projectref}
        contectref={contectref}
      />

      <VStack
        p={5}
        width="98%"
        margin="auto"
        ref={homeref}
        // overflow={"hidden"}
      >
        <Flex w="100%" mt="4rem">
          <Spacer></Spacer>
          <a
            href="https://drive.google.com/file/d/1r_G1kPt69vmEP_NF6IW1P4jpQz2NptJH/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton icon={<RiProfileFill />} isRound="true"></IconButton>
          </a>
          &nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/pushpraj-patel-4006ba18a/"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton icon={<FaLinkedin />} isRound="true"></IconButton>
          </a>
          <a
            href="https://github.com/pushpraj15295"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton ml={2} icon={<FaGithub />} isRound="true"></IconButton>
          </a>
          <IconButton
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
        <Box>
          <Header projectref={projectref}></Header>
        </Box>
        <Box ref={aboutref}>
          <About />
        </Box>
        <br /> <br />
        <Box ref={skillref}>
          <Social></Social>
        </Box>
        <br /> <br /> <br />
        <Box ref={projectref}>
          {" "}
          <Project></Project>
        </Box>
        <br /> <br /> <br />
        <Box>
          <githubC />
        </Box>
        <Box ref={contectref}>
          <Contect />
        </Box>
        <br /> <br /> <br />
        <Footer />
        <SocialLinks />
      </VStack>
    </>
  );
}

export default App;
