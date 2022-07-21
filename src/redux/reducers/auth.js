import { FULFILLED, PENDING, REJECTED, loginString, logoutString } from "../actionCreators/actionString";

const initialState = {
    userInfo: {},
    isLoading: false,
    errMsg: null,
    msg: null,
    isSuccess: null,
    token: false,
    role: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginString + PENDING:
            return {
                ...state,
                isSuccess: null,
                errorMsg: null,
                isLoading: true
            }
        case loginString + FULFILLED:
            // console.log(action.payload.auth.msg);
            return {
                ...state,
                isLoading: false,
                msg: action.payload.data.data.msg,
                userInfo: action.payload.data.data,
                token: action.payload.data.data.token,
                isSuccess: true,
                role: action.payload.data.data.role
            }
        case loginString + REJECTED:
            return {
                ...state,
                errMsg: action.payload.response.data.err,
                isLoading: false,
                isSuccess: false
            }
        case logoutString:
            return {
                ...initialState
            }
        default:
            return state
    }
}

export default authReducer