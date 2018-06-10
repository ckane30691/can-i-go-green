import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import SplashFormContainer from "./greeting/splash_form_container";

const App = () => (
    <div>
      <header>
        <Link to="/"><img src="https://s3.amazonaws.com/can-i-go-green/earth-icon-large.png" /></Link><h1>Can I Go Green?</h1>
          <Link to="/profiles"
            className="profile-btn">
            Look at Profiles
          </Link>
      </header>

        <Switch>
            <Route exact path="/" component={SplashFormContainer} />
        </Switch>
    </div>
);

export default App;
