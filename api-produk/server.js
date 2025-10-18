const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const produkRoute=require('./routes/produkRoute.js')

const app=express()
    app.use(cors())
    app.use(bodyParser.json())

    app.use('/api/products',produkRoute)

    const PORT = 3000
    app.listen(PORT,()=>{
        console.log(`server berjalan di http://localhost:${PORT}`);
        
    })
