import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  
  const defaultCategory = categories.find((cat) => cat !== "All") || "";
  const [text, setText] = useState("");
  const [category, setCategory] = useState(defaultCategory);

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;

    
    onTaskFormSubmit({ text, category });

    
    setText("");
    setCategory(defaultCategory);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="text">Details</label>
      <input
        id="text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories
          .filter((cat) => cat !== "All")
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
      </select>

      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
