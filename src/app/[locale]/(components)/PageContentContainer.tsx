"use client";

import { Container, Flex, Stack } from "@chakra-ui/react";
import { Main } from "@ui/Layout/Main";
import { Sidebar } from "@ui/Layout/Sidebar";

type Props = {
  children: React.ReactNode;
};

export const PageContentContainer = ({ children }: Props) => {
  return (
    <Container py="16" flex="1">
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "12", lg: "16" }}
        flex="1"
      >
        <Main>{children}</Main>
        <Sidebar>Content nav</Sidebar>
      </Stack>
    </Container>
  );
};
