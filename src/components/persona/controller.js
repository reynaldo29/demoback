import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (req,res) =>{
    try{
        const people = await prisma.persona.findMany()
        res.json({
            ok:"agua",
            data:people

        })
    }catch(error){
        res.json({
            ok:false,
            people:error.message
        })
    }
}

export const create = async (req,res) =>{
    try{
        const person = await prisma.persona.create({
            data: req.body,
        })
        res.json({
            ok:true,
            data:person
        })
    }catch(error){
        res.json({
            ok:false,
            data:error.message
        });
    }
}

export const update = async(req,res) =>{
    try{
        const id = req.params.id;
        const person = await prisma.persona.update({
            where:{id},
            data:req.body
        })
        res.json({
            ok:true,
            data:"Person was updated succesfully"
        })
    }catch(error){
        res.json({
            ok:false,
            data:error.message
        })
    }
}

export const remove = async(req,res) =>{
    try{
        const id = Number(req.params.id);
        const person = await prisma.persona.delete({
            where:{id}
        })
        res.json({
            ok:true,
            data:"Person was deleted"
        })

    }catch(error){
        res.json({
            ok:false,
            data:error.message
        })

    }

}