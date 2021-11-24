import React from "react";
import { authentication } from "../../../../firebase/firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button';
import InstagramLogo from '../../../../Images/Instagram_logo.png';


const LogIn = () => {

  const history = useNavigate();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        console.log(result);
        const userEmail = result.user.email;

        localStorage.setItem('email', userEmail);

        console.log("El email es: ", userEmail);

      })
      .then(() => {
        history("/home")
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div style={{ ..._stylesLayout.container }}>

      <div style={_stylesLayout.logo_container}>
        <img style={_stylesLayout.logo} src={InstagramLogo} alt="instagram-logo" />
      </div>

      <div className="inputs" >
        <input style={_stylesLayout.input} type="text" placeholder="Teléfono, usuario o correo electrónico" />
        <input style={_stylesLayout.input} type="text" placeholder="Contraseña" />
      </div>


      <div style={_stylesLayout.botonGoogle} className="botonGoogle">
        <GoogleButton onClick={() => {
          signInWithGoogle()
        }}>
          Sign In
        </GoogleButton>
      </div>


    </div>

  );
}

const _stylesLayout = {
  container: {
    backgroundColor: 'white',
    width: '350px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 2,
    borderColor: '#DBDBDB',
    borderStyle: 'solid',
    borderWidth: '1px',
    marginTop: 25,
    paddingTop: 20,
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    padding: '9px 0px 7px 9px',
    fontSize: '12px',
    width: '16rem',
    height: '1.2rem',
    outline: 'none',
    background: '#fafafa',
    border: '1px solid #efefef',
  },
  logo_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '15px',
  },
  logo: {
    maxWidth: '60%',
    paddinBottom: '100px',
  },
  botonGoogle: {
    marginTop: 15,
  }
};

export default LogIn;