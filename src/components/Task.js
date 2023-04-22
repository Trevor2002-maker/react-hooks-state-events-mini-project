import React from "react";

function Task(props) {
  const {TASKS, onDelete} = props;

  return (
    <div className="task">
      <div className="label">{TASKS.category}</div>
      <div className="text">
       {TASKS.text}
       </div>
      <button className="delete" onClick={()=>onDelete(TASKS.id)}>X</button>
    </div>
  );
}

export default Task;
