const express = require('express')
const Router = express.Router()
const model = require('./model')

const User = model.getModel('user')

Router.get('/list', (req, res) => {
    const {type} = req.query
    User.find({type}, function (err, doc) {
        return res.json(
            {
                code: 0,
                data: doc
            })
    })
})

Router.post('/login', (req, res) => {
    const {user, pwd} = req.body
    User.findOne({user: user, pwd: pwd}, {pwd: 0}, function (err, doc) {
        if (doc) {
            res.cookie('userId', doc['_id'])
            console.log("info", doc)
            return res.json({code: 0, msg: "success", data: doc})
        }
        return res.json({code: 1, msg: "用户名密码错误"})
    })
})

Router.post('/update', (req, res) => {

    const userId = req.cookies.userId
    if (!userId) {
        return res.json({code: 1})
    }
    const body = req.body
    console.log('update:', body)
    User.findByIdAndUpdate(userId, body, function (err, doc) {
        const data = {
            user: doc.user,
            type: doc.type,
            avatar: body.avatar
        }
        return res.json({code: 0, data: data})
    })

})

Router.get('/info', (req, res) => {
    const {userId} = req.cookies
    if (!userId) {
        return res.json({code: 1})
    }
    User.findOne({_id: userId}, {pwd: 0}, function (err, doc) {
        if (err) {
            return res.json({code: 5})
        }
        if (doc) {
            console.log("info", doc)
            return res.json({code: 0, data: doc})
        }
    })
})

Router.post('/register', (req, res) => {
    console.log(req.body)
    const {user, pwd, type} = req.body
    User.findOne({user: user}, function (err, doc) {
        if (doc) {
            return res.json({code: 1, msg: "用户名重复"})
        }
        User.create({user, pwd, type}, function (err, doc) {
            if (err) {
                return res.json({code: 1, msg: "error"})
            }
            User.findOne({user: user}, {pwd: 0}, function (err, doc) {
                if (err) {
                    return res.json({code: 5})
                }
                res.cookie('userId', doc['_id'])
                return res.json({code: 0, data: doc})
            })
        })
    })

})

module.exports = Router
