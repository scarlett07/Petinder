import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Categories from './pages/Categories'
import Favorites from './pages/Favorites'


class App extends Component {
  render() {
    return (
      <div class="App">

          <Link to="/"></Link>
          <Link to="/SignUp">sss</Link>
          <Link to="/Home"></Link>
          <Link to="/Profile"></Link>
          <Link to="/Categories"></Link>
          <Link to="/Favorites"></Link>

          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Home" component={Home} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Categories" component={Categories} />
            <Route path="/Favorites" component={Favorites} />
          </Switch>

      </div>

    );
  }
}

export default App;
