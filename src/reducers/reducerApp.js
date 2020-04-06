import * as type from '../constants/actionTypes'

const initialState = {
    isVisible: false,
    position: [0, 0],
    menuItems: []
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