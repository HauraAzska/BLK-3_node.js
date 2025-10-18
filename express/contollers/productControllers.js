let products=[
    {id:1,name:"Product A",prices:1000},
    {id:2,name:"Product B",prices:2000}
]

exports.getAllProduct=(req,res)=>{
    res.status(200).json(products)
}

exports.getProductById=(req,res)=>{
    const id = parseInt(req.params.id)
    const product = products.find(p => p.id ===id)
    if (!product) return res.status(400).json({message:"product tidak ditemukan"})
        res.status(200).json(product)
}

exports.createProduct = (req,res) => {
    const {name,prices} = req.body
    if (typeof name!=="string" &&  typeof prices !== 'number') {return res.status(400).json("input tidak valid")
    }
const newProduct={
    id:products.length? Math.max(...products.map(p => p.id))+1:1,
    name,
    prices
}

products.push(newProduct)
res.status(201).json(newProduct)
}

exports.updateProduct=(req,res)=>{
const id=parseInt(req.params.id)
const product=products.find(p=>p.id===id)
if(!product) return res.status(400).json({message:"produk tidak ditemukan"})

    const {name,prices}=req.body
    if (typeof name!=="string" ||  typeof prices !== 'number') {
        return res.status(400).json("input tidak valid")
    }

    product.name=name
    product.prices=prices
    res.status(200).json(product)
}

exports.deleteProduct = (req,res) => {
    const id = parseInt(req.params.id)
    const index = products.findIndex(p=>p.id === id)
    if(!index) return res.status(400).json({message:"produk tidak ditemukan"})

        products.splice(index,1)
        res.status(200).send()
}