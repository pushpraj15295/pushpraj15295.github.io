import React from "react";
import Icon from "@chakra-ui/icon";
// import { SiHtml5, } from 'react-icons/si'
import { Flex, Box, SimpleGrid, Heading } from "@chakra-ui/layout";
// import {GoHome} from 'react-icons/go'
import { GiSpellBook, GiSwordsPower, GiTechnoHeart } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
// import { IconButton } from "@chakra-ui/button";
// backdropFilter="blur(10px)"
import resume from "../Pushpraj_Patel_Resume.pdf";

import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import styles from "./Navbar.module.css";
import { GrResume } from "react-icons/gr";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
const Navbar = ({ homeref, aboutref, skillref, projectref, contectref }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const handleClick = (ref) => {
    window.scrollTo({ top: ref.offsetTop, left: 0, behavior: "smooth" });
  };
  return (
    <Box
      width="100%"
      position="fixed"
      height="60px"
      backgroundColor={isDark ? "rgb(31,53,80)" : "rgb(237,242,247)"}
    >
      <SimpleGrid
        width="80%"
        columns={[6]}
        rows={1}
        margin="auto"
        marginTop="10px"
        className="navbar"
      >
        <Box onClick={() => handleClick(homeref.current)}>
          <Icon as={GiTechnoHeart} boxSize="50" />
        </Box>
        <Box>
          <Button onClick={() => handleClick(aboutref.current)}>
            {" "}
            <Heading size="md" fontWeight="semibold" color="cyan.400">
              <Flex>
                {" "}
                <GiSpellBook /> &nbsp; &nbsp;{" "}
                <b className={styles.hideT}>About </b>
              </Flex>
            </Heading>
          </Button>
        </Box>
        <Box>
          <Button onClick={() => handleClick(skillref.current)}>
            {" "}
            <Heading size="md" fontWeight="semibold" color="cyan.400">
              <Flex>
                {" "}
                <GiSwordsPower /> &nbsp; &nbsp;{" "}
                <b className={styles.hideT}>Skills </b>
              </Flex>
            </Heading>
          </Button>
        </Box>
        <Box>
          <Button onClick={() => handleClick(projectref.current)}>
            {" "}
            <Heading size="md" fontWeight="semibold" color="cyan.400">
              <Flex>
                {" "}
                <FaProjectDiagram /> &nbsp; &nbsp;{" "}
                <b className={styles.hideT}>Projects </b>
              </Flex>
            </Heading>
          </Button>
        </Box>
        <Box>
          <Button onClick={() => handleClick(contectref.current)}>
            {" "}
            <Heading size="md" fontWeight="semibold" color="cyan.400">
              <Flex>
                {" "}
                <MdContactPhone /> &nbsp; &nbsp;{" "}
                <b className={styles.hideT}>Contact </b>
              </Flex>
            </Heading>
          </Button>
        </Box>
        <Flex alignItems="center" justifyContent="space-around" >
          
             <Box>
             <a href="https://drive.google.com/file/d/1r_G1kPt69vmEP_NF6IW1P4jpQz2NptJH/view?usp=share_link" target="_blank" rel="noreferrer">
             <Button>
              {" "}
              <Heading size="md" fontWeight="semibold" color="cyan.400">
                <Flex>
                  {" "}
                  <GrResume /> &nbsp; &nbsp;{" "}
                  <b className={styles.hideT}>Resume </b>
                </Flex>
              </Heading>
            </Button>
             </a>
             </Box>
             <Box className={styles.hideT} >
             <a href={resume} download={true} target="_blank" rel="noreferrer">
             <BsFillArrowDownCircleFill size={30} />
             </a>
             </Box>
             
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Navbar;
