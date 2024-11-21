import React from 'react'
import Signin from './Signin';
// import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { signInWithPopup ,GoogleAuthProvider} from 'firebase/auth';
import auth from './Firebase';

const Googleauth = () => {
    console.log("hello");
    async function singup(){
        console.log("second");
       const provider=new GoogleAuthProvider()
       await signInWithPopup(auth,provider)
        .then((result)=>{
                console.log("result");
                const data=GoogleAuthProvider.credentialFromResult(result)
                console.log(data);  
        })
        .catch((err)=>{
            console.log(err);
            
        })
       
        
    }
    
  return (
   <>
   <button onClick={singup}>sign up with google</button> </>
  )
}

export default Googleauth