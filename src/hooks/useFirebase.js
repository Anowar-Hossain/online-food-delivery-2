import { GoogleAuthProvider,getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import firebaseInitialization from "../firebase/firebase.int";

firebaseInitialization();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoding, setIsLoding] = useState(true);
    const auth = getAuth();

    const handleGoogleSignIn = () => {
        setIsLoding(true);
        const Googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth, Googleprovider)
        .then(result => {
            setUser(result.user);
        })
        .finally(()=> setIsLoding(false));
       }

      //logOut
      const logOut = () => {
        setIsLoding(true);
        signOut(auth)
        .then(() => {
         setUser({})
        });
    } 

    return{
        logOut,
        handleGoogleSignIn,
        user,
        setUser,
        isLoding
        
    }
 
}

export default useFirebase;