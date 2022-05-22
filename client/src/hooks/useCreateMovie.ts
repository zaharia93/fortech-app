import { useState } from "react"
import { postMovie } from "../services/movieService"
import { ICreateMovieReq } from "../types/createMovieReq"

export const useCreateMovie = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const createMovie = async (movieReq: ICreateMovieReq) => {
    console.log({movieReq})
    try {
      setIsError(false)
      setIsLoading(true)
      await postMovie(movieReq)
    } catch (err) {
      console.error(err)
      setIsError(true)
    }
    setIsLoading(false)
  }

  return {
    isLoading,
    isError,
    createMovie,
  }
}
