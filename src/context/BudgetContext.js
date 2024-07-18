import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc , where } from "firebase/firestore";
import React, {createContext , useEffect, useState} from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const [budgetItems, setBudgetItems] = useState([]);
  const [user , setUser] =useState(null)

  //checing unSubscribed user or subscribed
  useEffect(() =>{
    const unsubscribed = onAuthStateChanged(auth, async (user) =>{
      if(user){
        setUser(user.uid);
        fetchBudgetItems(user.uid)
      }else{
        setUser(null);
        setBudgetItems([]);
      }})
      return () => unsubscribed();
  } , []);

//fetching data with in the fireStore

const fetchBudgetItems = async (userID) =>{
  try{
    const Que = query(collection(db , 'budgetStore'), where('userID' , '==' , userID));
    const querySnapshot = await getDocs(Que);
    const budgetList = querySnapshot.docs.map((doc) =>({
      ...doc.data(),
      id: doc.id
    }))
    setBudgetItems(budgetList);
    // toast.success('succesfully fecthing')
  }catch(error){
    toast('Error with fetching data');
  }
}

//inserting data in firestore
  const addBudgetItem = async (item) => {
    try{
      if(user){
        const budgetItem = await addDoc(collection(db , 'budgetStore'),{
          ...item,
          userID: user
        });
        setBudgetItems([...budgetItems , {
            id: budgetItem.id,
            ...item,
            userID: user
          }]);
      }else{
        toast.error('user is not authenticated');
      }
    }catch(error){
      toast.error('Error adding budget item');
    }finally{
      fetchBudgetItems(user)
    }

  };
// updating data in firestore
  const updateBudgetItem = async (updatedItem) => {
    try{
      const updateBudget = doc(db , 'budgetStore' , updatedItem.id);
      await updateDoc(updateBudget , updatedItem);
      const UpdatedBudget = budgetItems.map(item => (item.id === updatedItem.id ? updatedItem : item));
      setBudgetItems(UpdatedBudget);
      toast.success('budget item is updated');
    }catch(error){
      toast.error('Error with budget updated!');
    } finally{
      fetchBudgetItems(user);
    }
  };

  const deleteBudgetItem = async (id) => {
    try{
      const deleteItem = doc(db , 'budgetStore' , id);
      await deleteDoc(deleteItem);
      toast.success('Budget Item is deleted');
    }catch(error){
      toast.error('No Thing deleted!');
    } finally{
      fetchBudgetItems(user)
    }
 };

  return (
    <BudgetContext.Provider value={{ budgetItems, addBudgetItem, updateBudgetItem, deleteBudgetItem }}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetProvider };


