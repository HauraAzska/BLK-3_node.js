const db=require('../db.js')

exports.createProduk=(req,res)=>{
    const{nama,harga,stock}=req.body
    db.query
    ('INSERT INTO produk (nama,harga,stock) VALUES (?,?,?)',
    [nama,harga,stock],
    (err,result) => {
        if (err) return res.status(500).json({error:err.message})
            res.json({message:'produk berhasil di tambahkan', id:result.insertId})
    }
)
}

exports.getAllProduk=(req,res)=>{
    db.query(
        'select*from produk',
        (err,result)=>{
            if (err) return res.status(500).json({error:err.message})
            res.json(result)
        }
    )
}

exports.getProdukById=(req,res)=>{
const {id}=req.params
db.query('SELECT * FROM produk where id=?',
    [id],
    (err,result)=>{
        if (err) return res.status(500).json({error:err.message})
        if (result.length === 0) return res.status(400).json({message:"Produk tidak di temukan"})
            res.json(result[0])
        }
    )
}

exports.updateProduk=(req,res)=>{
const {id}=req.params
const {nama, harga, stock}=req.body
db.query('UPDATE produk set nama=?, harga=?, stock=? where id=?',
    [nama, harga, stock, id],
    (err,result)=>{
        if (err) return res.status(500).json({error:err.message})
            res.json({message:"produk berhasil di update"})
        }
    )
}

exports.deleteProduk=(req,res)=>{
const {id}=req.params
db.query('delete from produk where id=?',
    [id],
    (err,result)=>{
        if (err) return res.status(500).json({error:err.message})
            res.json({message:"produk berhasil di hapus"})
        }
    )
}
