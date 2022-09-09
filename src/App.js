import React, { useState } from "react"
import AppContainer from "./Components/AppContainer";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container vh-100">
        <div className="row h-100 d-flex align-items-center justify-content-center">
          <AppContainer/>
        </div>
      </div>
    </div>
  );
}

export default App;
