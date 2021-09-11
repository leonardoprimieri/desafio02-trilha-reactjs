import { Header } from "./Header";
import { MovieCard } from "./MovieCard";
import { List, AutoSizer, ListRowRenderer } from "react-virtualized";
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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <MovieCard
          title={props.movies[index].Title}
          poster={props.movies[index].Poster}
          runtime={props.movies[index].Runtime}
          rating={props.movies[index].Ratings[0].Value}
        />
      </div>
    );
  };
  return (
    <>
      <Header title={props.selectedGenre.title} />
      <main>
        <List
          className="movies-list"
          height={400}
          rowHeight={400}
          width={800}
          overscanRowCount={4}
          rowCount={props.movies.length}
          rowRenderer={rowRenderer}
        />
      </main>
    </>
  );
}
