import { createContext, useReducer } from "react";


export const MessageContext = createContext()

export const messageReducer = (state, action) => {

    switch(action.type){
        case 'SHOW':
            return { ...state, message: action.payload, show:true, error:action.error}
        case 'HIDE':
                return { ...state, message: '', show:false }
        default:
            return state

    }

}


export const MessageProvider = ({children}) =>{
    const [ state, dispatch ] = useReducer(messageReducer, {
        message: '',
        show: false,
        error:false,
    })

    
    return(
        <MessageContext.Provider value={{...state, dispatch}}>
            { children }
        </MessageContext.Provider>     
    )
}