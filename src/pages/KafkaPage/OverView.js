import React from 'react'

const OverView = (props) => {
    const {cluster = {}} = props
    const {
        host = null,
        topics: {
            totalTopic = cluster.topics.total
        },
        partitions: {
            totalPart = cluster.partitions.total,
            online = null,
            inSync = null,
            outOfSync = null,
            underReplicated = null
        },
        controllerId = null,
        system: {
            cpu = null,
            disk = null,
            ram = null
        }
    } = cluster
    return (
        <div>
            <table className="table md">
                <tbody>
                <tr>
                    <td className="align-right"><small>host</small></td>
                    <td>{host}</td>
                    <td/>
                    <td className="align-right"><small>topics</small></td>
                    <td>{totalTopic}</td>
                    <td colSpan={3}/>
                </tr>
                <tr>
                    <td className="align-right"><small>partitions</small></td>
                    <td>{totalPart}</td>
                    <td/>
                    <td className="align-right"><small>online</small></td>
                    <td>{online}</td>
                    <td colSpan={3}/>
                </tr>
                <tr>
                    <td className="align-right"><small>in Sync</small></td>
                    <td>{inSync}</td>
                    <td/>
                    <td className="align-right"><small>out Of Sync</small></td>
                    <td>{outOfSync}</td>
                    <td colSpan={3}/>
                </tr>
                <tr>
                    <td className="align-right"><small>under Replicated</small></td>
                    <td>{underReplicated}</td>
                    <td/>
                    <td className="align-right"><small>controller Id</small></td>
                    <td>{controllerId}</td>
                    <td colSpan={3}/>
                </tr>
                <tr>
                    <td className="align-right">cpu</td>
                    <td>{cpu}</td>
                    <td/>
                    <td className="align-right">disk</td>
                    <td>{disk}</td>
                    <td/>
                    <td className="align-right">ram</td>
                    <td>{ram}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OverView