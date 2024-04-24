const express = require('express');
const{ PORT} = require('./config/server.config');

// when we call the function express we create a new express server object

const app = express();  //http server object 

//express middleware 

function m1(req , res ,next){
    console.log('Inside Middleware m1');
    next();

}
function m2(req , res , next){
    console.log('Inside Middleware m2');
    next();
}


app.get('/home', m1 , m2 , (req,res) => {
    //everytime someone calls the /home route , this callback will be called
    
    return res.json({msg :'Welcome home'});

}) 


app.listen(PORT, ()=>{
    console.log(`Started server at port: ${PORT} `);
}) 