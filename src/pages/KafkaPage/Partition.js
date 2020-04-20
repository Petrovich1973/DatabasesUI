import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import * as type from '../../constants/actionTypes'
import {useParams, useRouteMatch} from 'react-router-dom'

const Partition = (props) => {
    const {partitions = []} = props
    const match = useRouteMatch()
    const {id} = useParams()

    const {
        name = null,
        role = null,
        status = null
    } = partitions.find(item => item.id === +id) || {}

    useEffect(() => {
        props.dispatch({
            type: type.KAFKA_BREADCRUMBS_UPDATE,
            payload: {clusterChildSecondName: {label: name, path: match.url}}
        })
        return () => {
            props.dispatch({
                type: type.KAFKA_BREADCRUMBS_UPDATE,
                payload: {clusterChildSecondName: {label: name, path: null}}
            })
        }
    }, [match.url])

    return (
        <div>
            <div>
                <small><em>Partition</em></small>
                &nbsp;
                <span style={{fontSize: '120%'}}>{name}</span>
            </div>
            &nbsp;
            <div>
                <table className="table md">
                    <tbody>
                    <tr>
                        <td>role</td>
                        <td>{role}</td>
                    </tr>
                    <tr>
                        <td>status</td>
                        <td>{status}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

Partition.displayName = 'Partition'

export default connect()(Partition)