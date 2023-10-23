import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import { Route, Switch } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>

          <Route path="/products/:id" component={ProductDetails} 
          />

          {/* passing custom props without default props */}
          <Route path="/posts/:year?/:month?" render={(props) => <Posts args={'som args'} {...props}/>} />
          {/* passing the default props as well */}
          <Route path="/products" render={() => <Products args={'som args'} />} />
          <Route path="/admin" component={Dashboard} />
          <Route path="/" component={Home} />
        </Switch>

      </div>
    );
  }
}

export default App;
