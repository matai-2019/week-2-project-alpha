const express = require('express')
const router = express.Router()
const data = require('./data.json')
const fs = require('fs')
const path = require('path')

const indexPath = path.join('')

module.exports = router

// GET

router.get('/', (req, res) => 
  res.send('Testing home page')
)

// Route home

router.get('/home', (req, res) =>
  res.send('home page')
  // res.render('index.html', data)
)

// router.get('/animal/:id', (req, res) =>
//   const id = req.params.id
//   let animal = animals.find(element => element.id == id)
//   res.render('animals', data)
// )

// router.post('/animals/edit/:id', (req, res) => {
//   let animals = data.animals
//   let idx = req.params.id
//   let animals = animals.find(element => element.id == idx)

//   const newAnimal = {
//     name: req.body.name,
//     breed: req.body.breed,
//     owner: req.body.owner
//   }

//   rightPuppy.name = newPuppy.name
//   rightPuppy.breed = newPuppy.breed
//   rightPuppy.owner = newPuppy.owner

//   fs.writeFile('./data.json', JSON.stringify(data), (err) => {
//     if (err) {
//       console.log(err)}
//     else {
//       console.log("wooo!")
//       console.log(data)
//     }
//   })

//   res.redirect(`/animals/${rightPuppy.id}`)
// })
