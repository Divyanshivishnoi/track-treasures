
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Form/Form";


const Edit = () => {
  const navigate = useNavigate();

  // State for form fields
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  
  // Get the expense data from localStorage when the component mounts
  useEffect(() => {
    const editExpense = JSON.parse(localStorage.getItem("editExpense"));
    
    if (editExpense) {
      setTitle(editExpense.title);
      setAmount(editExpense.amount);
      setCategory(editExpense.category);
    }
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the updated expense object
    const updatedExpense = {
      title,
      amount,
      category,
      date: new Date().toLocaleString(),
    };

    // Get the current expenses from localStorage
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // Find the index of the expense being edited and update it
    const index = storedExpenses.findIndex(exp => exp.title === title && exp.amount === amount && exp.category === category);
    if (index !== -1) {
      storedExpenses[index] = updatedExpense;
    }

    // Save the updated expenses back to localStorage
    localStorage.setItem("expenses", JSON.stringify(storedExpenses));

    // Redirect back to the table
    navigate("/table");
  };

  return (
    <div className="form-container">
      <h2>Edit Expense</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn">Update Expense</button>
      </form>
    </div>
  );
};

export default Edit;
