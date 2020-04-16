import React from 'react'
import './TitlePage.less'

const TitlePage = ({icon = null, label = '', tag = 'h1', className = 'titlePage'}) => {
    const element = React.createElement
    return element(tag, {className}, <>{icon}<span>{label}</span></>)
}

export default TitlePage