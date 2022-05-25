import { MovieCard } from './MovieCard'
import { MovieProps } from '../App'

import '../styles/content.scss'

interface MoviesListProp {
  movies: MovieProps[]
}

export function MoviesList({ movies }: MoviesListProp) {
  return(
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard 
            key={movie.imdbID} 
            title={movie.Title} 
            poster={movie.Poster} 
            runtime={movie.Runtime} 
            rating={movie.Ratings[0].Value} 
          />
        ))}
      </div>
    </main>
  )
}
