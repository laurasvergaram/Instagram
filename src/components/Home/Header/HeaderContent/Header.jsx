import React from 'react';
import InstagramLogo from '../../../../Images/Instagram_logo.png';


// hover
const hover = (e) => {
    e.target.style.cursor = "pointer";
  }
  const noHover = (e) => {
    e.target.style.cursor = "default";
  }

  

const Header = () => {
    return (
        <div
      style={{ ..._stylesHead.s_head }}
    >
      {/* ESTO ES EL LOGO, BOTON DE INICIO Y BOTON DE HOY */}
      <div
        style={{ ..._stylesHead.s_inicioHead }}
      >
        <div 
          style={_stylesHead.logo_container}
          onMouseEnter={hover} onMouseLeave={noHover}>
            <img style={_stylesHead.logo}src={InstagramLogo} alt="instagram-logo" />
        </div>

      </div>

      {/* esto es el input con el svg */}
      <div
        style={{ ..._stylesHead.s_input_search }}
      >
        <svg
          style={{ ..._stylesHead.s_search }}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#767676" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
        </svg>
        <input
          type="text" placeholder="Buscar"
          style={{ ..._stylesHead.s_input }} />
      </div>

      {/* ESTO ES SVG HOME,MESSAGE,PUBLISH,NAV,LIKE*/}
      <div
        style={{ ..._stylesHead.s_finalHead }}
      >
        <svg
          style={{ ..._stylesHead.home }}
          onMouseEnter={hover} onMouseLeave={noHover}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg>
        <svg
          style={{ ..._stylesHead.message }}
          onMouseEnter={hover} onMouseLeave={noHover}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"/></svg>
        <svg
          style={{ ..._stylesHead.publish }}
          onMouseEnter={hover} onMouseLeave={noHover}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"/></svg>
        <svg
          style={{ ..._stylesHead.nav}}
          onMouseEnter={hover} onMouseLeave={noHover}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M347.94 129.86L203.6 195.83a31.938 31.938 0 0 0-15.77 15.77l-65.97 144.34c-7.61 16.65 9.54 33.81 26.2 26.2l144.34-65.97a31.938 31.938 0 0 0 15.77-15.77l65.97-144.34c7.61-16.66-9.54-33.81-26.2-26.2zm-77.36 148.72c-12.47 12.47-32.69 12.47-45.16 0-12.47-12.47-12.47-32.69 0-45.16 12.47-12.47 32.69-12.47 45.16 0 12.47 12.47 12.47 32.69 0 45.16zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"/></svg>
        <svg 
          style={{ ..._stylesHead.like }}
          onMouseEnter={hover} onMouseLeave={noHover}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/></svg>
        <svg
          style={{ ..._stylesHead.nav}}
          onMouseEnter={hover} onMouseLeave={noHover}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"/></svg>        
      </div>


    </div>
    );
};

const _stylesHead = {
    s_head: {
      // marginLeft: '1vw',
      padding: 0,
      height: '56px',
      width: '930px',
      // borderRadius: '16px',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    s_inicioHead: {
      display: 'flex',
      alignItems: 'center',
    },
    logo_container:{
      display:'flex',
      flexDirection:'column',
      alignItems:'left',
      // width:250,
      // backgroundColor:'blue'
      // marginBottom:'15px',
    },
    logo:{
      maxWidth:'110px',
    },
    s_input_search: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '120px',
      width: '210px',
    },
    s_search: {
      width: '10px',
      height: '10px',
      position: 'absolute',
      paddingLeft: '13px'
    },
    s_input: {
      display: 'flex',
      width: '100%',
      height: '25px',
      borderRadius: '3px',
      border: '1px solid #DBDBDB',
      backgroundColor: '#FAFAFA',
      fontSize: '14px',
      paddingLeft: '25px',
      color: '#555753',
    },
    s_finalHead: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
    },
    home: {
      minWidth: '25px',
      minHeight: '25px',
      maxWidth: '25px',
      maxHeight: '25px',
      padding: '10px',
      backgroundColor: 'white',
      // borderRadius: '50%'
    },
    message: {
      minWidth: '21px',
      minHeight: '21px',
      maxWidth: '21px',
      maxHeight: '21px',
      padding: '10px',
      backgroundColor: 'white',
      // borderRadius: '50%'
    },
    publish: {
      minWidth: '21px',
      minHeight: '21px',
      maxWidth: '21px',
      maxHeight: '21px',
      padding: '10px',
      backgroundColor: 'white',
      // borderRadius: '50%'
    },
    nav: {
      minWidth: '21px',
      minHeight: '21px',
      maxWidth: '21px',
      maxHeight: '21px',
      padding: '10px',
      backgroundColor: 'white',
      // borderRadius: '50%'
    },
    like: {
      minWidth: '21px',
      minHeight: '21px',
      maxWidth: '21px',
      maxHeight: '21px',
      padding: '10px',
      backgroundColor: 'white',
      // borderRadius: '50%'
    },
  };


export default Header;