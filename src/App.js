import React from "react";
import "./App.css";
import Palette from "./Palette";
import seedColors from "./seedColors.js";
import { generatePalette } from "./colorHelpers.js";

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
