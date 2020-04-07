import React, {useState} from 'react'

const Brokers = (props) => {
    const [brokers] = useState(initializeBrockeers)

    return (
        <div className="flex-center">
            <table className="table">
                <thead>
                <tr>
                    <th>broker ID</th>
                    <th>Версия</th>
                    <th>адрес broker</th>
                    <th>controller ID</th>
                    <th>Скорость in/out</th>
                </tr>
                </thead>
                <tbody>
                {brokers.map((row, i) => (
                    <tr key={i}>
                        <td><div className="align-right">{row.id}</div></td>
                        <td>{row.version}</td>
                        <td><small>{row.address}</small></td>
                        <td><div className="align-right">{row.controller}</div></td>
                        <td>{row.velocity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Brokers

const initializeBrockeers = [
    {id: 0, version: '2.0.4', address: 'localhost:3445', controller: 452, velocity: '345/23'},
    {id: 1, version: '2.0.4', address: 'localhost:3446', controller: 453, velocity: '145/53'},
    {id: 2, version: '2.0.4', address: 'localhost:3447', controller: 454, velocity: '342/8'},
    {id: 3, version: '2.0.4', address: 'localhost:3448', controller: 455, velocity: '45/203'},
    {id: 4, version: '2.0.4', address: 'localhost:3449', controller: 456, velocity: '815/723'},
    {id: 5, version: '2.0.4', address: 'localhost:3450', controller: 457, velocity: '86/35'}
]
