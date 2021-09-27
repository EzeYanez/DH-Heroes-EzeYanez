let express = require('express'); //requiero express
let app = express() // ejecuto express
const PORT = 3030
let path = require('path')
app.use(express.static("public"))


app.get('/home', function(request ,response){
    response.sendFile(path.join(__dirname,'/views/index.html'))
    
})
app.get('/babbage', function(request ,response){
    response.sendFile(path.join(__dirname,'/views/babbage.html'))
    
})
app.get('/berners-lee', function(request ,response){
    response.sendFile(path.join(__dirname,'/views/berners-lee.html'))
    
})
app.get('/clarke', function(request ,response){
    response.sendFile(path.join(__dirname,'/views/clarke.html'))
    
})
app.get('/hamilton', function(request ,response){
    response.sendFile(path.join(__dirname,'/views/hamilton.html'))
    
})
app.get('/hopper', function(request ,response){
    response.sendFile(path.join(__dirname,'/views/hopper.html'))
    
})
app.get('/lovelace', function(request ,response){
    response.sendFile(path.join(__dirname,'/views/lovelace.html'))
    
})
app.get('/turing', function(request ,response){
    response.sendFile(path.join(__dirname,'/views/turing.html'))
    
})



app.listen(PORT, () => console.log('Servidor levantado en el puerto 3030'))

