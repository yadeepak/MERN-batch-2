import React, { Component } from "react";
import Nav from "./components/Nav";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { Route, Switch } from "react-router-dom";
import Samsung from "./pages/Samsung";
export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route
            path="/shop/samsung/:modelNo"
            component={(params) => <Samsung params={params} />}
          />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </div>
    );
  }
}
