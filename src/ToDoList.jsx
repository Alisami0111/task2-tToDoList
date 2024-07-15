import React, { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState(["wake up"]);
  const [newTask, setNewtask] = useState("");

  function handleInputChange(event) {
    setNewtask(event.target.value);
  }

  function addTask() {
    if(newTask.trim() !== ""){
        setTask(t => [...t, newTask]);
        setNewtask("");
    }
  }

  function deleteTask(index) {
    const updateTask = task.filter((_, i)=>i !== index);
    setTask(updateTask);
  }

  function moveTaskUp(index) {
    if(index > 0){
        const updateTask = [...task];
        [updateTask[index], updateTask[index - 1]] = [updateTask[index-1], updateTask[index]];
        setTask(updateTask);
    }
  }

  function moveTaskDown(index) {
    if(index < task.length -1){
        const updateTask = [...task];
        [updateTask[index], updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]];
        setTask(updateTask);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a Task ..."
          value={newTask}
          onChange={handleInputChange}
        />

        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete Task
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Task Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Task Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
