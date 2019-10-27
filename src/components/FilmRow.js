import React from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

function FilmRow(props) {
  const releaseDate = new Date(props.film.release_date);
  const releaseYear = releaseDate.getFullYear();

  return (
    <div className="film-row" onClick={props.onDetailsClick}>
      <FilmPoster film={props.film} />

      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{releaseYear}</p>
      </div>

      <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave} />
    </div>
  );
}

export default FilmRow;
