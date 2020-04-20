import React from 'react'
import classnames from 'classnames'

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

    const cpuColor = value => {
        if (value < 30) return 'green'
        if (value < 80) return 'yellow'
        return 'red'
    }

    return (
        <div>
            <table className="table md">
                <tbody>
                <tr>
                    <td className="align-right label">
                        <small>host</small>
                    </td>
                    <td><small>{host}</small></td>
                    <td/>
                    <td className="align-right label">
                        <small>topics</small>
                    </td>
                    <td>{totalTopic}</td>
                    <td colSpan={3}/>
                </tr>
                <tr>
                    <td className="align-right label">
                        <small>partitions</small>
                    </td>
                    <td>{totalPart}</td>
                    <td/>
                    <td className="align-right label">
                        <small>online</small>
                    </td>
                    <td>{online}</td>
                    <td colSpan={3}/>
                </tr>
                <tr>
                    <td className="align-right label">
                        <small>in Sync</small>
                    </td>
                    <td>{inSync}</td>
                    <td/>
                    <td className="align-right label">
                        <small>out Of Sync</small>
                    </td>
                    <td>{outOfSync}</td>
                    <td colSpan={3}/>
                </tr>
                <tr>
                    <td className="align-right label">
                        <small>under Replicated</small>
                    </td>
                    <td>{underReplicated}</td>
                    <td/>
                    <td className="align-right label">
                        <small>controller Id</small>
                    </td>
                    <td>{controllerId}</td>
                    <td colSpan={3}/>
                </tr>
                <tr>
                    <td className="align-right label">cpu</td>
                    <td className={classnames(cpuColor(cpu))}>{cpu}</td>
                    <td/>
                    <td className="align-right label">disk</td>
                    <td>{disk}</td>
                    <td/>
                    <td className="align-right label">ram</td>
                    <td>{ram}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OverView