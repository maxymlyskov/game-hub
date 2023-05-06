import React from "react";
import NavBar from "../components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exists!"
            : "An unexpected error occured!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
