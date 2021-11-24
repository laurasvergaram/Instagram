import React from 'react';
import HomeCard from '../HomeCard/home'

const HomeLayout = () => {
  return (
    <div
      style={{ ..._stylesLayout.container }}
    >
      <HomeCard image='https://picsum.photos//610/630' />
      <HomeCard image='https://picsum.photos//610/630' />
      <HomeCard image='https://picsum.photos//610/630' />
      <HomeCard image='https://picsum.photos//610/630' />
      <HomeCard image='https://picsum.photos//610/630' />
      <HomeCard image='https://picsum.photos//610/630' />
      <HomeCard image='https://picsum.photos//610/630' />
      <HomeCard image='https://picsum.photos//610/630' />
      <HomeCard image='https://picsum.photos//610/630' />
      <HomeCard image='https://picsum.photos//610/630' />

    </div>
  );
};

const _stylesLayout = {
  container: {
    marginTop: 170,
    width: 612,
    height: 901,
    backgroundColor: '#fafafa',
    position: 'absolute',
    display: 'flex',
    flexFlow: 'column',
    borderRadius: 3,
  },
};

export default HomeLayout;