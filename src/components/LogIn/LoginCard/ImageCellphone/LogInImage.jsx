import React from 'react';
import Phone from '../../../../Images/phone-frame.png';


const LogInImage = () => {
    return (
        <div style={{ ..._stylesLayout.container }}>
            <img style={_stylesLayout.phone_frame} src={Phone} alt="phone-frame" />
            <div style={_stylesLayout.image_phone}>
                <img style={_stylesLayout.image} src="https://picsum.photos//240/427" alt="img" />
            </div>
        </div>
    );
};

const _stylesLayout = {
    container: {
        backgroundColor: '#FAFAFA',
        margin: 0,
        padding: 0,
        display: 'flex'

    },
    phone_frame: {
        position: 'relative',
        zIndex: 1,
    },
    image_phone: {
        zIndex: 2,
        position: 'relative',
    },
    image: {
        zIndex: 2,
        position: 'absolute',
        left: -303,
        top: 99,

    }
};
export default LogInImage;