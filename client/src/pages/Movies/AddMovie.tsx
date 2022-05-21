import React, { useState } from "react";
import { Layout } from "../../components/Layout/layout";
import { useCreateMovie } from "../../hooks/useCreateMovie";
import { IProp } from "../../types/externMovies";
import {  MovieResultCard } from "./MovieCard/MovieResultCard";


export const CreateMovie= () => {
const [query, setQuery] = useState("");
const [results, setResults] = useState<IProp[]>([]);

const onChange = (e: {
  preventDefault: () => void;
  target: { value: React.SetStateAction<string> };
}) => {
  e.preventDefault();
  setQuery(e.target.value);
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (!data.errors) {
        setResults(data.results);
      } else {
        setResults([]);
      }
    });
};

  return (
    <Layout>
    <div className="form-control ">
        <input
          className="input input-bordered m-20"
          placeholder="Search for a movie"
          onChange={onChange}
          value={query}
          type="text"
        />
        <div >
          {results?.map(movie => (
            <div
         
               key={`${movie._id}`}>
              <MovieResultCard {...movie} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}


