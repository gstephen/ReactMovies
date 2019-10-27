import React, { Component } from "react";
import FilmRow from "./FilmRow";

class FilmListing extends Component {
  state = {
    filter: "all"
  };

  handleFilterClick = filter => {
    this.setState({ filter });
  };

  render() {
    const films =
      this.state.filter === "faves" ? this.props.faves : this.props.films;

    const allFilms = films.map(film => {
      return (
        <FilmRow
          film={film}
          key={film.id}
          onFaveToggle={() => this.props.onFaveToggle(film)}
          isFave={this.props.faves.includes(film)}
          onDetailsClick={() => this.props.onDetailsClick(film)}
        />
      );
    });

    const filterActive = type => {
      return this.state.filter === type
        ? "film-list-filter active"
        : "film-list-filter";
    };

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={filterActive("all")}
            onClick={() => this.handleFilterClick("all")}
          >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            className={filterActive("faves")}
            onClick={() => this.handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
