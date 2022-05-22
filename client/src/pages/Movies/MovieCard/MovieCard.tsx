import { IProp } from "../../../types/externMovies";
import { useNavigate } from "react-router-dom";

export const MovieCard = (movie: IProp) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("nav", movie);
    navigate(`/detail/${movie._id}`);
  };

  return (
    <div className="card card-side bg-base-300 shadow-xl m-5  lg:mx-10  ">
      <figure className=" max-w-fit">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      </figure>
      <div className="card-body  bg-gradient-to-r from-zinc-400 to-blue-100">
        <h2 className="card-title">{movie.title}</h2>
        <p>{movie.release_date}</p>
        {/* <p>{movie.overview}</p> */}
        <div className="card-actions justify-end">
          <button
            onClick={handleClick}
            type="submit"
            className="btn  text-lime-500 bg-gray-800 border-zinc-900 w-full"
          >
            More about movie
          </button>
        </div>
      </div>
    </div>
  );
};
