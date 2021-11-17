import React from 'react';
import {authentication} from "../firebase/firebase"
import { useNavigate } from "react-router-dom";



const Home = () => {

    const history = useNavigate();


    const signOut = () =>{
        authentication.signOut();
    }

    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={()=>{
                signOut()
                history("/")
              }}
            >Sign out</button>
        </div>
    );
};

export default Home;