import React from 'react'
import {useParams} from 'react-router-dom'
import TitlePage from "../../components/TitlePage"

const Broker = (props) => {
    const {brokers = []} = props
    const {id} = useParams()

    const {
        name = null,
        version = '2.0.4',
        address = 'localhost:3445',
        controller = 452,
        velocity = '345/23'
    } = brokers.find(item => item.id === +id) || {}

    return (
        <div>
            <TitlePage label={<span>broker - {name}<span className="btn">&#9874;</span></span>} tag={'h5'} className={'titlePage align-center'}/>
            <div className="flex-center panel-gray">
                <table className="table md">
                    <tbody>
                    <tr>
                        <td>version</td>
                        <td>{version}</td>
                    </tr>
                    <tr>
                        <td>address</td>
                        <td>{address}</td>
                    </tr>
                    <tr>
                        <td>controller</td>
                        <td>{controller}</td>
                    </tr>
                    <tr>
                        <td>velocity</td>
                        <td>{velocity}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Broker