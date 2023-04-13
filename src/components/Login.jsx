import React from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  return (
    <div>
      <button>Google login</button>
    </div>
  );
};

export default Login;
