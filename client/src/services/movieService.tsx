import axios from "axios"
import { ICreateMovieReq } from "../types/createMovieReq"
import { IMovie } from "../types/movie"
import { IUpdateMovieReq } from "../types/updateMoviereq"


const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", 
})

export const getMovies = async () => {
  const { data } = await axiosInstance.get<{movies: IMovie[]}>("/movies")
  console.log(data);
  
  return data.movies
} 

export const getMovieById = async (id?: string) => {
  if(!id) return {} as IMovie
  const { data } = await axiosInstance.get<{movie: IMovie}>(`/movies/${id}`)
  return data.movie
}

export const postMovie = async (movieReq: ICreateMovieReq) => {
  const { data } = await axiosInstance.post<IMovie>(`/movies`, movieReq)
  return data
}

export const putMovie = async ({
  _id,
  ...updateMovieReq
}: IUpdateMovieReq) => {
  const { data } = await axiosInstance.put<IMovie>(
    `/movies/${_id}`,
    updateMovieReq
  )
  return data
}

export const deleteMovieById = async (id?: string) => {
  const { data } = await axiosInstance.delete<{movies: IMovie}>(`/movies/${id}`)
  return data
}