import * as type from '../constants/actionTypes'

const initialState = {
    breadcrumbsKafka: {
        clusters: {label: 'Clusters', path: null},
        clusterName: {label: 'clusterName', path: null},
        clusterChild: {label: 'clusterChild', path: null},
        clusterChildName: {label: 'clusterChildName', path: null},
        clusterChildSecond: {label: 'clusterChildSecond', path: null},
        clusterChildSecondName: {label: 'clusterChildSecondName', path: null},
    },

    clusters: [],
    waiting: null,
    firstReq: false,

    cluster: {},
    waitingCluster: null,
    firstReqCluster: false,

    topics: {},
    waitingTopics: null,
    firstReqTopics: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case type.KAFKA_UPDATE:
            return {
                ...state,
                ...action.payload
            }
        case type.KAFKA_BREADCRUMBS_UPDATE:
            return {
                ...state,
                breadcrumbsKafka: {
                    ...state.breadcrumbsKafka,
                    ...action.payload
                }
            }
        default:
            return state
    }
}

export default reducer