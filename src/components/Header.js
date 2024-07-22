import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserCurrent from '../hooks/CurrentUser';
import {auth} from '../firebase';
import { signOut } from 'firebase/auth';

const Header = () => {
  const nav = useNavigate();
  const CurrentUser = UserCurrent();

  const SignOut = async () =>{  // this code you able the first running project to visible Sign-in, if there signin to Sign out
    await signOut(auth)
    nav('/signin')
    //// Headers of the project 
  }

  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-xl font-bold">Budget Tracker</Link> 
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          {CurrentUser ? (
            <>
              <Link to="/add" className="mr-4">Add budget</Link>
              <Link onClick={SignOut} className="mr-4">Sign Out</Link>
            </>
          ):(
            <>
            <Link to="/signin" className="mr-4">Sign In</Link>
            <Link to="/signup"  className="mr-4">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;




/**
  <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Budget Tracker</h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          {user ? (
            <>
              <Link to="/add" className="mr-4">Add Budget</Link>
              <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="mr-4">Sign In</Link>
              <Link to="/signup" className="mr-4">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
 */