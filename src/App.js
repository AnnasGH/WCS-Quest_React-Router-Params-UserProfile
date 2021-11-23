import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import MyProfile from './components/MyProfile';
import UserProfile from './components/UserProfile';

import './style.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* Add your links here */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-profile">My Profile</Link>
            </li>
            <li>
              <Link to="/user-profile/SailorMoon">SailorMoon</Link>
            </li>
            <li>
              <Link to="/user-profile/CookieMonster">CookieMonster</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/my-profile" component={MyProfile} />
          <Route path="/user-profile/:githubLogin" component={UserProfile} />
        </Switch>
      </div>
    </Router>
  );
}
