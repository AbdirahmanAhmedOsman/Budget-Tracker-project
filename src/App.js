import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BudgetList from './components/BudgetList';
import BudgetForm from './components/BudgetForm';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SingUpForm';
import { BudgetProvider } from './context/BudgetContext';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <BudgetProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <div className="container mx-auto px-4">
            <Routes>

              <Route path="/" element={
                <ProtectedRoute>
                <BudgetList />
                </ProtectedRoute> } />
              <Route path="/add" element={<BudgetForm />} />
              <Route path='/edit/:id' element={<BudgetForm/>}/>
              <Route path="/signin" element={<SignInForm />} />
              <Route path="/signup" element={<SignUpForm/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </BudgetProvider>
  );
}

export default App;



























// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// import Header from './components/Header';
// import BudgetForm from './components/BudgetForm';
// // import BudgetList from './components/BudgetList';
// import SignInForm from './components/SignInForm';
// import SignUpForm from './components/SingUpForm';


// const App = () => {
//     return (

//        <BrowserRouter>
//        <Router>

//        {/* <Header/> */}
//             <Routes>
//                 <Route path='/add' element={<BudgetForm/>}/>
//                 <Route path='/singin' element={<SignInForm/>}/>
//                 <Route path='/signup' element={<SignUpForm/>} />
//             </Routes>
//        </Router>
//        </BrowserRouter>

        
//     );
// };




// export default App;











// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Header from './Header';
// // import BudgetForm from './BudgetForm';
// // import BudgetList from './BudgetList';
// // import SignInForm from './SignInForm';
// // import SignUpForm from './SingUpForm';
// // import { BudgetProvider } from '../context/BudgetContext';

// // const App = () => {
// //     return (
// //         <BudgetProvider>
// //             <Router>
// //                 <div className="min-h-screen bg-gray-100">
// //                     <Header />
// //                 <div className="container mx-auto px-4">
// //                     <Routes>
// //                         {/* <Route path="/" element={<Home/>} /> */}
// //                         <Route path='/' element={<BudgetList/>} />
// //                         <Route path='/add' element={<BudgetForm/>} />
// //                         <Route path="/signin" element={<SignInForm/>}  />
// //                         <Route path="/signup" element={<SignUpForm/>} />
// //                     </Routes>
// //                 </div>
// //                 </div>
// //             </Router>
// //         </BudgetProvider>
// //     );
// // };




// // export default App;
