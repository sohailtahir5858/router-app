import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { Link } from "react-router-dom";

export default class movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: getMovies(),
    };
  }

  handleRemoveMovie = (movie) => {
    const movies = this.state.movies.filter(
      (stateMovie) => stateMovie._id !== movie._id
    );
    this.setState({ movies: movies });
  };

  render() {
    const movies = this.state.movies;
    var count = 1;
    return (
      <table className="table mt-5">
        <thead>
          <tr className="bg-dark text-white">
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rating</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => (
            <tr key={movie._id}>
              <th scope="row">{count++}</th>
              <td>
                <Link to={"/movies/" + movie._id}>{movie.title}</Link>
              </td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.handleRemoveMovie(movie);
                  }}
                >
                  remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
