import React from 'react';
import Header from '../HeaderContent/Header';

const HeaderLayout = () => {
    return (
        <div style={{ ..._stylesLayout.head_container }}>
          <Header/>
        </div>
    );
};

const _stylesLayout = {
    head_container: {
      margin: 0,
      paddingTop: 0,
      width: '100%',
      height: '56px',
      backgroundColor: 'white',
      borderBottom: '1px solid #DBDBDB',
      position: 'fixed',
      justifyContent: 'center',
      display: 'flex',
    },
  };

export default HeaderLayout;