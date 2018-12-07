const mongoose = require('mongoose')
const URI = ''

mongoose.connect(URI)

const models = {
    user: {
        user: {type:String, require: true},
        pwd: {type:String, require: true},
        type: {type:String, require: true},
        avatar: {type:String},
        desc: {type:String},
        title: {type:String},
        //boss
        company: {type:String},
        money: {type:String},
    },
    chat: {

    }
}

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function (name) {
        return mongoose.model(name)
    }
}
