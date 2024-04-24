const express = require('express');
const{ PORT} = require('./config/server.config');


const app = express();

app.get('/home', (req,res) => {
    return res.json({msg :'Welcome home'});
})

app.listen(PORT, ()=>{
    console.log(`Started server at port: ${PORT} `);
}) 