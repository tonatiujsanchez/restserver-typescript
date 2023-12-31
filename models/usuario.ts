import { DataTypes } from 'sequelize'
import db from '../database/config'


const Usuario = db.define('Usuario',{
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
})


export default Usuario