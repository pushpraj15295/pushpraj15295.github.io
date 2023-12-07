import { Box, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { FcContacts } from "react-icons/fc";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
//function for form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <>
      <Box width="100%">
        <Flex>
          <Box marginTop="12px">
            <Icon as={FcContacts} boxSize="50" />
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box borderRadius="15px">
            <Text
              fontSize="5xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
              bgClip="text"
            >
              Contact Me
            </Text>
          </Box>
        </Flex>
        <br />
        <br />
      </Box>
      <Box>
        <Box border="1px solid rgb(50,96,140)" borderBottomRadius="15px">
          <div className="pb-8">
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
              padding="10px"
              className="py-6"
              margin="auto"
            >
              Submit the form below to get in touch with me
            </Text>
          </div>

          <div className=" flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              action="https://getform.io/f/c59c9849-0c84-4d14-a8e5-1f51c7f24c12"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="5"
                required
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </Box>
      </Box>
      <br />
      <br />

      <SimpleGrid columns={[1, 2]}>
        <Box>
          <Flex>
            <Icon as={BsFillPhoneFill} boxSize="50" /> &nbsp; &nbsp;
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
              bgClip="text"
            >
              +91 7987494331
            </Text>{" "}
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Icon as={AiTwotoneMail} boxSize="50" /> &nbsp; &nbsp;{" "}
            <Text
              fontSize="xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.700, blue.700, purple.200)"
              bgClip="text"
            >
              {" "}
              pushpraj15295@gmail.com{" "}
            </Text>{" "}
          </Flex>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Contact;
