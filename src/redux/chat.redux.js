import axios from 'axios'

import io from 'socket.io-client'
const socket = io('ws://localhost:9000')


const MSG_LIST = 'MSG_LIST'
const MSG_RECV = 'MSG_RECV'
const MSG_READ = 'MSG_READ'


const initState = {
    chatmsg: [],
    users: {},
    unread: 0,
}

export function chat(state=initState, action) {
    switch (action.type) {
        case MSG_LIST:
            return {...state, users: action.payload.users, chatmsg: action.payload.msgs, unread: action.payload.msgs.filter(v=>!v.read).length}
        case MSG_RECV:
            return {...state, chatmsg: [...state.chatmsg, action.payload]}
        case MSG_READ:

        default:
            return state
    }

}

export function getMsgList() {
    return dispatch=>{
        axios.get('/user/msglist').then(res=>{
            if(res.status == 200 && res.data.code == 0) {
                const msgs = res.data.data.msgs
                const users = res.data.data.users
                dispatch({type: MSG_LIST, payload: {msgs: msgs, users: users}})
            }
        })
    }
}

export function sendMsg(from, to, msg) {
    return dispatch=> {
        socket.emit('sendmsg', {from: from, to: to, text: msg})
    }
}

export function recvMsg() {
    return dispatch => {
        socket.on('recvmsg', function(data) {
            console.log('recvmsg', data)
            dispatch({type: MSG_RECV, payload: data})
        })
    }
}

