const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server')

test('Test setup is working correctly', () => {
  expect(true).toBeTruthy()
})

test('/home should return Hello Gallery Picasso', (done) => {
  request(server)
    .get('/home')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.text).toMatch('Gallery')
      done()
    })
})

test('/artworks/:id should contain an image', (done) => {
  request(server)
    .get('/artworks/1')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.text).toMatch('<img')
      done()
    })
})

test('/home should contain 8 links', (done) => {
  request(server)
    .get('/home')
    .end((err, res) => {
      expect(err).toBeNull()
      const $ = cheerio.load(res.text)
      const link = $('a')
      expect(link.length).toBe(8)
      done()
    })
})

// test('/home "Kea in Flight" should take us to /artworks/1', (done) => {
//   request(server)
//     .get('/home')
//     .end((err, res) => {
//       expect(err).toBeNull()
//       expect(res.text).toMatch('<a href=http://localhost:3000/artworks/1>Kea in Flight</a>')
//       done()
//     })
// })
