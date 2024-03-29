import { useEffect, useReducer, useState } from "react"
import { auth, db, storage, timestamp } from "../database/Firebase"
import { addDoc, collection,doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useMessageContext } from "./useMessageContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { updateProfile } from "firebase/auth";


let initialState ={
    document: null,
    isPending: false,
    error: false,
    success: null,
    message:'',

}

const firestoreReducer = (state, action) => {

    switch(action.type) {
        case 'IS_PENDING':
            return { ...state, isPending: true, document: null, success: false, error: false, message: '', messageType: ''};
        case 'ADDED_DOCUMENT':
            return { ...state, isPending: false, document: action.payload, success: true, error: false, message:"Dados salvos com sucesso!", messageType: 'success'};
        case 'FETCHED':
            return {...state, userData: action.user, error: false, message:action.message, messageType:'success' };
        case 'FETCHED_EMPTY':
            return {...state, userData: action.user, error: false, message:action.message, messageType: 'alert'};
        case 'UPDATED':
            return {...state, userData: action.user, error: false, message:action.message, messageType: 'success' };
        case 'ADDIMAGE':
            return {error: false, message:'Imagem carregada com sucesso', messageType: 'success' };
        case 'ERROR':
            return { isPending: false, document: null, success: false, error: true, message:action.payload, messageType: 'error'};    
        default:
            return state
    }


}

export const useFirestore = (collectionDb, user) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const {document, error, message, userData, messageType} = response;
    const [isCancelled, setIsCancelled] = useState(false);
    const [ useId, setUseId ] = useState('');
    const [ showMessage, setShowMessage] = useState(false)
    const {handleMessage} = useMessageContext(message, showMessage, setShowMessage, error, messageType );
    const [isUpdating, setIsUpdating] = useState(false);
    const [imageUploadProgress, setImageUploadProgress] = useState(0);

  
     useEffect(()=>{
        handleMessage()
       
      },[handleMessage])
    

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
            

            console.log('ID',addedDocument.id)
            //setUseId(addedDocument.id)
            //dispatchIfIsNotCancelled({type:'ADDED_DOCUMENT', payload: addedDocument})
            console.log(doc)
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
   

    //fetching document
    useEffect( () =>{
        try{
          const getUserProfile = async () =>{
            let ref = collection(db, 'userProfile');
            ref = query(ref, where('uid' ,'==', user.uid))
            const data = await getDocs(ref);
            const dataArray = (data.docs.map( doc =>({...doc.data(), id:doc.id } )))
            const userDetails = dataArray[0]
            if(userDetails){

                dispatch({type:'FETCHED', user:userDetails }) 
            } else {
                setShowMessage(true)

                dispatch({type:'FETCHED_EMPTY', message:'Adicione o seus dados' }) 
            }

        }
            getUserProfile()  
        
        }catch(error){
          console.log(error)
        }
         
       
    },[user.uid]); 

   //updating document
    const updateDetails = async (value) => {
          setIsUpdating(true)
  
          try{
              const userDoc = doc(db, "userProfile", useId || userData.id)
              const newFields = value
              await updateDoc(userDoc, newFields )
              dispatch({type:'UPDATED', user:userData, message:'Dados atualizados com sucesso'})
            
              setIsUpdating(true)
              setShowMessage(true)
        

          }catch(err){
              dispatch({type:'ERROR',payload:'Ocorreu um erro, tente novamente'}) 
              setShowMessage(true)
           
      
          }
         
          setIsUpdating(false)

    }
 
    //adding images
    const uploadImage = (e, setUserPhoto, imageOwner) =>{
        const metadata = {
            customMetadata:{
               'imageOwner':imageOwner     
            } 
          }; 
        const file = e.target[0]?.files[0];
        const FileRef = ref(storage,`ProfilePhotos/${imageOwner}/${file.name}`);
                
             const uploadTask = uploadBytesResumable(FileRef, file ,metadata); 
             uploadTask.on(
                 "state_changed",
                 snapshot => {
                     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                     setImageUploadProgress(progress)
                     setShowMessage(true)
                     dispatch({type:'ADDIMAGE'})

                 },
                 error => {
                    setShowMessage(true)
                    dispatch({type:'ERROR',payload:'Não foi possível carregar a imagem, tente novamente'}) 
                    console.log(error)
                 },
                 ()=> {
                     getDownloadURL(uploadTask.snapshot.ref).then(url => {
                        //atribuindo poto de perfil
                         updateProfile(auth.currentUser, { photoURL: url })
                         setUserPhoto(url)
                     })
                 }
             ) 

         

    }

    return{ document, updateDetails, isUpdating, addDocument, deleteDocument,userData, uploadImage }

}




