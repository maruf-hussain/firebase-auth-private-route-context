import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../components/firebase.init"


// ...............Auth Context .............................create....................
export  const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()


// Auth Provider main componetn.....................................................
export default function AuthProvider({children}) {
    // State Managment...................................................
    const [user,setUser] = useState(null)



// Register email and password............................................
const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
}

// Sign In email,password..................................................
const signInUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
}


// Google signIn .................................................
const googleSignIn = ()=>{
  return signInWithPopup(auth,googleProvider)
}

// Sign Out.........................................................
const signOutUser = () =>{
    return signOut(auth)
}




// ...........Auth State Change
useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth,currentUser =>{
    
    setUser(currentUser)
  })

  return ()=>{
    unSubscribe();
  } 

},[])




// ......Send Params any componet include login and register page.........................
    const authInfo = {
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
        user,
    }






  return (
   <AuthContext.Provider value={authInfo}>
        {children}
   </AuthContext.Provider>
  )
}
