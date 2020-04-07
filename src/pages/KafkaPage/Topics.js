import React, {useState} from 'react'

const Topics = (props) => {
    const [topics] = useState(initializeTopics)

    return (
        <div className="flex-center">
            <table className="table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>имя</th>
                    <th>partitions</th>
                    <th>статус</th>
                </tr>
                </thead>
                <tbody>
                {topics.map((row, i) => {
                    const {
                        id = null,
                        name = '',
                        total_partitions = null,
                        status = null,
                    } = row
                    return (
                        <tr key={i}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>
                                <div className="align-right">{total_partitions}</div>
                            </td>
                            <td>{status}</td>
                        </tr>)
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Topics



const initializeTopics = [
    {
        id: 0,
        name: 'topicrName_001',
        total_partitions: 126,
        status: 'PROCESS',
    },
    {
        id: 1,
        name: 'topicrName_002',
        total_partitions: 56,
        status: 'WARNING',
    },
    {
        id: 2,
        name: 'topicrName_003',
        total_partitions: 27,
        status: 'ERROR',
    },
    {
        id: 3,
        name: 'topicrName_004',
        total_partitions: 87,
        status: 'PROCESS',
    },
    {
        id: 4,
        name: 'topicrName_005',
        total_partitions: 55,
        status: 'STOP',
    },
    {
        id: 5,
        name: 'topicrName_006',
        total_partitions: 97,
        status: 'PROCESS',
    },
    {
        id: 6,
        name: 'topicrName_007',
        total_partitions: 29,
        status: 'PROCESS',
    },
]
