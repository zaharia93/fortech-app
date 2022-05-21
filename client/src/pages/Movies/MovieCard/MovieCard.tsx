import React from 'react';
import { IProp } from '../../../types/externMovies';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteMovieById } from '../../../services/movieService';
import { useMoviesById } from '../../../hooks/useMoviesById';

export const MovieCard = (movie: IProp) => {

const navigate = useNavigate();
const handleClick = () =>{
  console.log('nav', movie);
    navigate(`/detail/${movie._id}`)
}


  return (
    <div className="card card-side bg-base-300 shadow-xl m-10  w-1/3  " >
        <figure className="">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movie.title}</h2>
          <p>{movie.release_date}</p>
          {/* <p>{movie.overview}</p> */}
          <div className="card-actions justify-end">
            <button
            onClick={handleClick}
            type="submit"
             className="btn  bg-[#21d07a] hover:bg-[#24935d]  border-inherit">
              More about movie
            </button>

            
          </div>
        </div>
      
    </div>
  );
};

