import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()

export const getAllSiswa=async(req,res)=>{
    try {
        const reponse = await prisma.datasiswa.findMany()
        res.status(200).json(reponse)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const getSiswaById=async(req,res)=>{
    try {
        const reponse = await prisma.datasiswa.findUnique({
            where:{
                id: Number(req.params.id)
            }
        })
        res.status(200).json(reponse)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const createSiswa=async(req,res)=>{
    const {nama,umur}=req.body
    try {
        const reponse=await prisma.datasiswa.create({
            data:{
                nama:nama,
                umur:umur
            }
        })
        res.status(200).json(reponse)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const updateSiswa=async(req,res)=>{
    const {nama,umur}=req.body
try {
    const reponse=await prisma.datasiswa.update({
        where:{
            id: Number(req.params.id)
        },
        data:{
            nama:nama,
            umur:umur
        }
    })
    res.status(200).json(reponse)
} catch (error) {
        res.status(403).json({message:error.message})
}
}

export const deleteSiswa=async(req,res)=>{
    try {
        const reponse=await prisma.datasiswa.delete({
            where:{
                id: Number(req.params.id)
            }
        })
        res.status(200).json(reponse)
    } catch (error) {
        res.status(403).json({message:error.message})
        
    }
}