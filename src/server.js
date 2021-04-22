const express = require('express');  
const path = require('path');
const pages = require('./pages.js');

const server = express();

server
   //utilizar o corpo da requisiçao
   .use(express.urlencoded({ extended: true }))

   //utilizando os arquivos estáticos
   .use(express.static('public'))

   //configurar template engine
   .set('views', path.join(__dirname, "views"))
   .set('view engine', 'hbs')

   //criar uma rota
   .get('/', pages.index)
   .get('/orphanages', pages.orphanages)
   .get('/orphanage', pages.orphanage)
   .get('/create-orphanage', pages.createOrphanage)
   .post('/save-orphanage', pages.saveOrphanage)

server.listen(5500, () => console.log('vai se foder node.js'));