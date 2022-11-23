/* import { doc, updateDoc } from "firebase/firestore"


export const updateUser  = () => {

    const updateDetails = async (db, id, value) => {

        try{
            const userDoc = doc(db, "userProfile", id)
            const newFields = value
            await updateDoc(userDoc, newFields )
        }catch(err){
            console.log(err.message)
        }
       
    
    }

    return { updateDetails }
} */