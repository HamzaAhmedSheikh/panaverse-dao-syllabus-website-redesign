"use client";

import { ChakraProvider } from "@chakra-ui/react";
// import "./globals.css";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider>
          <Navbar2 />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}

