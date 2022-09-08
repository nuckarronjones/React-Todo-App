import React from 'react'
import "./TaskItemsContainer.css"

export default function TaskItemsContainer(props) {
    
  return (
    <div id="TaskItemsContainer">
      {props.tasks.map(item => <p>item[0]</p>)}
    </div>
  )
}
