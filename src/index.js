const express = require('express');
const{ PORT} = require('./config/server.config');
const bodyParser = require('body-parser'); 

// when we call the function express we create a new express server object

const app = express();  //http server object 

//2.middleware to access req body which are present in different format
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());


//1.express middleware 

function m1(req , res ,next){
    console.log('Inside Middleware m1');
    next();

}
function m2(req , res , next){
    console.log('Inside Middleware m2');
    next();
}


app.get('/products/:product_id/rating/:rate', m1 , m2 , (req,res) => {
    //everytime someone calls the /home route , this callback will be called
    //:id part is variable and products are static
    //:id part is your url params and overall these kind of routes are called as dynamic routes
    console.log(req.params);
    const pid = req.params.product_id;
    return res.json({productId: pid , rating :req.params.rate});


}) 

//different data format
app.post('/data',(req,res)=>{
    console.log(req.body);
    return res.json({msg:'ok'});
})




app.listen(PORT, ()=>{
    console.log(`Started server at port: ${PORT} `);
}) 

// how can client send custom data to the server
//there are three ways
//1.URL params
//2.Query param
//3.Request body