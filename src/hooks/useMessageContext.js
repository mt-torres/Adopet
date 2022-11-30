import { useContext } from "react"
import { MessageContext } from "../context/MessageContext"

export const useMessageContext = (DisplayMessage, isShow, setShowMessage, isError) => {
    const {dispatch, message, show, error} = useContext(MessageContext)

    const handleMessage = () =>{

        if(DisplayMessage&&isShow) {

            dispatch({type:'SHOW', payload: DisplayMessage, error:isError}) 
            
            setTimeout(()=>{
                dispatch({type:'HIDE'}) 
                setShowMessage(false)

            },3000)   

        }    


    }



     return{message, show, handleMessage, error}



}