const express = require('express')
const hbs = require('express-handlebars')
const server = express()

const art = require('./art.json')

module.exports = server

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))

// Routes

server.get('/home', (req, res) => {
  const viewData = {
    title: 'Gallery',
    name: 'Picasso',
    art: art
  }
  res.render('home', viewData)
})

server.get('/artworks/:id', (req, res) => {
  const idx = req.params.id
  let artwork = art.find(element => element.id == idx)

  let viewData = {
    art: artwork,
    title: "Artist's work"
  }
  res.render('artworks', viewData)
})
