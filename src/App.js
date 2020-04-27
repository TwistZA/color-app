import React from "react";
import "./App.css";
import Palette from "./Palette";
import seedColors from "./seedColors.js";
import { generatePalette } from "./colorHelpers.js";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1> PALETTE LIST </h1>} />
      <Route
        exact
        path="/palette/:id"
        render={() => <h1> INDIVIDUAL PALETTE </h1>}
      />
    </Switch>

    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
