import React from 'react';
import BudgetList from '../components/BudgetList';
import BudgetForm from '../components/BudgetForm';

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Home</h1>
            {/* <BudgetForm /> */}
            <BudgetList />
        </div>
    );
};

export default Home;
