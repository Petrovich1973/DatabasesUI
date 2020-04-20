import React, {useState} from 'react'

const OverView = (props) => {
    const {cluster = {}} = props
    const {
        id = null,
        name = null,
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
                    <td>host</td>
                    <td>{host}</td>
                    <td/>
                    <td>topics</td>
                    <td>{totalTopic}</td>
                    <td colSpan={3}/>
                </tr>
                <tr>
                    <td>partitions</td>
                    <td>{totalPart}</td>
                    <td/>
                    <td>online</td>
                    <td>{online}</td>
                    <td colSpan={3}/>
                </tr>
                <tr>
                    <td>in Sync</td>
                    <td>{inSync}</td>
                    <td/>
                    <td>out Of Sync</td>
                    <td>{outOfSync}</td>
                    <td colSpan={3}/>
                </tr>
                <tr>
                    <td>under Replicated</td>
                    <td>{underReplicated}</td>
                    <td/>
                    <td>controller Id</td>
                    <td>{controllerId}</td>
                    <td colSpan={3}/>
                </tr>
                <tr>
                    <td>cpu</td>
                    <td>{cpu}</td>
                    <td/>
                    <td>disk</td>
                    <td>{disk}</td>
                    <td/>
                    <td>ram</td>
                    <td>{ram}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OverView