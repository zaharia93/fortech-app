
import { Layout } from '../../components/Layout/layout';
import { useMovies } from "../../hooks/useMovies"
import { IProp } from '../../types/externMovies';
import { MovieCard } from './MovieCard/MovieCard';

export const Movies = (movie:IProp) => {
  const { isLoading, isError, movies } = useMovies()
  console.log(movies);
  // const moviesAr = Array(movies);
  // console.log({moviesAr})
  
  return (
    <Layout>
      
      <div>{isLoading && <p>Loading.....</p>}</div>
      <div>{isError && <p>Something went wrong....</p>}</div>
      <div>
        {movies?.map(( movie: any) => (
                  <ol key={`${movie._id}`}>
                    <MovieCard {...movie} />
                  </ol>
        ))}
      </div>
    </Layout>
  )
}
