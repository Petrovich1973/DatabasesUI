import React from 'react';

export const IconOverview = props => {
    const {size = '100%', style = {}, color = null} = props
    return (
        <svg
            style={style}
            height={size}
            fill={color || "currentColor"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="M640 128l384 0 0 128-384 0 0-128zM870.31808 320l-294.31808 0 0-124.39552c-21.01248-2.37568-42.37312-3.60448-64-3.60448-223.31392 0-416.89088 130.048-512 320 95.10912 189.952 288.68608 320 512 320s416.8704-130.048 512-320c-37.39648-74.69056-90.03008-140.10368-153.68192-192zM416.01024 320c53.02272 0 96.01024 42.98752 96.01024 96.01024s-42.98752 96.01024-96.01024 96.01024-96.01024-42.98752-96.01024-96.01024 42.98752-96.01024 96.01024-96.01024zM764.45696 662.30272c-75.59168 48.20992-162.89792 73.70752-252.45696 73.70752s-176.86528-25.47712-252.45696-73.70752c-60.14976-38.37952-111.14496-89.76384-149.42208-150.30272 38.2976-60.5184 89.27232-111.9232 149.44256-150.30272 3.91168-2.49856 7.8848-4.9152 11.85792-7.29088-9.95328 27.32032-15.42144 56.832-15.42144 87.59296 0 141.37344 114.60608 256 256 256s256-114.62656 256-256c0-30.78144-5.44768-60.27264-15.40096-87.59296 3.97312 2.37568 7.94624 4.79232 11.85792 7.31136 60.17024 38.37952 111.14496 89.76384 149.44256 150.30272-38.2976 60.5184-89.27232 111.9232-149.44256 150.30272z"/>
        </svg>
    )
}