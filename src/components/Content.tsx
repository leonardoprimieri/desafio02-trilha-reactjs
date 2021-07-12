import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

import "../styles/content.scss";

interface ContentProps {
  selectedGenre: {
    title: string;
  };
  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>;
}

export function Content(props: ContentProps) {
  return (
    <>
      <h1>Content</h1>
      <Header title={props.selectedGenre.title} />
      <main>
        <div className="movies-list">
          {props.movies.map((movie) => (
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
    </>
  );
}
