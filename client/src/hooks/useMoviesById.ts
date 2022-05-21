import { useEffect, useState } from "react"
import axios from "axios"
import { IMovie } from "../types/movie"
import { getMovieById } from "../services/movieService"



export const useMoviesById = (_id?: string) => {
  const [movie, setMovie] = useState<IMovie>()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      setIsError(false)
      try {
        const data = await getMovieById(_id)
        setMovie(data)
      } catch (err) {
        console.error(err)
        setIsError(true)
      }
      setIsLoading(false)
    })()
  }, [_id])

  return {
    movie,
    isLoading,
    isError,
  }
}