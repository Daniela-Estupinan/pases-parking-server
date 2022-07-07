const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    type:{
        type:String,
        required:true,
        max:255,
        min:6
    },
    pases:{
        type:Number,
    },
    date:{
        type:Date,
    }

});

module.exports = mongoose.model('User', userSchema);