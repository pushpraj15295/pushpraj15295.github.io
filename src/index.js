import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

const Layout = () => {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
};

const Container = document.getElementById("root");
const root = createRoot(Container);
root.render(<Layout />);
