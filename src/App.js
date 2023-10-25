import React, { Component } from "react";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";
import { Redirect, Route, Switch } from 'react-router-dom'
import Customers from './components/customers'
import Movies from './components/movies'
import movieDetail from "./components/movieDetail";
import Rentals from './components/rentals'
class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="not-found" component={NotFound} />
          <Route path="/movies/:id" component={movieDetail} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rental" component={Rentals} />
          <Route path="/" component={Movies} />
          <Redirect to="not-found" />
        </Switch>

      </div>
    );
  }
}

export default App;
