const express = require('express')
const routes = express.Router()


routes.get('/', (req, res) =>res.render(__dirname+"/views/index"))


routes.get('/anime1', (req, res) =>  res.render(__dirname+'/views/post1'))
routes.get('/anime2', (req, res) =>  res.render(__dirname+'/views/post2'))
routes.get('/anime3', (req, res) =>  res.render(__dirname+'/views/post3'))
routes.get('/anime4', (req, res) =>  res.render(__dirname+'/views/post4'))



module.exports = routes;
