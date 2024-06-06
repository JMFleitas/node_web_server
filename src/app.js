import { envs } from './config/env.js'
import { startServer } from './server/server.js'

//Función  agnóstica autoconvocada
//Agnóstica por que no tiene nombre
//Auto convocada porque la ejecutamos con los parentesis

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

(async () => {
    main()
})()