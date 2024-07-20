import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import { Link, useNavigate } from 'react-router-dom';

function BudgetList() {
  const { budgetItems, deleteBudgetItem } = useContext(BudgetContext);

  return (
    <div className= "flex flex-col  justify-center py-12 bg-gray-100"> 
    <div className='"w-full max-w-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"'>
      <h2 className="text-3xl font-bold mb-6 text-center">Budget List</h2>
      <ul>
        {budgetItems.map(item => (
          <li key={item.id} className="flex justify-between items-center mb-4 p-3 border-b">
            <div>
            <span className=' flex '>Name: {item.name} </span>
            <span className=' flex '> Amount: ${item.amount}</span>
            </div>
            <div>
              <Link to={`/edit/${item.id}`} className="text-blue-500 mr-2">Edit</Link>
              <button onClick={() => deleteBudgetItem(item.id)} className="text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    
  );
}

export default BudgetList;
