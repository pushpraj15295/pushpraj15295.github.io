import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, Box } from "@chakra-ui/layout";
import { useRef } from "react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
// import { GrResume } from "react-icons/gr";
import About from "./components/About";
import Contect from "./components/Contect";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Social from "./components/Social";
import SocialLinks from "./components/SocialLinks";

// import resume from "./Pushpraj_Patel_Resume.pdf";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const homeref = useRef(null);
  const aboutref = useRef(null);
  const skillref = useRef(null);
  const projectref = useRef(null);
  const contectref = useRef(null);

  return (
    <>
      <Navbar
        homeref={homeref}
        aboutref={aboutref}
        skillref={skillref}
        projectref={projectref}
        contectref={contectref}
      />
      <br />
      <br />
      <VStack p={5} width="100%" margin="auto">
        <Flex w="100%">
          <Heading
            ml="8"
            size="xl"
            fontWeight="semibold"
            color="cyan.400"
            border={
              isDark ? "5px solid rgb(58,121,204)" : "5px solid rgb(31,53,80)"
            }
            borderRadius="50%"
            padding="10px"
            alignItems="center"
            backgroundColor="rgb(237,242,247)"
          >
            <b>
              <i>₱p</i>
            </b>
          </Heading>

          <Spacer></Spacer>
          <a
            href="https://www.linkedin.com/in/pushpraj-patel-4006ba18a/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <IconButton icon={<FaLinkedin />} isRound="true"></IconButton>
          </a>
          {/* <a href={resume} download={true} target="_blank" rel="noreferrer">
          <IconButton ml={2} icon={<GrResume />} isRound="true"></IconButton>
        </a> */}
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
        <Box ref={homeref}>
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
          {" "}
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
