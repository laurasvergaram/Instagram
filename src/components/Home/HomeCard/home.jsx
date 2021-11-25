import React from 'react';
import InstaImage from './Image/InstaImage';
import UserInfo from './User/UserInfo'

const hover = (e) => {
    e.target.style.fill = '#C6C6C6';
}
const noHover = (e) => {
    e.target.style.fill = 'black';
}

const hoverUser = (e) => {
    e.target.style.textDecoration = 'underline';

}
const noHoverUser = (e) => {
    e.target.style.textDecoration = 'none';

}


const Home = (props) => {

    return (
        <div className="home"
            style={{ ..._stylesCard.card }}
        >
            <div
                style={{ ..._stylesCard.cardh }}
            >
                <UserInfo />
                <svg
                    style={_stylesCard.elipsis}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z" /></svg>
            </div>

            <div
                style={{ ..._stylesCard.cardi }}
            >
                <InstaImage image={props.image} />
            </div>

            <div
                style={{ ..._stylesCard.cardr }}
            >
                <div
                    style={_stylesCard.reactions}
                >
                    <svg
                        style={_stylesCard.heart}
                        onMouseEnter={hover} onMouseLeave={noHover}

                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" /></svg>
                    <svg
                        style={_stylesCard.comment}
                        onMouseEnter={hover} onMouseLeave={noHover}

                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z" /></svg>
                    <svg
                        style={_stylesCard.send}
                        onMouseEnter={hover} onMouseLeave={noHover}

                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z" /></svg>
                </div>
                <svg
                    style={_stylesCard.save}
                    onMouseEnter={hover} onMouseLeave={noHover}

                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z" /></svg>

            </div>

            <div
                style={{ ..._stylesCard.cardc }}
            >
                <div
                    style={_stylesCard.likes}
                >
                    <p style={_stylesCard.likesText}>
                        1,089 Me gusta
                    </p>
                </div>
                <div
                    style={_stylesCard.description}
                >
                    <p
                        onMouseEnter={hoverUser} onMouseLeave={noHoverUser}
                        style={_stylesCard.descriptionuserText}>
                        User
                    </p>
                    <p style={_stylesCard.descriptionText}>
                        Having Fun!
                    </p>
                </div>
                <div
                    style={_stylesCard.comments}
                >
                    <p style={_stylesCard.commentsText}>
                        Ver los 215 comentarios
                    </p>
                </div>
                <div
                    style={_stylesCard.time}
                >
                    <p style={_stylesCard.timeText}>
                        HACE 4 HORAS
                    </p>
                </div>
            </div>

            <div
                style={{ ..._stylesCard.cardci }}
            >
                <svg
                    style={_stylesCard.smile}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z" /></svg>

                <input
                    style={_stylesCard.commentInput}
                    type="text" placeholder='Agrega un comentario...' />

                <p style={_stylesCard.commentInputText}>
                    Publicar
                </p>
            </div>
        </div>
    );
};

const _stylesCard = {
    card: {
        marginBottom: 25,
        border: '1px solid #DBDBDB',


    },
    cardh: {
        backgroundColor: 'white',
        height: 60,
        width: 610,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardi: {
        backgroundColor: 'white',
        height: 630,
        width: 610,
    },
    cardr: {
        backgroundColor: 'white',
        height: 50,
        width: 610,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardc: {
        backgroundColor: 'white',
        height: 110,
        width: 610,
        borderBottom: '1px solid #DBDBDB',

    },
    cardci: {
        backgroundColor: 'white',
        height: 50,
        width: 610,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',


    },
    image: {
        width: '100%',
        height: 'auto',
        objectFit: 'fill',
        borderRadius: '16px',
        position: 'relative',
        zIndex: '1',
        alignSelf: 'stretch',
    },
    reactions: {
        height: 50,
        width: 130,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    elipsis: {
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        display: 'flex',
        cursor: 'pointer',
        marginRight: '15px',
        justifyContent: 'center',
    },
    heart: {
        height: '23px',
        width: '23px',
        borderRadius: '30%',
        padding: 2,
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'center',
    },
    comment: {
        height: '23px',
        width: '23px',
        borderRadius: '30%',
        padding: 2,
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'center',
    },
    send: {
        height: '23px',
        width: '23px',
        borderRadius: '30%',
        padding: 2,
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'center',
    },
    save: {
        height: '23px',
        width: '23px',
        borderRadius: '30%',
        padding: 2,
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'center',
        marginRight: 10,
    },
    likes: {
        display: 'flex',
        backgroundColor: 'white',
        height: 25,
        alignItems: 'center',

    },
    likesText: {
        marginLeft: '15px',
        height: '1.5em',
        width: '60%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        fontFamily: 'Sans-serif',
        fontSize: '14px',
        fontWeight: 800,
        cursor: 'pointer',
    },
    description: {
        display: 'flex',

        backgroundColor: 'white',
        height: 25,
        alignItems: 'center',

    },
    descriptionText: {
        marginLeft: '0px',
        height: '1.5em',
        width: '60%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        fontFamily: 'Sans-serif',
        fontSize: '14px',
        fontWeight: 500,
    },
    descriptionuserText: {
        marginLeft: '15px',
        height: '1.5em',
        width: '6%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        fontFamily: 'Sans-serif',
        fontSize: '14px',
        fontWeight: 800,
        cursor: 'pointer',
    },
    comments: {
        display: 'flex',
        cursor: 'pointer',
        height: 25,
        alignItems: 'center',
        color: '#C2C2C2',

    },
    commentsText: {
        marginLeft: '15px',
        height: '1.5em',
        width: '60%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        fontFamily: 'Sans-serif',
        fontSize: '14px',
        fontWeight: 500,
    },
    time: {
        display: 'flex',
        alignItems: 'center',
        height: 21,
        color: '#C2C2C2',

    },
    timeText: {
        marginLeft: '15px',
        height: '1.5em',
        width: '60%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        fontFamily: 'Sans-serif',
        fontSize: '10px',
        fontWeight: 500,
        cursor: 'pointer',

    },
    commentInput: {
        display: 'flex',
        alignItems: 'center',
        width: '500px',
        marginLeft: '10px',
        fontSize: 14,
        borderWidth: 0,
        cursor: 'text',
    },
    commentInputText: {
        marginLeft: '15px',
        height: '1.5em',
        width: '70px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        fontFamily: 'Sans-serif',
        fontSize: '14px',
        fontWeight: 800,
        color: '#B2E3FD',
        cursor: 'default',
    },
    smile: {
        height: '25px',
        width: '25px',
        borderRadius: '30%',
        padding: 2,
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'center',
        marginLeft: '15px',

    },


};

export default Home;