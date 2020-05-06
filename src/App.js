import React from "react";
import TaskListContextProvider from "./contexts/TaskListContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <TaskListContextProvider>
      <div className="back">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;