const app=require('./app')
const mongoose=require('mongoose')
require('dotenv').config()

const PORT=process.env.PORT||9999

const serverURI='http://localhost:'+PORT
const mongoURI= process.env.MONGO_URI

app.listen(PORT,()=> console.log('server'+serverURI))

mongoose
.set('useCreateIndex',true)//fixa diprecation warning// hur varan data sparas 
.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    () => console.log('connected to DB'))