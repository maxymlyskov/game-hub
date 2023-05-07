import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Spinner />;

  const first = trailers?.results[0];

  if (error) throw error;

  return !first ? null : (
    <video src={first.data[480]} poster={first.preview} controls />
  );
};

export default GameTrailer;
