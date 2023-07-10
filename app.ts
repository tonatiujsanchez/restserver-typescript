import dotenv from 'dotenv'
import Server from './models/server'

// Configuracion dotenv
dotenv.config()

// CORS

// Instancia del servidor
const server = new Server()
server.listen()

