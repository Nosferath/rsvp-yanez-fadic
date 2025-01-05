import { useState } from "react";
import "./App.css";

import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="app" style={{ margin: 0, padding: 0, width: "100%" }}>
      <LandingPage />
    </div>
  );
}

export default App;
