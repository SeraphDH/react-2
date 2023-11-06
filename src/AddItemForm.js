import React, { useState } from "react";

function AddItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("food"); // Default to "food," but users can choose "beverage" as well.

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an item object with user input
    const newItem = {
      name,
      description,
      category,
      // You can add more fields like price, recipe, etc., as needed.
    };

    // Pass the new item to the parent component for further handling (e.g., API request)
    onAddItem(newItem);

    // Clear the form fields
    setName("");
    setDescription("");
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="food">Food</option>
            <option value="beverage">Beverage</option>
          </select>
        </div>
        <div>
          <button type="submit">Add Item</button>
        </div>
      </form>
    </div>
  );
}

export default AddItemForm;
