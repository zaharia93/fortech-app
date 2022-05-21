import { useNavigate, useParams } from "react-router-dom";
import { useMoviesById } from "../../hooks/useMoviesById";
import { Layout } from "../../components/Layout/layout";
import { deleteMovieById } from "../../services/movieService";

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
        
      <div className="card card-side bg-base-300 shadow-xl m-10  w-10/12  ">
        <figure className="">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
            alt={`${movie?.title} Poster`}
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-4xl  ">{movie?.title}</h2>
          <p className="text-xl mt-10">Release: {movie?.release_date}</p>
          <p>{movie?.overview}</p>
          <p className="text-xl">IMDb Rating: {movie?.vote_average}</p>
          <div className="card-actions justify-end">
            <button 
            onClick={() => {handleRemoveMovie(); handleClick2();} }
             type="submit"
             className="btn bg-[#f51b1b] hover:bg-[#d61d1d]  border-inherit">
              DELETE MOVIE
            </button>
          </div>
        </div>
      </div>
      
    </Layout>
  );
};


