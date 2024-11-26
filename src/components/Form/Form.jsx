
import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  // State for the form fields
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Create a new expense object
    const newExpense = {
      title,
      amount,
      category,
      date: new Date().toLocaleString(),
    };

    // Get the current expenses from localStorage or initialize as an empty array
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Add the new expense to the existing expenses
    storedExpenses.push(newExpense);

    // Save the updated expenses array back to localStorage
    localStorage.setItem('expenses', JSON.stringify(storedExpenses));

    // Reset form fields
    setTitle('');
    setAmount('');
    setCategory('');
  };

  return (
    <div className="form-container">
      <h2>Add Expense</h2>
      <form id="expenseForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter expense title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select category</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="utilities">Utilities</option>
            <option value="others">Others</option>
          </select>
        </div>
        <button type="submit" className="btn">Add Expense</button>
      </form>
    </div>
  );
};

export default Form;





















// import React from 'react'
// import './Form.css'
// const Form = () => {
//   return (
//     <div class="form-container">
//     <h2>Add Expense</h2>
//     <form id="expenseForm">
//       <div className="form-group">
//         <label for="title">Title</label>
//         <input type="text" id="title" name="title" placeholder="Enter expense title" required/>
//       </div>
//       <div className="form-group">
//         <label for="amount">Amount</label>
//         <input type="number" id="amount" name="amount" placeholder="Enter amount" required/>
//       </div>
//       <div className="form-group">
//         <label for="category">Category</label>
//         <select id="category" name="category" required>
//           <option value="">Select category</option>
//           <option value="food">Food</option>
//           <option value="transport">Transport</option>
//           <option value="utilities">Utilities</option>
//           <option value="others">Others</option>
//         </select>
//       </div>
//       <button type="submit" class="btn">Add Expense</button>
//     </form>
//   </div>
//   )
// }

// export default Form;

