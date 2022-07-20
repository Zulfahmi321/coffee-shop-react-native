import { addProductString, resetCartString } from "./actionString"


export const addProductAction = (product) => {
    return {
        type: addProductString,
        payload: product,
    }
}

export const resetCartAction = () => {
    return {
        type: resetCartString,
    }
}