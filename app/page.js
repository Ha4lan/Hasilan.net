import Hero from "@/components/Hero";
import Image from "next/image";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home({Component, pageProps}) {
  return (
    <ChakraProvider>
      <Hero />
    </ChakraProvider>
  );
}
