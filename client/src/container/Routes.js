import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Films from "./Films";
import Film from "../component/Film";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Films}/>
        <Route exact path="/films" component={Films}/>
        <Route exact path="/films/:id" component={Film}/>
      </Switch>
    </Router>
  );
}
