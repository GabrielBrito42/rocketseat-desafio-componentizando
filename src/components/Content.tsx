import { GenreResponseProps, MovieProps } from '../App'
import { MoviesList } from './MoviesList'
import { Header } from './Header'

import '../styles/content.scss'

interface ContentProps {
  selectedGenre: GenreResponseProps,
  movies: MovieProps[]
}

export function Content({ selectedGenre, movies }: ContentProps) {
  // Complete aqui
  return(
    <div className="container">
      <Header selectedGenreTitle={selectedGenre.title}/>

      <MoviesList movies={movies}/>
    </div>
  )
}