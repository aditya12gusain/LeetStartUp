import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Tinder from "./Components/Tinder";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/tinder">
            <Navbar />
            <Tinder />
          </Route>
          <Route path="/profile">
            <Navbar />
            <Profile />
          </Route>
          <Route path="/signup">
            <Navbar />
            <Signup />
          </Route>
          <Route path="/login">
            <Navbar />
            <h1>Login</h1>
          </Route>
          <Route path="/messages">
            <Navbar />
            <h1>Messages</h1>
          </Route>
          <Route path="/chats">
            <Navbar />
            <h1>Chats</h1>
          </Route>
          <Route path="/">
            <Navbar />
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
