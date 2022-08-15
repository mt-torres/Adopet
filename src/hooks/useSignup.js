import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react"
import { auth } from "../database/Firebase";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext()

    const signup = async (email, password, displayName) =>{
        setError(null);
        setIsPending(true);
        try {
            //signup user
           const response =  await createUserWithEmailAndPassword(auth, email, password)
           console.log(response.user)
           setIsPending(false);
           if(!response){
            throw new Error("Could not complete this task")
           }

          
                //add display name
            if(response !== null){
              updateProfile(auth.currentUser, { displayName })

            } 


    
       /*     //add display name
           if(response !== null){
             auth.currentUser.displayName = displayName

           } */

           //dispatch	login action
           dispatch({ type: 'LOGIN', payload: response.user })

            //update state
            if(!isCancelled){
                setIsPending(false);
                setError(null)
            
            }
        }catch(err){
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
            if(!isCancelled){
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }    
    }

    useEffect(() => {
        return () => setIsCancelled(true)

    },[])
  
    return {signup, error, isPending }

} 



/* const register = async () =>{
    try {
        
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            if(getAuth().currentUser!== null){
              const  displayName = getAuth().currentUser.user.displayName
              displayName = userName
            }
            console.log(user)

        

    }catch(error){
        console.log(error.message)
        //console.log(auth.currentUser)

    }
} */