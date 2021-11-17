import './App.css';
import {Routes, Route} from 'react-router-dom';
import LogIn from './components/login';
import Home from './components/home';
import { useState } from 'react';
import {authentication} from "./firebase/firebase"

function App() {
  const [isUserSignedIn, setUserSignedIn] = useState(true);
  authentication.onAuthStateChanged((user)=>{
    if(user){
      return setUserSignedIn(true);
    }
    setUserSignedIn(false);
  })
if(isUserSignedIn === true){
    return( 
    <div>
        <Routes>
          <Route path="/home" element={<Home/>}/>
        </Routes>
    </div>
  );
}

else{
    return( 
    <div className="AAAAAAAAa">
        <Routes>
          <Route path="/" element={<LogIn/>}/>
        </Routes>
    </div>
  );
}

}
export default App;
