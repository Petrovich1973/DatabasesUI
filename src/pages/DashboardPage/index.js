import React, {useEffect} from 'react'
import TitlePage from "../../components/TitlePage"
import {IconKafka, IconFolder, IconTopic, IconDelete, IconDashboard} from "../../svg"
import Button from "../../components/Button"

const DashboardPage = (props) => {
    const {title = 'Наименование страницы'} = props

    useEffect(() => {
        document.title = title
    })

    return (
        <div className="align-center">
            &nbsp;
            <TitlePage icon={<IconDashboard size={'1em'}/>} label={title} className="flex-center"/>
            <h2>h2 Dashboard Page</h2>
            <h3>h3 Dashboard Page</h3>
            <h4>h4 Dashboard Page</h4>
            <h5>h5 Dashboard Page</h5>
            <h6>h6 Dashboard Page</h6>
            <p>Some text <a href="/">Link some text</a> text text text</p>
            <p>
                <Button icon={<IconTopic/>} text={'Button lg'} className="lg"/>
                <Button icon={<IconKafka/>} text={'Button lg'} className="lg border"/>
                <Button text={'Button lg'} className="lg red"/>
            </p>
            <p>
                <Button text={'Button'}/>
                <Button icon={<IconDelete/>} text={'Button border and radius'} className="white border radius"/>
                <Button icon={<IconKafka/>} text={'Button border and radius'} className="violet border radius"/>
                <Button text={'Button border'} className="border"/>
            </p>
            <p>
                <Button icon={<IconDelete/>} text={'Button sm'} className="sm red"/>
                <Button text={'Button sm'} className="sm orange"/>
                <Button text={'Button sm'} className="sm yellow"/>
                <Button icon={<IconFolder/>} text={'Button sm'} className="sm blue border radius"/>
                <Button text={'Button sm'} className="sm"/>
                <Button text={'Button sm'} className="sm border"/>
                <Button text={'Button sm'} className="sm black"/>
            </p>
            <p>
                <Button text={'Button sl'} className="sl"/>
                <Button text={'Button sl long context'} className="black sl"/>
                <Button text={'Name button'} className="border radius sl"/>
            </p>
            <p>
                <Button icon={<IconFolder/>}/>
                <Button icon={<IconTopic/>}/>
                <Button icon={<IconKafka/>}/>
            </p>
        </div>
    )
}

export default DashboardPage
