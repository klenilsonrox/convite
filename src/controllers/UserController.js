import User from "../models/User.js";


export const createUser = async (req,res)=>{

    try{
        const user = await User.create(req.body)
        res.status(200).json(user)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

export const getAllUsers = async (req,res)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}



export const deleteUser = async (req,res)=>{
    try{
        const userExit=await User.findById(req.params.id)
        if(!userExit){
            return res.status(404).json({message:"usuario nao encontrado"})
        }
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"usuario deletado com sucesso"})
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}