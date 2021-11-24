import React from 'react';

const History = (props) => {
    return (
        <div
            style={{ ..._stylesCard.containerBig }}
        >
            <div
                style={{ ..._stylesCard.containerBigger }}
            >
                <div style={{ ..._stylesCard.container }}
                >
                    <img alt="no carga" style={{ ..._stylesCard.image }} src={props.image} />
                </div>
                <div
                    style={{ ..._stylesCard.user }}>
                    <p
                        style={_stylesCard.user_profile_name}
                    >
                        Tu historia
                    </p>
                </div>
            </div>

            <div
                style={{ ..._stylesCard.containerBigger }}

            >
                <div style={{ ..._stylesCard.container }}
                >
                    <img alt="no carga" style={{ ..._stylesCard.image }} src={props.image} />
                </div>
                <div
                    style={{ ..._stylesCard.user }}>
                    <p
                        style={_stylesCard.user_profile_name}
                    >
                        User
                    </p>
                </div>
            </div>

            <div
                style={{ ..._stylesCard.containerBigger }}

            >
                <div style={{ ..._stylesCard.container }}
                >
                    <img alt="no carga" style={{ ..._stylesCard.image }} src={props.image} />
                </div>
                <div
                    style={{ ..._stylesCard.user }}>
                    <p
                        style={_stylesCard.user_profile_name}
                    >
                        User
                    </p>
                </div>
            </div>

            <div
                style={{ ..._stylesCard.containerBigger }}

            >
                <div style={{ ..._stylesCard.container }}
                >
                    <img alt="no carga" style={{ ..._stylesCard.image }} src={props.image} />
                </div>
                <div
                    style={{ ..._stylesCard.user }}>
                    <p
                        style={_stylesCard.user_profile_name}
                    >
                        User
                    </p>
                </div>
            </div>

            <div
                style={{ ..._stylesCard.containerBigger }}

            >
                <div style={{ ..._stylesCard.container }}
                >
                    <img alt="no carga" style={{ ..._stylesCard.image }} src={props.image} />
                </div>
                <div
                    style={{ ..._stylesCard.user }}>
                    <p
                        style={_stylesCard.user_profile_name}
                    >
                        User
                    </p>
                </div>
            </div>

            <div
                style={{ ..._stylesCard.containerBigger }}

            >
                <div style={{ ..._stylesCard.container }}
                >
                    <img alt="no carga" style={{ ..._stylesCard.image }} src={props.image} />
                </div>
                <div
                    style={{ ..._stylesCard.user }}>
                    <p
                        style={_stylesCard.user_profile_name}
                    >
                        User
                    </p>
                </div>
            </div>

            <div
                style={{ ..._stylesCard.containerBigger }}

            >
                <div style={{ ..._stylesCard.container }}
                >
                    <img alt="no carga" style={{ ..._stylesCard.image }} src={props.image} />
                </div>
                <div
                    style={{ ..._stylesCard.user }}>
                    <p
                        style={_stylesCard.user_profile_name}
                    >
                        User
                    </p>
                </div>
            </div>

            <div
                style={{ ..._stylesCard.containerBigger }}

            >
                <div style={{ ..._stylesCard.container }}
                >
                    <img alt="no carga" style={{ ..._stylesCard.image }} src={props.image} />
                </div>
                <div
                    style={{ ..._stylesCard.user }}>
                    <p
                        style={_stylesCard.user_profile_name}
                    >
                        User
                    </p>
                </div>
            </div>

            <div
                style={{ ..._stylesCard.containerBigger }}

            >
                <div style={{ ..._stylesCard.container }}
                >
                    <img alt="no carga" style={{ ..._stylesCard.image }} src={props.image} />
                </div>
                <div
                    style={{ ..._stylesCard.user }}>
                    <p
                        style={_stylesCard.user_profile_name}
                    >
                        User
                    </p>
                </div>
            </div>

            <div
                style={{ ..._stylesCard.containerBigger }}

            >
                <div style={{ ..._stylesCard.container }}
                >
                    <img alt="no carga" style={{ ..._stylesCard.image }} src={props.image} />
                </div>
                <div
                    style={{ ..._stylesCard.user }}>
                    <p
                        style={_stylesCard.user_profile_name}
                    >
                        User
                    </p>
                </div>
            </div>

            <div
                style={{ ..._stylesCard.containerBigger }}

            >
                <div style={{ ..._stylesCard.container }}
                >
                    <img alt="no carga" style={{ ..._stylesCard.image }} src={props.image} />
                </div>
                <div
                    style={{ ..._stylesCard.user }}>
                    <p
                        style={_stylesCard.user_profile_name}
                    >
                        User
                    </p>
                </div>
            </div>

            <div
                style={{ ..._stylesCard.containerBigger }}

            >
                <div style={{ ..._stylesCard.container }}
                >
                    <img alt="no carga" style={{ ..._stylesCard.image }} src={props.image} />
                </div>
                <div
                    style={{ ..._stylesCard.user }}>
                    <p
                        style={_stylesCard.user_profile_name}
                    >
                        User
                    </p>
                </div>
            </div>

        </div>
    );
};

const _stylesCard = {
    containerBigger: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 3,

    },
    containerBig: {
        width: '610px',
        height: '90px',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        textOverflow: 'ellipsis',

        justifyContent: 'start',
        alignItems: 'center',
        zIndex: 3,

    },
    buttons: {
        width: '20px',
        height: '20px',
        zIndex: 4,
    },
    container: {
        width: '65px',
        height: '65px',
        padding: 0,
        background: 'linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',

    },
    image: {
        width: '87%',
        height: 'auto',
        objectFit: 'fill',
        display: 'flex',
        borderRadius: '50%',
        position: 'relative',
        alignSelf: 'stretch',
        padding: 2,
        background: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 2.5,
        marginTop: 1,
        cursor: 'pointer',
    },
    user: {
        width: '90px',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
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

export default History;