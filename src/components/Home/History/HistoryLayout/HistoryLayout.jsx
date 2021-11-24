import React from 'react';
import HistoryCard from '../HistoryCard/HistoryCard';

const HistoryLayout = () => {
    return (
        <div
        style={{ ..._stylesLayout.history_container }}>
            <HistoryCard/>

        </div>
    );
};

const _stylesLayout = {
    history_container: {
      margin: 0,
      paddingTop: 0,
      width: '612px',
      height: '110px',
      backgroundColor: 'red',
      borderBottom: '1px solid #DBDBDB',
      position: 'fixed',
      justifyContent: 'center',
      display: 'flex',
      flexFlow:'row',
      alignItems:'center',
    },
  };

export default HistoryLayout;