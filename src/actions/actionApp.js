import axios from 'axios'

import * as types from '../constants/actionTypes'
import * as api from "../constants/api"

const handleCatch = (error, timeRequest) => {
    try {
        console.log('handleCatch', error.response.status, error.response.data)
    } catch (e) {
        console.dir(error.message)
    }
    // if (!error.response) {
    //     // network error
    // } else {
    //     // http status code
    //     const code = error.response.status
    //     // response data
    //     const response = error.response.data
    // }
}

const getReducerKafka = () => (dispatch, getState) => getState().reducerKafka

// Clusters

export const loadClusters = ({params = {}}) => {
    return dispatch => {

        const timeRequest = Date.now()

        dispatch({
            type: types.KAFKA_UPDATE,
            payload: {
                waiting: timeRequest
            }
        })

        axios.get(`${api.kafka_clusters}`, {
            params
        })
            .then((response) => {
                const isActualResponse = dispatch(getReducerKafka()).waiting === timeRequest
                if(isActualResponse) {
                    dispatch({
                        type: types.KAFKA_UPDATE,
                        payload: {
                            clusters: response.data,
                            waiting: null,
                            firstReq: true
                        }
                    })
                }
            })
            .catch(error => {
                dispatch({
                    type: types.KAFKA_UPDATE,
                    payload: {
                        clusters: initializeClusters, // заглушка
                        waiting: null,
                        firstReq: true
                    }
                })
                handleCatch(error, timeRequest)
            })
    }
}

export const loadCluster = id => {
    return dispatch => {

        const timeRequest = Date.now()

        dispatch({
            type: types.KAFKA_UPDATE,
            payload: {
                waitingCluster: timeRequest
            }
        })

        axios.get(`${api.kafka_clusters}/${id}`)
            .then((response) => {
                const isActualResponse = dispatch(getReducerKafka()).waitingCluster === timeRequest
                if(isActualResponse) {
                    dispatch({
                        type: types.KAFKA_UPDATE,
                        payload: {
                            cluster: response.data,
                            waitingCluster: null,
                            firstReqCluster: true
                        }
                    })
                }
            })
            .catch(error => {
                dispatch({
                    type: types.KAFKA_UPDATE,
                    payload: {
                        cluster: {name: `id ${id} not found`},
                        waitingCluster: null,
                        firstReqCluster: true,
                    }
                })
                handleCatch(error, timeRequest)
            })
    }
}

// Topics

export const loadTopics = ({params = {}}) => {
    return dispatch => {

        const timeRequest = Date.now()

        dispatch({
            type: types.KAFKA_UPDATE,
            payload: {
                waitingTopics: timeRequest
            }
        })

        axios.get(`${api.kafka_clusters}/${dispatch(getReducerKafka()).cluster.id}/topics`, {
            params
        })
            .then((response) => {
                const isActualResponse = dispatch(getReducerKafka()).waitingTopics === timeRequest
                if(isActualResponse) {
                    dispatch({
                        type: types.KAFKA_UPDATE,
                        payload: {
                            topics: response.data,
                            waitingTopics: null,
                            firstReqTopics: true
                        }
                    })
                }
            })
            .catch(error => {
                dispatch({
                    type: types.KAFKA_UPDATE,
                    payload: {
                        topics: initializeTopics, // заглушка
                        waitingTopics: null,
                        firstReqTopics: true
                    }
                })
                handleCatch(error, timeRequest)
            })
    }
}


////////////////////////////////////////////////////////////////

const initializeClusters = [
    {
        id: 1010,
        name: 'clusterName_000',
        host: 'localhost:9100',
        topics: {
            total: 23
        },
        partitions: {
            total: 78,
            online: 17,
            inSync: 58,
            outOfSync: 20,
            underReplicated: 0
        },
        controllerId: 32461,
        system: {
            cpu: 27,
            disk: '1000Gb/1200Gb',
            ram: '1320Mb/2400Mb'
        }
    },
    {
        id: 1,
        name: 'clusterName_001',
        host: 'localhost:4100',
        topics: {
            total: 42
        },
        partitions: {
            total: 82,
            online: 17,
            inSync: 58,
            outOfSync: 20,
            underReplicated: 0
        },
        controllerId: 32461,
        system: {
            cpu: 82,
            disk: '2000Gb/3000Gb',
            ram: '6200Mb/240000Mb'
        }
    },
    {
        id: 2,
        name: 'clusterName_002',
        host: 'localhost:2100',
        topics: {
            total: 24
        },
        partitions: {
            total: 81,
            online: 17,
            inSync: 58,
            outOfSync: 20,
            underReplicated: 0
        },
        controllerId: 32461,
        system: {
            cpu: 67,
            disk: '1000Gb/2000Gb',
            ram: '7200Mb/8400Mb'
        }
    },
    {
        id: 3,
        name: 'clusterName_003',
        host: 'localhost:3130',
        topics: {
            total: 34
        },
        partitions: {
            total: 66,
            online: 47,
            inSync: 88,
            outOfSync: 21,
            underReplicated: 1
        },
        controllerId: 72461,
        system: {
            cpu: 97,
            disk: '7800Gb/9200Gb',
            ram: '350Mb/800Mb'
        }
    },
    {
        id: 4,
        name: 'clusterName_004',
        host: 'localhost:4430',
        topics: {
            total: 94
        },
        partitions: {
            total: 16,
            online: 88,
            inSync: 22,
            outOfSync: 73,
            underReplicated: 3
        },
        controllerId: 12461,
        system: {
            cpu: 96,
            disk: '1000Gb/120000Gb',
            ram: '6200Mb/24000Mb'
        }
    },
    {
        id: 5,
        name: 'clusterName_005',
        host: 'localhost:4550',
        topics: {
            total: 935
        },
        partitions: {
            total: 106,
            online: 288,
            inSync: 722,
            outOfSync: 173,
            underReplicated: 343
        },
        controllerId: 12461,
        system: {
            cpu: 60,
            disk: '1000Gb/120000Gb',
            ram: '16200Mb/24000Mb'
        }
    }
]

const initializeTopics = [
    {
        id: 1010,
        name: 'topicrName_000',
        messagesRead: 45,
        messagesWrite: 45,
        underReplicated: 23,
        inSync: 89,
        outOfSync: 36,
        bytesInPerSec: 81,
        bytesOutPerSec: 17
    },
    {
        id: 1,
        name: 'topicrName_001',
        messagesRead: 75,
        messagesWrite: 75,
        underReplicated: 13,
        inSync: 39,
        outOfSync: 32,
        bytesInPerSec: 41,
        bytesOutPerSec: 77
    },
    {
        id: 2,
        name: 'topicrName_002',
        messagesRead: 78,
        messagesWrite: 56,
        underReplicated: 23,
        inSync: 74,
        outOfSync: 52,
        bytesInPerSec: 55,
        bytesOutPerSec: 23
    }
]