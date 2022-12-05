import { useCallback, useContext } from "react"
import { MessageContext } from "../context/MessageContext"

export const useMessageContext = (DisplayMessage, isShow, setShowMessage, isError, messageTypeDysplay) => {
    const {dispatch, message, show, error, messageType} = useContext(MessageContext)

    const handleMessage = useCallback(() =>{

        if(DisplayMessage&&isShow) {

            dispatch({type:'SHOW', payload: DisplayMessage, error:isError, messageType:messageTypeDysplay }) 
            
            setTimeout(()=>{
                dispatch({type:'HIDE'}) 
                setShowMessage(false)

            },3000)   

        }    


    },[dispatch, DisplayMessage, isError, setShowMessage, isShow, messageTypeDysplay])



     return{message, show, handleMessage, error, messageType }



}