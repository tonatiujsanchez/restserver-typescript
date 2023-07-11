import dotenv from 'dotenv'
import Server from './models/server'

// Configuracion dotenv
dotenv.config()


// Instancia del servidor
const server = new Server()
server.listen()

