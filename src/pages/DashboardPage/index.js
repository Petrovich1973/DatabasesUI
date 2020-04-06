import React, { useEffect } from 'react'
import TitlePage from "../../components/TitlePage";

const DashboardPage = (props) => {
    const { title = 'Наименование страницы' } = props

    useEffect(() => {
        document.title = title
    })

    return (
        <div>
            <TitlePage label={title}/>
            <h2>Dashboard Page</h2>
            <h3>Dashboard Page</h3>
            <h4>Dashboard Page</h4>
            <h5>Dashboard Page</h5>
            <h6>Dashboard Page</h6>
            <p>Dashboard Page</p>
        </div>
    )
}

export default DashboardPage
