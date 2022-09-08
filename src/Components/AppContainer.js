import React from "react";
import "./AppContainer.css";
import TaskItemsContainer from "./TaskItemsContainer";
import CreateTaskComponent from "./CreateTaskComponent";

export default function AppContainer(props) {
  return (
    <div id="AppContainer" className="p-4">
      <div id="AppGrid">
        <div className="row header">
          <h1>TODO <i className="bi bi-robot"></i></h1>
        </div>
        <div className="row content">
          <TaskItemsContainer tasks={props.tasks}/>
        </div>
        <div className="row footer">
          <CreateTaskComponent />
        </div>
      </div>
    </div>
  );
}
