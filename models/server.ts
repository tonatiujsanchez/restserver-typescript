import express, { Application } from 'express'
import cors from 'cors'

import userRoutes from '../routes/usuarios'

class Server {

    private app: Application 
    private port: string
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '8000'

        // middlewares
        this.middlewares()

        // Definir rutas
        this.routes()

    }

    middlewares() {
        // CORS
        this.app.use( cors() )

        // Parseo del Body
        this.app.use( express.json() )

        // Carpeta public
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.use( this.apiPaths.usuarios, userRoutes )
    }

    listen() {
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto', this.port)
        })
    }

    

}

export default Server