import React from "react";

function Task({text, category,id, onDeleteTask}) {
function handleDeleteCick(){
  onDeleteTask(id);
}
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">
        {text}
       </div>
       <button onClick={handleDeleteCick}>X</button>
    </div>
  );
}

export default Task;
