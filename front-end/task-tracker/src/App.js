import React from "react";
import Header from "./components/Header";
import Task from "./components/Tasks";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
};

export default App;
