import  { useEffect, useState } from 'react' // Import necessary React hooks
import {auth} from '../firebase'  // Import the auth object from your Firebase configuration
import { onAuthStateChanged } from 'firebase/auth' // Import the onAuthStateChanged function from Firebase

function CurrentUser() {
    const [currentUser , setCurrentUsser] = useState(null);  // Declare state variable to store the current user
    useEffect(() =>{
         //Set up a listener to track authentication state changes
        const unsubscribed = onAuthStateChanged(auth , (user) =>{
            if(user){
                setCurrentUsser(user); // If a user is logged in, update the state with the user object
            }else{
                setCurrentUsser(null); // If no user is logged in, set the state to null
            }
        }) 

       // Clean up the subscription when the component unmounts
        return () => unsubscribed();
    } ,[]) // Empty dependency array ensures this effect runs only once
  return (currentUser)  // Return the current user
}

export default CurrentUser


