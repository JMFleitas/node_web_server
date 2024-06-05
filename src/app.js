const { envs } = require('./config/env')
const { startServer } = require('./server/server')

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