import React, { useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import auth from './Firebase';

const Googleauth = () => {
  const [user, setUser] = useState(null);

  // Google Sign-In Function
  const signup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      alert("fghjklvghjgh")
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log('Access Token:', token);
      console.log('User Info:', result.user); // Display user info
    //   setUser(result.user); // Save user info to state
    } catch (err) {
      console.error('Sign-in Error:', err.message);
    }
  };

  // Logout Function
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      alert('Logged out successfully');
    } catch (err) {
      console.error('Logout Error:', err.message);
    }
  };

  
  // Listen for Authentication State Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Save user info if logged in
      } else {
        setUser(null); // Reset user info if logged out
      }
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-5">
      {user ? (
        <div className="text-center">
          <p>Welcome, {user.displayName}!</p>
          <img
            src={user.photoURL}
            alt="User Profile"
            className="rounded-circle"
            style={{ width: '100px', height: '100px', marginBottom: '15px' }}
          />
          <button
            onClick={logout}
            className="btn btn-danger d-flex align-items-center justify-content-center gap-2 w-100 p-2"
            style={{
              fontSize: '1rem',
              fontWeight: '500',
              borderRadius: '8px',
              transition: 'background-color 0.3s, color 0.3s',
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={signup}
          className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2 w-100 p-2"
          style={{
            fontSize: '1rem',
            fontWeight: '500',
            borderRadius: '8px',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          Sign up with Google
        </button>
      )}
    </div>
  );
};

export default Googleauth;
