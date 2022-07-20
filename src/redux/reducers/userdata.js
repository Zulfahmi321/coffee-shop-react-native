import { FULFILLED, getUserDataString, logoutString, PENDING, REJECTED } from "../actionCreators/actionString"

const initialState = {
    user: [],
    isLoading: false,
    err: null,
    isSuccess: null,
    isLoggedIn: false,
    id: null
}

const getUserDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case getUserDataString + PENDING:
            return { ...state, err: null, isLoading: true }
        case getUserDataString + FULFILLED:
            return { ...state, isLoading: false, user: action.payload.data.data.data[0], id: action.payload.data.data.data[0].id, isSuccess: true, isLoggedIn: true }
        case getUserDataString + REJECTED:
            return { ...state, err: action.payload.data, isLoading: false, isSuccess: false }
        case logoutString:
            return { ...initialState }
        default:
            return { ...state };
    }
}

export default getUserDataReducer
