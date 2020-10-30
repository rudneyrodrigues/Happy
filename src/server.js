const express = require('express')
const path = require('path')
const pages = require('./pages')

const server = express()

server
// Utilizar body do req
.use(express.urlencoded({ extended: true }))
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
.post('/save-orphanage', pages.saveOrphanage)
// Ligando o servidor
.listen(5500)
