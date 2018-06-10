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
        <Switch>
            <Route exact path="/" component={SplashFormContainer} />
        </Switch>
    </div>
);

export default App;
