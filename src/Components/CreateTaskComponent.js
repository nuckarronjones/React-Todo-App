import React, { useState } from "react";
import "./CreateTaskComponent.css";

export default function CreateTaskComponent(props) {
  const [newTaskText, setNewTaskText] = useState("");

  const inputHandler = (e) => {
    setNewTaskText(e.target.value);
    console.log(newTaskText);
  };

  const addTask = () => {
    props.addItemHandler({
      keyattr: Math.random().toString(),
      task: newTaskText,
    });
  };

  return (
    <div className="row w-100 m-0 p-2 text-center">
      <div className="col-9">
        <input
          onChange={inputHandler}
          type="text"
          placeholder="Add a new task here..."
          className="w-100"
        />
      </div>
      <div className="col-3">
        <button onClick={addTask} className="addTaskButton">
          Add Task
        </button>
      </div>
    </div>
  );
}
