const express = require('express')
const { Server } = require('http')
const app = express()
const routes = require('./routes')

app.set('view engine', 'ejs')


app.listen(2000, () => {
    console.log("rodando na porta 2000")
})

app.use(routes)


app.use(express.static('public'))




 