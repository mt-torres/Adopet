import { doc, updateDoc } from "firebase/firestore"

export const updateUser  = () => {



    const updateDetails = async (db, id, value) => {

        const userDoc = doc(db, "userProfile", id)
        const newFields = value 
        await updateDoc(userDoc, newFields )
    
    }

    return { updateDetails }
}