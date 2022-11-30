import { useEffect, useReducer, useState } from "react"
import { db, timestamp } from "../database/Firebase"
import { addDoc, collection } from "firebase/firestore";
import { useMessageContext } from "./useMessageContext";

let initialState ={
    document: null,
    isPending: false,
    errorAddNewDoc: false,
    success: null,
    messageAddNewDoc:''

}

const firestoreReducer = (state, action) => {

    switch(action.type) {
        case 'IS_PENDING':
            return { ...state, isPending: true, document: null, success: false, error: false, message: ''};
        case 'ADDED_DOCUMENT':
            return { ...state, isPending: false, document: action.payload, success: true, error: false, message:"Dados salvos com sucesso!"};
        case 'ERROR':
            return { isPending: false, document: null, success: false, error: true, message:action.payload};

        default:
            return state
    }


}

export const useFirestore = (collectionDb) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const {error, message} = response;
    const [isCancelled, setIsCancelled] = useState(false);
    const [ showMessage, setShowMessage] = useState(false)
    const {handleMessage} = useMessageContext(message, showMessage, setShowMessage, error )

    useEffect(()=>{
        handleMessage()
       
      },[showMessage])
    

     // dispatch if it is not cancelled

    const dispatchIfIsNotCancelled = (action) => {
        if(!isCancelled){
            dispatch(action) 
        }

    }
 
    // add a document
    const addDocument = async (doc ) => {

        dispatch({ type: 'IS_PENDING' })

        try{ 
            const createdAt = timestamp.fromDate(new Date())
            const addedDocument =  await addDoc(collection(db, collectionDb), {...doc, createdAt} );
            //dispatchIfIsNotCancelled({type:'ADDED_DOCUMENT', payload: addedDocument})
            dispatch({type:'ADDED_DOCUMENT', payload: addedDocument}) 
            setShowMessage(true)
           
        }catch(err){
            dispatchIfIsNotCancelled({type:'ERROR', payload: err.message })
            setShowMessage(true)
           

        }

    }

     // delete a document
     const deleteDocument = (id) => {


    }


    useEffect(() =>{

        return () => setIsCancelled(true)

    }, [])

    return { addDocument, deleteDocument }
}