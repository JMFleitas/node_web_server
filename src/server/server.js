const express = require('express');
const path = require('path')

const startServer = (options) => {
    const { port, public_path = 'public' } = options
    // console.log(port, public_path)

    const app = express()
    //Para poder usar midlewares se usa la palabra 'use'(express)
    app.use(express.static(public_path)) // contenido estatico que ponemos disponible

    app.get('#', (req, res) => {
        const indexPath = path.join(__dirname + `../../${public_path}/index.html`)
        res.sendFile(indexPath)

    })

    app.listen(port, () => {
        console.log(`Escuchando el puerto: ${port}`)
    })

}
module.exports = {
    startServer
}