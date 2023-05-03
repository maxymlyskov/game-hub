import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner marginLeft="10px" />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px" marginLeft="-20px">
          <HStack>
            <Image
              src={genre.image_background}
              boxSize="32px"
              borderRadius={8}
            />
            <Button onClick={() => onSelectedGenre(genre)} variant="link">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
