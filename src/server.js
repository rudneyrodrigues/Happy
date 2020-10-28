const express = require('express')
const path = require('path')
const pages = require('./pages')

const server = express()

server
// Utilizando arquivos estaticos
.use(express.static('public'))
// Configurando o template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
// Criando uma rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
// Ligando o servidor
.listen(5500)
