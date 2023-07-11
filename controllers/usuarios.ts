import { Request, Response } from "express";
import { Usuario } from "../models";





export const getUsuarios = async( req:Request, res:Response ) => {


    const usuarios = await Usuario.findAll()

    res.status(200).json({
        msg: 'getUsuarios',
        usuarios
    })
}


export const getUsuario = async( req:Request, res:Response ) => {
    const { id } = req.params

    const usuario = await Usuario.findByPk(id)

    if(!usuario){
        return res.status(400).json({
            msg: `Usuario con el id ${ id } no encontrado`
        })
    }

    res.json({
        msg: 'getUsuario por id',
        usuario
    })
}


export const postUsuario = async( req:Request, res:Response ) => {
    const { body } = req


    try {

        const usuarioDB = await Usuario.findOne({
            where: {
                email: body.email
            }
        })

        if( usuarioDB ){
            return res.status(400).json({
                msg: `Ya existe un usuario registrado con el email ${body.email}`
            })
        }
        
        const usuario = await Usuario.create(body)
        await usuario.save()

        res.status(201).json({
            msg: 'post Usuarios',
            usuario
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Hubo un error, hable con el administrador'
        })
        
    }

}


export const putUsuarios = async( req:Request, res:Response ) => {

    const { id } = req.params
    const { body } = req

    try {

        const usuario = await Usuario.findByPk(id)

        if( !usuario ){
            return res.status(400).json({
                msg: `Usuario no encontrado`
            })
        }
        
        await usuario.update({
            nombre: body.nombre,
            email: body.email,
        })

        res.status(201).json({
            msg: 'put Usuarios',
            usuario
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Hubo un error, hable con el administrador'
        })
        
    }

}


export const deleteUsuarios = async( req:Request, res:Response ) => {

    const { id } = req.params

    try {
        
        const usuario = await Usuario.findByPk(id)

        if( !usuario ){
            return res.status(400).json({
                msg: `Usuario no encontrado`
            })
        }

        // await usuario.destroy()  //Eliminacion física
        await usuario.update({ estado: false }) //Eliminacion lógica

        res.json({
            msg: 'delete Usuarios',
            usuario
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Hubo un error, hable con el administrador'
        })
    }
}