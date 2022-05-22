import { useNavigate, useParams } from "react-router-dom";
import { useMoviesById } from "../../../hooks/useMoviesById";
import { Layout } from "../../../components/Layout/layout";
import { deleteMovieById } from "../../../services/movieService";

export const DetailMovie = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const { isError, isLoading, movie } = useMoviesById(movieId);
  const handleRemoveMovie = async () =>{
      await deleteMovieById(movieId);
  };
  const navigate = useNavigate();
const handleClick2 = () =>{
  console.log('nav', movie);
    navigate(`/movies`)
}

  return (
    <Layout>
      


<div className="hero min-h-screen bg-base-250   bg-gradient-to-l from-zinc-800 to-lime-500  ">
  <div className="hero-content flex-col lg:flex-row">
    <img 
    src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
    alt={`${movie?.title} Poster`} 
    className="max-w-sm rounded-lg shadow-2xl" 
    />
    <div className="ml-10">
      <h1 
      className="text-5xl font-bold  text-indigo-50"
      >{movie?.title}
      </h1>
      <p className="py-9 text-indigo-50">{movie?.overview}</p>
      <p className="py-2 text-indigo-50">Realese: {movie?.release_date}</p>
      <p className="py-2 text-indigo-50">Rating: {movie?.vote_average}</p>
      <button 
            onClick={() => {handleRemoveMovie(); handleClick2();} }
             type="submit"
             className="btn btn-outline text-lime-500 bg-gray-800 border-zinc-900">
              DELETE MOVIE
            </button>
    </div>
  </div>
</div> 

      
    </Layout>
  );
};


