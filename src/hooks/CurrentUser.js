import React, { useEffect, useState } from 'react'
import {auth} from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

function CurrentUser() {
    const [currentUser , setCurrentUsser] = useState(null);
    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth , (user) =>{
            if(user){
                setCurrentUsser(user);
            }else{
                setCurrentUsser(null);
            }
        }) 
        return () => unsubscribed();
    } ,[])
  return (currentUser)
}

export default CurrentUser