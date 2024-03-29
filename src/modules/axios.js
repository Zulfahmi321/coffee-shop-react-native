import axios from "axios";
import { REACT_APP_BE, URL_DEPLOY } from '@env'

export const doLogin = (body) => {
    return axios.post(`${URL_DEPLOY}/auth`, body)
};
export const doRegister = (body) => {
    return axios.post(`${URL_DEPLOY}/auth/new`, body)
};
export const getProduct = () => {
    return axios.get(`${URL_DEPLOY}/product?limit=5`)
};
export const getListProduct = () => {
    return axios.get(`${URL_DEPLOY}/product`)
};
export const getProductFav = () => {
    return axios.get(`${URL_DEPLOY}/product/best`)
};
export const getProfile = (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get(`${URL_DEPLOY}/user`, config)
};
export const addTransaction = (body, config) => {
    return axios.post(`${URL_DEPLOY}/transaction`, body, config)
};
export const showTransaction = (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get(`${URL_DEPLOY}/transaction`, config)
};
export const editProfile = (newBody, config) => {
    return axios.patch(`${URL_DEPLOY}/user`, newBody, config)
};
export const forgotPassword = (email) => {
    return axios.get(`${URL_DEPLOY}/auth/forgotpassword/${email}`)
};
export const resetPassword = (body) => {
    return axios.patch(`${URL_DEPLOY}/user/reset`, body)
};
export const changePassword = (body, config) => {
    return axios.patch(`${URL_DEPLOY}/user/password`, body, config)
};
export const addProduct = (newBody, config) => {
    return axios.post(`${URL_DEPLOY}/product`, newBody, config)
};
export const editProduct = (id, newBody, config) => {
    return axios.patch(`${URL_DEPLOY}/product/${id}`, newBody, config)
};
export const addPromo = (body, config) => {
    return axios.post(`${URL_DEPLOY}/promos/new`, body, config)
};
export const getAllPromo = () => {
    return axios.get(`${URL_DEPLOY}/promos/all`)
};


