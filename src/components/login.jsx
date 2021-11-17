import React from "react";
import {authentication} from "../firebase/firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button';

const LogIn = () => {

  const history = useNavigate();

    const signInWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((result) => {
          console.log(result);
          const userEmail= result.user.email;

          localStorage.setItem('email',userEmail);

          console.log("El email es: ",userEmail);

        })
        .catch((error) => {
          console.log(error);
        })
      }
    
      return( 
        <div className="botonGoogle">
          <GoogleButton onClick={()=>{
            signInWithGoogle()
            history("/home")
          }}>
            Sign In
          </GoogleButton>
        </div>
      );
    }
    
export default LogIn;