import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useReducer } from "react";

const initialState = {userData:''};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCHED':
      return {...state, userData: action.payload};
    default:
      throw new Error();
  }
}

export const useLoad = (db, user) => {

    const [userProfile, dispatch] = useReducer(reducer, initialState);
    const {userData} = userProfile;

    console.log('userProfile:',userProfile)

    useEffect( () =>{

        const getUserProfile = async () =>{
            let ref = collection(db, 'userProfile');
            ref = query(ref, where('uid' ,'==', user.uid))
            const data = await getDocs(ref);
            const dataArray = (data.docs.map( doc =>({...doc.data(), id:doc.id } )))
            const userDetails = dataArray[0]
            dispatch({type:'FETCHED', payload:userDetails}) 
              
        }
        
        getUserProfile()      
       
    },[user.uid]); 
           
    return{ userData }
   

}
