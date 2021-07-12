import React from "react";
import MainPage from "./pages/MainPage";
import AllTests from "./pages/AllTests";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route path="/tests">
          <AllTests />
        </Route>
      </Switch>
      
    </Router>
    
  );
}

export default App;
