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

// GET/home

// router.get('/home', (req, res) =>
//   res.send('home page')
//   // res.render('index.html', data)
// )

// GET/animal

// router.get('/animals/:id', (req, res) => {
//   let arrOfAnimals = data.animals  
//   let idx = req.params.id
//   let selectedAnimal = arrOfAnimals.find(element => element.id == idx)

//   res.render('./data.json', selectedAnimal)
// })

// // POST

// router.post('/animals/edit/:id', (req, res) => {
//   let arrOfAnimals = data.animals
//   let idx = req.params.id
//   let selectedAnimal = arrOfAnimals.find(element => element.id == idx)

//   const newAnimal = {
//     name: req.body.name,
//     type: req.body.type,
//     age: req.body.age
//   }

//   selectedAnimal.name = newAnimal.name
//   selectedAnimal.type = newAnimal.type
//   selectedAnimal.age = newAnimal.age

//   fs.writeFile('./data.json', JSON.stringify(data), (err) => {
//     if (err) {
//       console.log(err)}
//     else {
//       console.log("wooo!")
//       console.log(data)
//     }
//   })

//   res.redirect(`/animals/${selectedAnimal.id}`)
// })
