import React from 'react';

const InstaImage = (props) => {
    return (
        <div>
            <img src={props.image} alt="no carga" />
        </div>
    );
};

export default InstaImage;