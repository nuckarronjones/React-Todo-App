import React from 'react'

export default function CreateTaskComponent() {
  return (
    <div className='row w-100 m-0 p-2 text-center'>
        <div className='col-9'><input type="text" placeholder="Add a new task here..."className="w-100"/></div>
        <div className='col-3'><button className="btn btn-success">Add Task</button></div>
    </div>
  )
}
