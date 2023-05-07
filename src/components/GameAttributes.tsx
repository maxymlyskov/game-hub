import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import DefiinitionItem from "./DefiinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefiinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id} marginY={1}>
            {platform.name}
          </Text>
        ))}
      </DefiinitionItem>
      <DefiinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefiinitionItem>
      <DefiinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id} marginY={1}>
            {genre.name}
          </Text>
        ))}
      </DefiinitionItem>
      <DefiinitionItem term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id} marginY={1}>
            {publisher.name}
          </Text>
        ))}
      </DefiinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
