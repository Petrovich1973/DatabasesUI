import React, {useEffect} from 'react'
import TitlePage from "../../components/TitlePage"
import {IconKafka, IconFolder, IconTopic, IconDelete} from "../../svg"

const DashboardPage = (props) => {
    const {title = 'Наименование страницы'} = props

    useEffect(() => {
        document.title = title
    })

    return (
        <div className="align-center">
            <TitlePage label={title}/>
            <h2>h2 Dashboard Page</h2>
            <h3>h3 Dashboard Page</h3>
            <h4>h4 Dashboard Page</h4>
            <h5>h5 Dashboard Page</h5>
            <h6>h6 Dashboard Page</h6>
            <p>Some text <a href="#">Link some text</a> text text text</p>
            <p>
                <span className="button">
                    <button className="btn lg">
                        <span className="svg"><IconTopic/></span>
                        <span>Button lg</span>
                    </button>
                </span>
                <span className="button">
                    <button className="btn border lg">
                        <span className="svg"><IconKafka/></span>
                        <span>Button lg</span>
                    </button>
                </span>
                <span className="button">
                    <button className="btn red lg">
                        <span className="svg"><IconDelete/></span>
                        <span>Button lg</span>
                    </button>
                </span>
            </p>
            <p>
                <span className="button">
                    <button className="btn">Button</button>
                </span>
                <span className="button">
                    <button className="btn white radius border">
                        <span className="svg"><IconKafka/></span>
                        <span>Button border and radius</span>
                    </button>
                </span>
                <span className="button">
                    <button className="btn violet radius border">
                        <span className="svg"><IconKafka/></span>
                        <span>Button border and radius</span>
                    </button>
                </span>
                <span className="button">
                    <button className="btn border">Button border</button>
                </span>
            </p>
            <p>
                <span className="button">
                    <button className="btn sm red">Button sm</button>
                </span>
                <span className="button">
                    <button className="btn sm orange">Button sm</button>
                </span>
                <span className="button">
                    <button className="btn sm yellow">Button sm</button>
                </span>
                <span className="button">
                    <button className="btn sm border blue radius">Button sm</button>
                </span>
                <span className="button">
                    <button className="btn sm green">Button sm</button>
                </span>
                <span className="button">
                    <button className="btn sm">Button sm</button>
                </span>
                <span className="button">
                    <button className="btn border sm">Button sm</button>
                </span>
                <span className="button">
                    <button className="btn black sm">Button sm</button>
                </span>
            </p>
            <p>
                <span className="button">
                    <button className="btn sl">
                        <span className="svg"><IconTopic/></span>
                        <span>Button sl</span>
                    </button>
                </span>
                <span className="button">
                    <button className="btn black sl">
                        <span className="svg"><IconFolder/></span>
                        <span>Button sl long context</span>
                    </button>
                </span>
                <span className="button">
                    <button className="btn border sl">Button sl</button>
                </span>
            </p>
        </div>
    )
}

export default DashboardPage
