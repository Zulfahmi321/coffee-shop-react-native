import { combineReducers } from "redux";
import addToCartReducer from "./cart";
import authReducer from "./auth";
import getUserDataReducer from "./userdata";

const reducers = combineReducers({
    auth: authReducer,
    cart: addToCartReducer,
    user: getUserDataReducer,
})

export default reducers