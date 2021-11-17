import React from 'react';
import {authentication} from "../firebase/firebase"
import { useNavigate } from "react-router-dom";

const Home = () => {

    const history = useNavigate();

    const signOut = () =>{
        authentication.signOut();
    }
    return (
        <div className="home">
            <h1>Welcome</h1>
            {localStorage.getItem('email')} {/*mientras la pestaña esté abierta - para guardar cuando cierre es session storage*/}
            <button 
                onClick={()=>{
                signOut()
                history("/")
              }}
            >Sign out</button>
        </div>
    );
};

export default Home;