import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()


const database = process.env.DATABASE || ''
const username = process.env.DB_USERNAME || ''
const password = process.env.DB_PASSWORD || ''


const db = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
})

export default db