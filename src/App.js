import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "../src/components/Home";
import UserFormDetails from '../src/components/user/UserDetails'
import UserWeather from '../src/components/user/UserWeather'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={`/`} component={Home} />
          <Route exact path={`/country-details/:id`} component={UserFormDetails} />
          <Route exact path={`/country-weather/:id`} component={UserWeather} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
