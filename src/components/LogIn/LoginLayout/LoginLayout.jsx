import React from 'react';
import LogInImage from '../LoginCard/ImageCellphone/LogInImage';
import LogIn from '../LoginCard/LogInData/login';

const LoginLayout = () => {
    return (
        <div style={_stylesLayout.container}>
            <div className="padre" style={_stylesLayout.login_container}>
                <div className="cellphone">
                    <LogInImage/>
                    
                </div>
                <div className="login">
                    <LogIn/>
                </div>
            </div>
        </div>
       
    );
};

const _stylesLayout = {
    container:{
        backgroundColor:'#FAFAFA',
        display: 'flex',
        height:'100vh',
        width:'100vw',
    },
    login_container: {
      backgroundColor: '#FAFAFA',
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'center',
      width:'100vw',
      height:'70vh',
      marginTop:60,

    }
  };

export default LoginLayout;