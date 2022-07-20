import axios from "axios";
import { REACT_APP_BE } from '@env'

export const doLogin = (body) => {
    return axios.post(`${REACT_APP_BE}/auth`, body)
};
export const doRegister = (body) => {
    return axios.post(`${REACT_APP_BE}/auth/new`, body)
};
export const getProduct = () => {
    return axios.get(`${REACT_APP_BE}/product?limit=5`)
};
export const getListProduct = () => {
    return axios.get(`${REACT_APP_BE}/product`)
};
export const getProductFav = () => {
    return axios.get(`${REACT_APP_BE}/product/best`)
};
export const getProfile = (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get(`${REACT_APP_BE}/user`, config)
};
export const addTransaction = (body, config) => {
    return axios.post(`${REACT_APP_BE}/transaction`, body, config)
};
export const showTransaction = (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get(`${REACT_APP_BE}/transaction`, config)
};
export const editProfile = (body, config) => {
    return axios.patch(`${REACT_APP_BE}/user`, body, config)

}

