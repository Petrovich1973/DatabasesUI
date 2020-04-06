import * as type from '../constants/actionTypes'

const initialState = {
    current: {
        version: '',
        user: {
            name: '',
            rights: ['VIEW_ALL', 'WRITE_ALL', 'KAFKA_USE']
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case type.APP_UPDATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default reducer