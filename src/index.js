import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css'
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BudgetForm from './components/BudgetForm';
import Header from './components/Header';
import SignInForm from './components/SignInForm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
  {/* <SignInForm/> */}
  {/* <Header/> */}
  {/* <BudgetForm/> */}
  <App/>
  <ToastContainer/>
  </>
  
);


