import React, { useState } from "react";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
        setUser(logInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={handleGoogleSignOut}>login out</button>
      ) : (
        <button onClick={handleGoogleSingIn}>Google login</button>
      )}

      {user && (
        <div>
          <h1>{user.displayName}</h1>
          <h2>{user.email}</h2>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
