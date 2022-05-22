import express, { Request, Response, NextFunction } from "express";
const Movie = require("../model/Movie");

const getAllMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let movies;
  try {
    movies = await Movie.find();
  } catch (err) {
    console.log(err);
  }

  if (!movies) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ movies });
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  let movie;
  try {
    movie = await Movie.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!movie) {
    return res.status(404).json({ message: "No movie found" });
  }
  return res.status(200).json({ movie });
};

const addMovie = async (req: Request, res: Response, next: NextFunction) => {
  const { title, overview, release_date, poster_path, vote_average } = req.body;
  let movie;

  try {
    movie = new Movie({
      title,
      overview,
      release_date,
      poster_path,
      vote_average,
    });
    console.log(movie);
    await movie.save();
  } catch (err) {
    console.log(err);
  }

  if (!movie) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ movie });
};

const deleteMovie = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  let movie;
  try {
    movie = await Movie.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!movie) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.addMovie = addMovie;
exports.getAllMovies = getAllMovies;
exports.getById = getById;
exports.deleteMovie = deleteMovie;
