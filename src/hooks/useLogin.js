import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../database/Firebase";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {

    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)

        try{
            const res = await signInWithEmailAndPassword(auth,email, password)
            

            // dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user })

                     
            setIsPending(false);
            setError(null)
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

    return { login, error, isPending }

}