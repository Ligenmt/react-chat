import axios from 'axios'
import {getRedirectPath} from "../util";

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
const ERROR_MSG = 'ERR_MSG'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
    isAuth: '',
    user: '',
    pwd: '',
    type: '',
}

export function user(state=initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...state, msg:'', redirectTo: getRedirectPath(action.payload), isAuth:true, ...action.payload}
        case LOGIN_SUCCESS:
            return {...state, msg:'', redirectTo: getRedirectPath(action.payload), isAuth:true, ...action.payload}
        case UPDATE_SUCCESS:
            return {...state, msg:'', redirectTo: getRedirectPath(action.payload), isAuth:true, ...action.payload}
        case ERROR_MSG:
            return {...state, msg:action.msg, isAuth:false,}
        default:
            return state
    }
    return state
}

function registerSuccess(data) {
    return {type: REGISTER_SUCCESS, payload: data}
}

function loginSuccess(data) {
    return {type: LOGIN_SUCCESS, payload: data}
}

function updateSuccess(data) {
    return {type: UPDATE_SUCCESS, payload: data}
}

function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}

export function loadData(data) {
    return {type: LOAD_DATA, payload: data}
}

export function login({user, pwd}) {
    if(!user || !pwd) {
        return errorMsg('用户名密码必须输入')
    }
    return dispatch => {
        axios.post('/user/login', {user, pwd}).then(res=>{
            if (res.data.code === 0) {
                dispatch(loginSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function register({user, pwd, type}) {
    if (!user || !pwd) {
        return errorMsg('用户名密码必须输入')
    }
    return dispatch => {
        axios.post('/user/register', {user, pwd, type}).then(res=>{
            if (res.data.code === 0) {
                dispatch(registerSuccess({user, pwd, type}))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function update(data) {
    return dispatch => {
        axios.post('/user/update', data).then(res=>{
            if (res.data.code === 0) {
                dispatch(updateSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}