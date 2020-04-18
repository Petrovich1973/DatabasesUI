import React from 'react';

export const IconTopic = props => {
    const {size = '100%', style = {}, color = null} = props
    return (
        <svg
            style={style}
            height={size}
            fill={color || "currentColor"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 139 119"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path d="M0 0H139V82.4571H69.5L34.75 119V82.4571H0V0Z"/>
        </svg>
    )
}