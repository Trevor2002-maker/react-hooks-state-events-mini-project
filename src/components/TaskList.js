import React from "react";
import Task from './Task';

function TaskList(props) {
  const {TASKS, onDelete} = props;
  return (
    <div className="tasks">
     {TASKS.map((TASKS)=>(
      <Task key={TASKS.id} TASKS={TASKS} onDelete={onDelete}/>
     ))}
    </div>
  );
}

export default TaskList;
