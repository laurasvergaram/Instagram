import React from 'react';
import HistoryCard from '../HistoryCard/History';

const HistoryLayout = () => {
  return (
    <div
      style={{ ..._stylesLayout.history_container }}>
      <HistoryCard image='https://picsum.photos//70/70' />
    </div>
  );
};

const _stylesLayout = {
  history_container: {
    margin: 0,
    paddingTop: 0,
    width: '612px',
    height: '110px',
    backgroundColor: 'white',
    border: '1px solid #DBDBDB',
    position: 'absolute',
    justifyContent: 'center',
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
  },
};

export default HistoryLayout;