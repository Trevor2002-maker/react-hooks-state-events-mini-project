import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "text") {
      setText(value);
    } else if (name === "category") {
      setCategory(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { text, category };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory("Code");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;