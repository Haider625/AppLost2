const mongoose = require('mongoose');

const lost2 = mongoose.Schema({
    name : String  ,
    country : String ,
    typeLost : String ,
    lssuer : String ,
    YersLost : Date ,
    historyLost : Date,
    PhoneNumber : Number,
    note : String,
})

module.exports= mongoose.model('LOST',lost2)