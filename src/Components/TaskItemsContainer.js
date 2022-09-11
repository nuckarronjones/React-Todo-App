import React, { useState } from "react";
import "./TaskItemsContainer.css";

export default function TaskItemsContainer(props) {

  return (
    <div id="TaskItemsContainer">
      {props.arrayItems.map((task) => (
        <div
          key={task.keyattr}
          keyattr={task.keyattr}
          className="taskItem p-3 mb-2"
        >
          <i className="bi bi-x" onClick={props.removeItemHandler}></i> {task.task}
        </div>
      ))}
    </div>
  );
}
