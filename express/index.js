const express =require("express")
const app = express()
const productRoutes = require("./routes/product.js")

app.use(express.json())
app.use('/product', productRoutes)

const PORT=3000

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`)
})