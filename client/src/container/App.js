import React from "react";
import Routes from "./Routes";
import Header from "./Header";

function App() {
  return (
    <div id="app">
      <Header />
      <div className="container">
        <Routes />
      </div>
    </div>
  );
}

export default App;
