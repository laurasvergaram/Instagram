import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { authentication } from "./firebase/firebase"
import LoginLayout from './components/LogIn/LoginLayout/LoginLayout';
import InstaLayout from './components/Home/InstaLayout/InstaLayout';

function App() {
  const [isUserSignedIn, setUserSignedIn] = useState(true);
  authentication.onAuthStateChanged((user) => {
    if (user) {
      return setUserSignedIn(true);
    }
    setUserSignedIn(false);
  })
  if (isUserSignedIn === true) {
    return (
      <div>
        <Routes>
          <Route path="/home" element={<InstaLayout />} />
        </Routes>
      </div>
    );
  }

  else {
    return (
      <div>
        <Routes>
          <Route path="/" element={<LoginLayout />} />
        </Routes>
      </div>
    );
  }

}
export default App;
