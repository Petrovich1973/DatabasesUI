import React from 'react'
import {Link} from 'react-router-dom'

const Breadcrumbs = (props) => {
    const {items = []} = props

    return (
        <div>
            {items.map((item, i) => <Link key={i} to={item.path}>{item.name}</Link>)}
        </div>
    )
}

export default Breadcrumbs