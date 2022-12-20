import { createContext, useEffect, useReducer } from "react";
import { auth } from "../database/Firebase";


export const AuthContext = createContext()

export const authReducer = (state, action) => {

    switch(action.type){
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'LOGOUT':
                return { ...state, user: null }
        case 'AUTH_IS_READY':
                return { ...state, user: action.payload, userId:action.uid, authIsReady: true }
        default:
            return state

    }

}


export const AuthContextProvider = ({children}) =>{
    const [ state, dispatch ] = useReducer(authReducer, {
        user: null,
        authIsReady: false,
    })


    useEffect(()=> {
        const unsub = auth.onAuthStateChanged((user) => {
            let uid;
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                uid = user.uid;
                // ...
              } else {
                // User is signed out
                // ...
              }
            
            dispatch({type: 'AUTH_IS_READY', payload: user, uid:uid })
            unsub()
        })
    },[])

    console.log('AuthContext state:', state)

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>     
    )
}