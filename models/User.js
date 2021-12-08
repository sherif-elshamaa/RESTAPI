let mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type: 'string',
        required: true,
    },
    age: Number,
    phone: String,
    createdAt: {
        type: Date,
        default: ()=> Date.now(),
    },
    updatedAt:{
        type: Date,
        default: ()=> Date.now(),
    }
})

module.exports = mongoose.model('User', userSchema);