const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const router = require('./routes/routes')



app.use('/', router )


app.listen(port, ()=>{
    console.log("Servido ligado na porta "+port );
})