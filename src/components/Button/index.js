import React from 'react'
import classnames from 'classnames'
import './Button.less'

const Button = ({icon = null, text = null, className = '', onClick = Function}) => {

    return (
        <span className="button">
            <button className={classnames("btn", className)} onClick={() => onClick()}>
                {icon && <span className="svg">{icon}</span>}
                {text && <span>{text}</span>}
                {!icon && !text && <span>Button</span>}
            </button>
        </span>
    )
}

export default Button