import React from 'react';
import './App.css';
import Home from './layouts/home/home';
import Tutorial from "./layouts/tutorial/tutorial";

import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
          <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <BrowserRouter>
          <Switch>
            <Route exact path="/tutorial">
              <Tutorial />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
