import React from 'react';

const HistoryCard = () => {
    return (
        <div
        style={{..._stylesCard.container}}
        >
            <div
            style={{..._stylesCard.image}}>
                <svg
                style={{ ..._stylesCard.user_profile_image}}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"/></svg>        
                
            </div>

            <div
            style={{..._stylesCard.user}}>
                <p
                style={_stylesCard.user_profile_name}
                >
                User
                </p>
            </div>
        </div>
    );
};

const _stylesCard = {
    container: {
      width: '100px',
      height: '90px',
      backgroundColor: 'yellow',
      position: 'fixed',
      display: 'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    },
    image: {
        // backgroundColor: 'green',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
      },
    user: {
        width: '90px',
        height: '20px',
        // backgroundColor: 'blue',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
      },
      user_profile_image: {
        height: '65px',
        width: '65px',
        borderRadius: '50%',
      },
      user_profile_name: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        fontFamily: 'Sans-serif',
        fontSize: '12px',
        fontWeight: 500,
      },
  };

export default HistoryCard;