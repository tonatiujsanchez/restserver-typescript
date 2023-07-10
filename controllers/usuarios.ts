import { Request, Response } from "express";



export const getUsuarios = ( req:Request, res:Response ) => {
    res.json({
        msg: 'get Usuarios'
    })
}


export const getUsuario = ( req:Request, res:Response ) => {
    const { id } = req.params
    res.json({
        msg: 'get Usuario',
        id
    })
}


export const postUsuario = ( req:Request, res:Response ) => {
    const { body } = req

    res.json({
        msg: 'post Usuarios',
        body
    })
}


export const putUsuarios = ( req:Request, res:Response ) => {

    const { id } = req.params
    const { body } = req


    res.json({
        msg: 'put Usuarios',
        id,
        body
    })
}


export const deleteUsuarios = ( req:Request, res:Response ) => {

    const { id } = req.params


    res.json({
        msg: 'delete Usuarios',
        id
    })
}