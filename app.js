const express = require('express');
const body_parser=require('body-parser');
const mongoose =require('mongoose');
const lost2_rout = require('./router/lost2');
const human_rout = require('./router/human');
const app = express();
const PORT =process.env.PORT || 2000;

mongoose.connect('mongodb://AppLost2:AppLost2@ac-suemgkj-shard-00-00.chagiax.mongodb.net:27017,ac-suemgkj-shard-00-01.chagiax.mongodb.net:27017,ac-suemgkj-shard-00-02.chagiax.mongodb.net:27017/?ssl=true&replicaSet=atlas-pfx6jx-shard-0&authSource=admin&retryWrites=true&w=majority',
{
    useNewUrlParser:true ,
    useUnifiedTopology : true,
    
});
const connection = mongoose.connection;
connection.on('error' , (res,req,next) => {
    console.log("connected  Erorr")
});
connection.on('connected' , (res,req,next) => {
    console.log("connected with cloud")
});

app.use([body_parser.urlencoded({extended :true}),express.json()])
app.use('/lost2',lost2_rout);
app.use('/human',human_rout);
app.listen(PORT,()=>{
    console.log("It is working")
})

module.exports=app;
