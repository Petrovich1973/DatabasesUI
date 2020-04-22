import React from 'react'
import classnames from 'classnames'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

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
        if (value < 30) return '#46a546'
        if (value < 80) return '#ffc40d'
        return '#c3325f'
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
                    <td className={classnames(cpuColor(cpu))}>
                        <span style={{height: 100, width: 100, display: 'inline-block'}}>
                <CircularProgressbar
                    value={cpu}
                    text={`${cpu}%`}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0,
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                        // Text size
                        textSize: '26px',
                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,
                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',
                        // Colors
                        pathColor: `${cpuColor(cpu)}`,
                        textColor: `${cpuColor(cpu)}`,
                        trailColor: 'rgba(255,255,255, .2)',
                        backgroundColor: 'red',
                    })}
                />
            </span>
                    </td>
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