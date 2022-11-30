import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import { useMessageContext } from "./useMessageContext";


const initialState = {
  userData:'',
  message:'',

};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCHED':
      return {...state, userData: action.user, error: false, message:action.message};
    case 'UPDATED':
      return {...state, userData: action.user, error: false, message:action.message };
   case 'ERROR':
        return {...state, userData:'', message:action.payload, error: true};
    default:
      return state
  }
}

export const useLoad = (db, user, value) => {

    const [userProfile, dispatch] = useReducer(reducer, initialState);
    const {userData, message, error} = userProfile;
    const [isUpdating, setIsUpdating] = useState(false);
    const [ showMessage, setShowMessage] = useState(false)
    const {handleMessage} = useMessageContext(message, showMessage, setShowMessage, error )
    
    useEffect(()=>{
      handleMessage()
     
    },[showMessage])


    useEffect( () =>{
        try{
          const getUserProfile = async () =>{
            let ref = collection(db, 'userProfile');
            ref = query(ref, where('uid' ,'==', user.uid))
            const data = await getDocs(ref);
            const dataArray = (data.docs.map( doc =>({...doc.data(), id:doc.id } )))
            const userDetails = dataArray[0]
            dispatch({type:'FETCHED', user:userDetails, message:'' }) 

        }
        
        getUserProfile()  
        }catch(error){
          console.log(error)
        }
         
       
    },[user.uid]); 

   
    const updateDetails = async () => {
          setIsUpdating(true)
  
          try{
              const userDoc = doc(db, "userProfile", userData.id)
              const newFields = value
              await updateDoc(userDoc, newFields )
              dispatch({type:'UPDATED', user:userData, message:'Dados atualizados com sucesso'})
            
              setIsUpdating(true)
              setShowMessage(true)
        

          }catch(err){
              dispatch({type:'ERROR',payload:'Ocorreu um erro, tente novamente'}) 
              setShowMessage(true)
           
      
          }
         
          setIsUpdating(false)

    }
  
    return{ userData, updateDetails, isUpdating, }
   
}
