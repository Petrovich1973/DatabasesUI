import * as type from '../constants/actionTypes'

const initialState = {
    current: {
        version: '1.0.0',
        user: {
            name: 'SBT-Tanko-IP',
            rights: [/*'VIEW_ALL', 'WRITE_ALL',*/ 'KAFKA_USE']
        }
    },
    breadcrumbsKafka: {
        clusters: {label: 'Clusters', path: null},
        clusterName: {label: 'clusterName', path: null},
        clusterChild: {label: 'clusterChild', path: null},
        clusterChildName: {label: 'clusterChildName', path: null},
        clusterChildSecond: {label: 'clusterChildSecond', path: null},
        clusterChildSecondName: {label: 'clusterChildSecondName', path: null},
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case type.APP_UPDATE:
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