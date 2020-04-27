import axios from 'axios'

import * as types from '../constants/actionTypes'
import * as api from "../constants/api"

const handleCatch = (error) => {
    try {
        console.log('handleCatch', error)
    } catch (e) {
        console.log(e)
    }
}

const getReducerKafka = () => (dispatch, getState) => getState().reducerKafka

export const loadClusters = ({params = {}}) => {
    return dispatch => {

        const timeRequest = Date.now()

        dispatch({
            type: types.KAFKA_UPDATE,
            payload: {
                waiting: [...dispatch(getReducerKafka()).waiting, timeRequest]
            }
        })

        axios.get(`${api.kafka_clusters}`, {
            params
        })
            .then((response) => {
                dispatch({
                    type: types.KAFKA_UPDATE,
                    payload: {
                        clusters: response.data,
                        waiting: dispatch(getReducerKafka()).waiting.filter(time => time !== timeRequest),
                        firstReq: true
                    }
                })
            })
            .catch(error => {
                dispatch(handleCatch(error))
            })
    }
}