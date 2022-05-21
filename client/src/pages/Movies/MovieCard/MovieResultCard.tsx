import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../../components/Layout/layout";
import { useCreateMovie } from "../../../hooks/useCreateMovie";
import { IProp } from "../../../types/externMovies";

export const MovieResultCard = (movie: IProp ) => {
  const { isError, isLoading, createMovie } = useCreateMovie();

  const handleCreateMovie = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createMovie(movie);
  };

  return (

    <form onSubmit={handleCreateMovie}>
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
            type="submit"
             className="btn bg-[#21d07a] hover:bg-[#24935d]  border-inherit">
              ADD TO WATCHLIST
            </button>
          </div>
        </div>
      
    </div>
    </form>
  );
};
