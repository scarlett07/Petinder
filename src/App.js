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
      <div className="App">

        <nav className="navbar navbar-dark bg-warning">
          <span className="navbar-brand right">Petinder</span>
          <span className="text-white"><Link to="/">home</Link></span>
          <Link to="/SignUp">sign up</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Profile">profile</Link>
          <Link to="/Categories">categories</Link>
          <Link to="/Favorites">favorites</Link>
        </nav>



        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Login" component={Login} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Categories" component={Categories} />
          <Route path="/Favorites" component={Favorites} />
        </Switch>

      </div>

    );
  }
}

export default App;
