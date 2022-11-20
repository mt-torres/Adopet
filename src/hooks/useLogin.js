import { signInWithEmailAndPassword } from "firebase/auth";
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
            if (err.code){
                if (err.code === 'auth/wrong-password') {
                    setError("Senha incorreta")
               }
               else if(err.code === 'auth/invalid-email'){
                setError("O email informado é invalido")
               }
               else if(err.code === 'auth/user-not-found'){
                setError("Usuário não econtrado")
               }
               else if(err.code === 'auth/too-many-requests'){
                setError("Muitas tentativas incorretas, aguarde alguns minutos")
               }
               else {
                setError("Por favor, insira sua senha")
               }
           }

            console.log(err.code);
                //setError(err.message);
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