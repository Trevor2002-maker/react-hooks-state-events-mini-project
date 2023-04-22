import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskData, setTaskData] = useState(TASKS);
  const handleDeleteTask = (taskId)=>{
    setTaskData((prevTask)=>prevTask.filter((TASKS)=>TASKS.id !== taskId));
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList TASKS={taskData} onDelete={handleDeleteTask}/>
    </div>
  );
}

export default App;
