import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {screenshots?.results.map((screenshot) => (
        <Image src={screenshot.image} key={screenshot.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
