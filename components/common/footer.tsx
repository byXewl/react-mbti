import Link from "next/link";
import { Flex, Text, Button } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      py={2}
      w="100%"
      h="full"
      bg="black"
      color="white"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text>
        look云图 & react{" "}
        <Link
          href="/MBTI-personality-test.pdf"
          target="_blank"
        >
         
        </Link>
      </Text>
    </Flex>
  );
}
