import { useEffect, useState } from "react"
import axios from "axios"
import { IMovie } from "../types/movie"
import { getMovies } from "../services/movieService"


 

export const useMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      setIsError(false)
      try {
        const movies = await getMovies()
        setMovies(movies)
      } catch (err) {
        console.error(err)
        setIsError(true)
      }
      setIsLoading(false)
    })()
  }, [])

  return {
    movies,
    isLoading,
    isError,
  }
}