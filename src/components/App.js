import React, { useState, useEffect } from "react";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";

function App(props) {
  const [films, setFilms] = useState(props.TMDB.films)
  const [faves, setFaves] = useState([])
  const [current, setCurrent] = useState({})
  const [apiKey] = useState(props.TMDB.api_key)

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${
      apiKey
    }&language=en`;

  useEffect(() => {
    let MakeAPICall = async () => {
      let data = await fetch (url);
      let film = await data.json();
      setFilms([...films, film])
    }
    MakeAPICall();
  }, [])

  const handleFaveToggle = film => {
    const fav = faves.slice();
    const filmIndex = fav.indexOf(film);

    if (filmIndex > -1) {
      fav.splice(filmIndex, 1);
    } else {
      fav.push(film);
    }
    setFaves(fav);
  };

  const handleDetailsClick = film => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${
      apiKey
    }&append_to_response=videos,images&language=en`;

    fetch(url)
      .then(res => res.json())
      .then(filmData => {
        setCurrent(filmData)
      });
  };

  return (
    <div className="film-library">
      <FilmListing
        films={films}
        faves={faves}
        onFaveToggle={handleFaveToggle}
        onDetailsClick={handleDetailsClick}
      />
      <FilmDetails films={current} />
    </div>
  );
}

export default App;
