const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const userRoutes=require('./routes/userRoute')

const app=express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api/users', userRoutes)

const PORT =3000
app.listen(PORT,()=>{
    console.log(`server berjalan di htpp://localhost:${PORT}`);
})