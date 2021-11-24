import React from 'react';
import HomeLayout from '../HomeLayout/HomeLayout';
import HeaderLayout from '../Header/HeaderLayout/HeaderLayout';
import HistoryLayout from '../History/HistoryLayout/HistoryLayout';

const InstaLayout = () => {
  return (
    <div>
      <div
        style={{ ..._stylesLayout.head_container }}
      >
        <HeaderLayout />
      </div>

      <div
        style={{ ..._stylesLayout.history_container }}
      >
        <HistoryLayout />
      </div>


      <div
        style={{ ..._stylesLayout.home_container }}
      >
        <HomeLayout />
      </div>

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
    position: 'absolute',
    justifyContent: 'center',
    display: 'flex',
    zIndex: 5,

  },
  home_container: {
    margin: 0,
    paddingTop: 60,
    width: '100%',
    height: '10000px',
    backgroundColor: '#FAFAFA',
    position: 'absolute',
    justifyContent: 'center',
    display: 'flex',
    zIndex: 1,
  },
  history_container: {
    marginTop: 90,
    width: '100%',
    height: '110px',
    backgroundColor: '#fafafa',
    position: 'absolute',
    justifyContent: 'center',
    display: 'flex',
    zIndex: 3,
  }
};

export default InstaLayout;