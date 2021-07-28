const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const contactSchema = new Schema({

    name: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    messsage: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Contact',contactSchema)