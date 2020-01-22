import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>NASA Picture of the Day</h1>
      <p>
        Click the buttons below to go back or forward!
      </p>
      <PostContainer />
      <ContainerInput />
    </div>
  );
}

export default App;
