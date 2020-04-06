import React, { useEffect } from 'react'

const DashboardPage = (props) => {
    const { title } = props

    useEffect(() => {
        document.title = title
    }, [])

    return (
        <div>
            <h1>Dashboard Page</h1>
        </div>
    )
}

export default DashboardPage
