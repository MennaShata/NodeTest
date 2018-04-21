const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
   
const userSchema = new Schema({
    username:{ 
        type: String,
        lowercase:true
    },
    age: Number

});
const User = mongoose.model('User',userSchema,'User');
module.exports= User;