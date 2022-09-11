import React, { useState } from "react";
import "./AppContainer.css";
import TaskItemsContainer from "./TaskItemsContainer";
import CreateTaskComponent from "./CreateTaskComponent";

const itemArray = [
  {
    keyattr: Math.random().toString(),
    task: "Walk the dog",
  },
  {
    keyattr: Math.random().toString(),
    task: "Buy groceries",
  },
  {
    keyattr: Math.random().toString(),
    task: "Do laundry",
  },
];

export default function AppContainer(props) {
  const [arrayItems, setArrayItems] = useState(itemArray);

  const removeItemHandler = (e) => {
    const idRemoved = e.target.parentNode.getAttribute("keyattr");

    const updatedArrayItems = arrayItems.filter((item) => {
      if (item.keyattr != idRemoved) {
        return item;
      }
    });

    setArrayItems(updatedArrayItems);
  };

  const addItemHandler = (data) => {
    console.log(data);
    setArrayItems([...arrayItems, data]);
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
