import React from 'react';

const hover = (e) => {
    e.target.style.cursor = "pointer";
    e.target.style.textDecoration='underline';

  }
  const noHover = (e) => {
    e.target.style.cursor = "default";
    e.target.style.textDecoration='none';

  }

const UserInfo = () => {
    return (
        <div>
            <div
            style={_stylesUserInfo.userData}
            >
                <svg
                style={{ ..._stylesUserInfo.user_profile_image}}
                onMouseEnter={hover} onMouseLeave={noHover}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"/></svg>        
                <p
                style={_stylesUserInfo.user_profile_name}
                onMouseEnter={hover} onMouseLeave={noHover}

                >
                User
                </p>
            </div>
        </div>
    );
};

const _stylesUserInfo = {
    userData: {
      display: 'flex',
      cursor: 'pointer',
      height:'60px',
      width:'120px',
      marginLeft:'15px',
      alignItems:'center',
    },
    user_profile_image: {
      height: '35px',
      width: '35px',
      borderRadius: '50%',
    },
    user_profile_name: {
      marginLeft: '15px',
      height: '1.5em',
      width: '60%',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      fontFamily: 'Sans-serif',
      fontSize: '14px',
      fontWeight: 800,
    },
  };



export default UserInfo;