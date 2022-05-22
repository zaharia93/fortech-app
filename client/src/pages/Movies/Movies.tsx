import { Layout } from "../../components/Layout/layout";
import { useMovies } from "../../hooks/useMovies";
import { IProp } from "../../types/externMovies";
import { MovieCard } from "./MovieCard/MovieCard";

export const Movies = (movie: IProp) => {
  const { isLoading, isError, movies } = useMovies();
  console.log(movies);

  return (
    <Layout>
      <div>{isLoading && <p>Loading.....</p>}</div>
      <div>{isError && <p>Something went wrong....</p>}</div>
      <div className=" grid lg:grid-cols-2  sm:grid-cols-none bg-gradient-to-l from-zinc-800 to-lime-500 ">
        {movies?.map((movie: any) => (
          <div className=" w-full " key={`${movie._id}`}>
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
    </Layout>
  );
};
