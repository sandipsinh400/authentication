import React from 'react'
import Signin from './Signin';
// import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import auth from './Firebase';
// import { FaGoogle } from 'react-icons/fa';
const Googleauth = () => {
    console.log("hello");
    async function singup() {
        console.log("second");
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
            .then((result) => {
                console.log("result");
                const data = GoogleAuthProvider.credentialFromResult(result)
                console.log(data);
            })
            .catch((err) => {
                console.log(err);

            })


    }

    return (
        <>
            <button
                onClick={singup}
                className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2 w-100 p-2"
                style={{
                    fontSize: '1rem',
                    fontWeight: '500',
                    borderRadius: '8px',
                    transition: 'background-color 0.3s, color 0.3s',
                }}
            >
             
                Sign up with Google
            </button> </>
    )
}

export default Googleauth