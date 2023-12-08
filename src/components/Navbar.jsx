import React from "react";
import Icon from "@chakra-ui/icon";
import { FaCode } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { Button } from "@chakra-ui/button";
import { GiHistogram } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import resume from "../Pushpraj_Patel_Resume.pdf";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Box, Heading } from "@chakra-ui/layout";
import { GiSpellBook, GiSwordsPower} from "react-icons/gi";
import { useMediaQuery } from "@chakra-ui/react";


const Navbar = ({
  homeref,
  aboutref,
  experienceref,
  skillref,
  projectref,
  contectref,
}) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const handleClick = (ref) => {
    window.scrollTo({ top: ref?.offsetTop, left: 0, behavior: "smooth" });
  };
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  const NavData = [
    {
      id: 1,
      iconName: GiSpellBook,
      name: "About",
      reference: aboutref,
    },
    {
      id: 2,
      iconName: GiHistogram,
      name: "Experience",
      reference: experienceref,
    },
    {
      id: 3,
      iconName: GiSwordsPower,
      name: "Skills",
      reference: skillref,
    },
    {
      id: 4,
      iconName: FaProjectDiagram,
      name: "Projects",
      reference: projectref,
    },
    {
      id: 5,
      iconName: MdContactPhone,
      name: "Contact",
      reference: contectref,
    },
  ];

  return (
    <Flex
      width="100%"
      position="fixed"
      height="70px"
      backgroundColor={isDark ? "rgb(31,53,80)" : "rgb(237,242,247)"}
      zIndex={"1"}
      alignItems="center"
      justifyContent="space-around"
    >
      <Box cursor="pointer" onClick={() => handleClick(homeref.current)}>
        <Icon as={FaCode} boxSize={isNotSmallerScreen ? "50" : "10"} />
      </Box>
      <Flex width={isNotSmallerScreen ? "65%" : "85%"}
       alignItems="center" justifyContent="space-between">
        {NavData?.map((el) => (
          <Box key={el?.id}>
            <Button
              onClick={() => handleClick(el.reference.current)}
              variant={isDark ? "none" : "ghost"}
            >
              <Heading size="md" fontWeight="semibold" color="cyan.400">
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  gap="1rem"
                >
                  {/* <MdContactPhone /> */}
                  {el?.iconName()}
                  <b className={styles.hideT}>{el?.name}</b>
                </Flex>
              </Heading>
            </Button>
          </Box>
        ))}

        {/* <Box>
          <a
            href="https://drive.google.com/file/d/1r_G1kPt69vmEP_NF6IW1P4jpQz2NptJH/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
          <a href={resume} download={true} target="_blank" rel="noreferrer">
            <Button variant={isDark ? "none" : "ghost"}>
              <Heading size="md" fontWeight="semibold" color="cyan.400">
                <Flex>
                  <GrResume /> &nbsp; &nbsp;{" "}
                  <b className={styles.hideT}>Resume </b>
                </Flex>
              </Heading>
            </Button>
          </a>
        </Box> */}
      </Flex>
    </Flex>
  );
};

export default Navbar;
