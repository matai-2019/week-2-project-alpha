const express = require('express')
const router = express.Router()
const data = require('./data.json')
const fs = require('fs')
const path = require('path')

const indexPath = path.join('')

module.exports = router

// GET/home

router.get('/home', (req, res) => {
  res.render('index', data)
})

// GET

router.get('/', (req, res) => {
  res.redirect('./home')
})

// GET/animal

router.get('/animals/:id', (req, res) => {
  let arrOfAnimals = data.animals
  let idx = req.params.id
  let selectedAnimal = arrOfAnimals.find(element => element.id == idx)

  res.render('item', selectedAnimal)
})

// // POST
router.get('/animals/edit/:id', (req, res) => {
  let arrOfAnimals = data.animals
  let idx = req.params.id
  let selectedAnimal = arrOfAnimals.find(element => element.id == idx)
  
  res.render('edit', selectedAnimal)
})

router.post('/animals/edit/:id', (req, res) => {
  let arrOfAnimals = data.animals
  let idx = req.params.id
  let selectedAnimal = arrOfAnimals.find(element => element.id == idx)

  const newAnimal = {
    available: req.body.available
  }

  selectedAnimal.available = newAnimal.available

  fs.writeFile('./data.json', JSON.stringify(data), (err) => {
    if (err) {
      console.log(err)}
    else {
      console.log(data)
    }
  })

  res.redirect(`/animals/${selectedAnimal.id}`)
})
