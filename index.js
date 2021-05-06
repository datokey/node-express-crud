const express = require('express');
const app = express();
const port = 5000;
const router = require('./routes/router')

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/api', router)
 






app.listen(port, function(){
    console.log('app berjalan di localhost:'+port)
})