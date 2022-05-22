import React, { useState } from "react";
import { useCreateMovie } from "../../../hooks/useCreateMovie";
import { IProp } from "../../../types/externMovies";

export const MovieResultCard = (movie: IProp) => {
  const { createMovie } = useCreateMovie();

  const handleCreateMovie = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createMovie(movie);
  };

  return (
    <form onSubmit={handleCreateMovie}>
      <div className="card card-side bg-base-300 shadow-xl m-5  lg:mx-10  ">
        <figure className="">
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        </figure>
        <div className="card-body bg-gradient-to-r from-zinc-400 to-blue-100">
          <h2 className="card-title">{movie.title}</h2>
          <p>{movie.release_date}</p>
          {/* <p>{movie.overview}</p> */}
          <div className="card-actions justify-end">
            <button
              type="submit"
              className="btn text-lime-500 bg-gray-800 border-zinc-900  border-inherit w-full "
            >
              ADD TO WATCHLIST
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
