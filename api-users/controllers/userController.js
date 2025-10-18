const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()

exports.createUser=async(req,res)=>{
    try {
        const {name, email, age}=req.body
        const user = await prisma.user.create({
            data:{
                name,
                email,
                age: Number(age)
            }
        })
        res.status(201).json({message: 'data berhasil di input ', user})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.getAllUsers=async(req,res)=>{
    try {
        const user= await prisma.user.findMany()
        res.json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.getUserById=async(req,res)=>{
    try {
         const {id}=req.params
         const user=await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
         })
         if(!user)
             return res.status(400).json({message:'user tidak di temukan'})
            res.json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
}

exports.updateUser=async(req,res)=>{
try {
        const {id}=req.params
    const{name,email,age}=req.body

    const user= await prisma.user.update({
        where:{
            id: Number(id)
        },
        data:{name,
            email,
            age:Number(age)
        }
    })
    res.json({message:'data berhasil di ubah',user})
} catch (error) {
    res.status(500).json({error:error.message})
}
    
}

exports.deleteUser=async(req,res)=>{
    try {
        const {id}=req.params
        const user=await prisma.user.delete({
            where:{
                id:Number(id)
            }
        })
        res.json({message:'data berhasil di hapus'})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}