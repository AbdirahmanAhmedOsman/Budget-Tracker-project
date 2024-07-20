 import React, { useState, useContext, useEffect } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import { useNavigate, useParams } from 'react-router-dom';


function BudgetForm() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const { addBudgetItem, updateBudgetItem, budgetItems } = useContext(BudgetContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // const itemToEdit = budgetItems.find(item => item.id === id);
      const item = budgetItems.find(item => item.id === id);
      if (item) {
        setName(item.name);
        setAmount(item.amount);
      }else{
        console.log(`item id: ${id} not found`)
      }
    }
  }, [id, budgetItems]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newItemEdit = { id: id || Date.now().toString(), name, amount: parseFloat(amount) };
    if (id) {
      updateBudgetItem({id , name , amount});
    } else {
      addBudgetItem({name , amount});
    }
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{id ? 'Edit Budget' : 'Add Budget'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Amount</label>
            <input
              type="number"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add</button>
        </form>
      </div>
    </div>
  );
}

export default BudgetForm;
