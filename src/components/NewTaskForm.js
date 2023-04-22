import React, {useState} from "react";

function NewTaskForm({CATEGORIES, onTaskFormSubmit}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newTask = {text, category};
    onTaskFormSubmit(newTask);
    setText("");
    setCategory(CATEGORIES[0]);
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
          {CATEGORIES.slice(i).map((cat)=>(
            <option key={cat} value={cat}>{cat}</option>
          )
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
