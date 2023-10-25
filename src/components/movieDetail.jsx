import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class movieDetail extends Component {
  render() {
    console.log(this.props.match.params.id);
    return (
        <div>
            <h2 className="mt-5">
          Detail page of movie id : {this.props.match.params.id}
        </h2>
        <Link to="/movies" className="btn btn-info">
          Go Back
        </Link>
        </div>
    );
  }
}
