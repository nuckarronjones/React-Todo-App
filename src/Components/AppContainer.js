import React, { useState } from "react";
import "./AppContainer.css";
import TaskItemsContainer from "./TaskItemsContainer";
import CreateTaskComponent from "./CreateTaskComponent";

const itemArray = [
  {
    taskId: 1,
    task: "Walk the dog",
  },
  {
    taskId: 2,
    task: "Buy groceries",
  },
  {
    taskId: 3,
    task: "Do laundry",
  },
];

export default function AppContainer(props) {
  const [arrayItems, setArrayItems] = useState(itemArray);

  const removeItemHandler = (e) => {
    const idRemoved = e.target.parentNode.getAttribute("idkey");

    const updatedArrayItems = arrayItems.filter((item) => {
      if (item.taskId != idRemoved) {
        return item;
      }
    });

    setArrayItems(updatedArrayItems);
  };

  const addItemHandler = (data) => {
    console.log(data);
  };

  return (
    <div id="AppContainer" className="p-4">
      <div id="AppGrid">
        <div className="row header">
          <h1>
            TODO <i className="bi bi-robot"></i>
          </h1>
        </div>
        <div className="row content">
          <TaskItemsContainer
            removeItemHandler={removeItemHandler}
            arrayItems={arrayItems}
          />
        </div>
        <div className="row footer">
          <CreateTaskComponent addItemHandler={addItemHandler}/>
        </div>
      </div>
    </div>
  );
}
