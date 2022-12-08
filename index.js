const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.render("beranda")
})

app.get('/profil', (req, res) => {
  res.send("Profil Perusahaan")
})

app.get("/produk", (req, res) => {
  res.send("Berikut kategori produk")
})

app.get("/blog", (req, res) => {
  res.send("Berita seputar water treatment")
})

app.get("/bantuan", (req, res) => {
  res.send("masukkan permasalan anda")
})

app.listen(port, () => {
  console.log(`example app running on port ${port}`)
})