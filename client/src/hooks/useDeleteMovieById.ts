import { useEffect, useState } from "react";
import { IMovie } from "../types/movie";
import { deleteMovieById } from "../services/movieService";

export const useDeleteMovie = (_id?: string) => {

  const [movie, setMovie] = useState<IMovie>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await deleteMovieById();
        setMovie(data.movies);
      } catch (err) {
        console.error(err);
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, [_id]);
  return {
    movie,
    isLoading,
    isError,
  };
};
