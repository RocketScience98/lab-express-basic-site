
/*
1. IMPORTACIONES    
*/
const express = require("express")
const app = express()
const port = 3000
/*
2. RUTAS
*/
app.use(express.static('public'))
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html')
})

// localhost:3000/home
app.get('/home', (request, response, next) => {
    // console.log("Hola mundo")
    // response.send('<h1>Te doy la bienvenida, Ironhacker</h1>')
    // __dirname === http://localhost:3002
    response.sendFile(__dirname + '/views/home-page.html')
})

//about page
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html')
})

//about works
app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html')
})
//about fotos
app.get('/fotos', (request, response, next) => {
    response.sendFile(__dirname + '/views/fotos.html')
})

//
/*
3. SERVIDOR
*/
app.listen(port, () => {
    console.log("I am a live server")
})