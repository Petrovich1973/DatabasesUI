import React from 'react'
import './TitlePage.less'

const TitlePage = ({icon = null, label = ''}) => (
    <h1 className="titlePage">
        {icon}
        <span>{label}</span>
    </h1>
)

export default TitlePage