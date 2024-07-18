import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';


function ProtectedRoute({children}) {
    const [currentUser , setCurrentUsser] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth , (user) =>{
            setCurrentUsser(user);
            setLoading(false)
        });
        return () => unsubscribed();
    }, [])
    if(loading){return <div className='flex justify-center'>Wait....</div>}
    if(!currentUser){
       return <Navigate to='/signin'/>
    }

  return ( children )
}

export default ProtectedRoute