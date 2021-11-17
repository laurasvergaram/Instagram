import React from "react";
import {authentication} from "../firebase/firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const LogIn = () => {

  const history = useNavigate();

    const signInWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        })
      }
    
      return( 
        <div>
          <button onClick={()=>{
            signInWithGoogle()
            history("/home")
          }}>
            Sign In
          </button>
        </div>
      );
    }
    
export default LogIn;