import AppContainer from "./Components/AppContainer";
import React, { useState } from "react"
import "./App.css";

const itemArray = [
  {
    taskId: 1,
    task: "Walk the dog"
  },
  {
    taskId: 2,
    task: "Buy groceries"
  },
  {
    taskId: 3,
    task: "Do laundry"
  }
]

function App() {
  const [tasks, setTasks] = useState(itemArray)
  console.log(tasks)
  return (
    <div>
      <div className="container vh-100">
        <div className="row h-100 d-flex align-items-center justify-content-center">
          <AppContainer tasks={tasks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
