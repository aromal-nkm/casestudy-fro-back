const express=require('express')
const routes=require('./routes/routes')
const app=express()
app.use('/routes',routes)
require('./db/connection')



app.set('view engine','ejs')
app.set('views',__dirname+'/views');



app.listen(3000,()=>{

    console.log('server running on port 3000')
})