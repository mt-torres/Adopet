import { useEffect, useReducer, useState } from "react"
import { db, timestamp } from "../database/Firebase"
import { addDoc, collection } from "firebase/firestore";

let initialState ={
    document: null,
    isPending: false,
    error: null,
    success: null,
}

const firestoreReducer = (state, action) => {

    switch(action.type) {
        case 'IS_PENDING':
            return { ...state, isPending: true, document: null, success: false, error: null };
        case 'ADDED_DOCUMENT':
            return { ...state, isPending: false, document: action.payload, success: true, error: null  };
        case 'ERROR':
            return { isPending: false, document: null, success: false, error: action.payload  };

        default:
            return state
    }


}

export const useFirestore = (collectionDb) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    console.log('response:',response)
    console.log('dispatch:',dispatch)
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
            dispatchIfIsNotCancelled({type:'ADDED_DOCUMENT', payload: addedDocument})

        }catch(err){
            dispatchIfIsNotCancelled({type:'ERROR', payload: err.message })

        }

    }

     // delete a document
     const deleteDocument = (id) => {


    }


    useEffect(() =>{

        return () => setIsCancelled(true)

    }, [])

    return { addDocument, deleteDocument, response }
}