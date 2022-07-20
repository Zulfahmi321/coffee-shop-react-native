import { addProductString, resetCartString } from "../actionCreators/actionString"

const initialState = {
    cart: {}
}

const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case addProductString:
            return { ...state, cart: action.payload }
        case resetCartString:
            return { ...initialState }
        default:
            return { ...state }
    }
}

export default addToCartReducer