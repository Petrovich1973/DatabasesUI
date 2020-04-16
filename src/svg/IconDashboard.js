import React from 'react';

export const IconDashboard = props => {
    const {width = 14, height = 14} = props
    return (
        <svg
            style={{width, height}}
            viewBox="0 0 384 384"
            fill="currentColor"
        >
            <rect x="213.333" y="0" width="170.667" height="128"/>
            <rect x="0" y="0" width="170.667" height="213.333"/>
            <rect x="0" y="256" width="170.667" height="128"/>
            <rect x="213.333" y="170.667" width="170.667" height="213.333"/>
        </svg>
    )
}