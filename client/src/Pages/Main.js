import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Apage from "./Apage";

function Main() {
  return (
        <Router>
            <Route exact path="/" component={Apage} />
        </Router>
  );
}

export default Main;
