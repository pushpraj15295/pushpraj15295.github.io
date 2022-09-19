import React from 'react'
import Icon from '@chakra-ui/icon'
import { SiHtml5, } from 'react-icons/si'
import { Stack, Circle, Flex, Box, Text ,SimpleGrid,Heading} from '@chakra-ui/layout';
import {GoHome} from 'react-icons/go'
import {GiSpellBook, GiSwordsPower, GiTechnoHeart} from 'react-icons/gi'
import { FaProjectDiagram } from 'react-icons/fa'
import { MdContactPhone } from 'react-icons/md'
// import { IconButton } from "@chakra-ui/button";
// backdropFilter="blur(10px)"
import { Button } from "@chakra-ui/button";
import { useColorMode } from '@chakra-ui/color-mode'
import styles from "./Navbar.module.css"
const Navbar = ({homeref,aboutref,skillref,projectref,contectref}) => {
  const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const handleClick=(ref)=>{
       window.scrollTo({top:ref.offsetTop, left:0,behavior:"smooth"})
    }
  return (
    <Box width="100%" position="fixed"  height="60px" backgroundColor={isDark ?"rgb(31,53,80)" :"rgb(237,242,247)" }  >
        <SimpleGrid width="80%" columns={[6]} rows={1} margin="auto" marginTop="10px" className="navbar">
          <Box>
          <Icon as={GiTechnoHeart} boxSize="50" />
         
          </Box>
          <Box>
          <Button onClick={() => handleClick(homeref.current)}> <Heading 
           size="md" fontWeight='semibold' color="cyan.400"> <Flex > <GoHome/> &nbsp; &nbsp; <b className={styles.hideT} >  Home </b></Flex> </Heading></Button>
          </Box>
          <Box>
          <Button onClick={() => handleClick(aboutref.current)}> <Heading
           size="md" fontWeight='semibold' color="cyan.400"><Flex > <GiSpellBook/> &nbsp; &nbsp; <b className={styles.hideT}>About </b></Flex></Heading></Button>
          </Box>
          <Box>
          <Button onClick={() => handleClick(skillref.current)}> <Heading
           size="md" fontWeight='semibold' color="cyan.400"><Flex > <GiSwordsPower/> &nbsp; &nbsp; <b className={styles.hideT}>Skills </b></Flex></Heading></Button>  
          </Box>
         <Box>
         <Button onClick={() => handleClick(projectref.current)}> <Heading
           size="md" fontWeight='semibold' color="cyan.400"><Flex > <FaProjectDiagram/> &nbsp; &nbsp; <b className={styles.hideT} >Projects </b></Flex></Heading></Button>
         </Box>
          <Box>
          <Button onClick={() => handleClick(contectref.current)}> <Heading
          size="md" fontWeight='semibold' color="cyan.400"><Flex > <MdContactPhone/> &nbsp; &nbsp; <b className={styles.hideT}>Contact </b></Flex></Heading></Button>
          </Box>
          
     
        </SimpleGrid>

    </Box>
  )
}

export default Navbar