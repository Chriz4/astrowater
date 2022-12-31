const express = require('express')
const app = express()
const port = 3000

const kategori_list = [
  { "nomor": 1, "nama": "AKSESORIS", "img_source": "images/produk/meteran-air.png"},
  { "nomor": 2, "nama": "BOOSTER PUMP", "img_source": "images/produk/booster-pump.jfif"},
  { "nomor": 3, "nama": "CARBON", "img_source": "images/produk/carbon-cropped.png"},
  { "nomor": 4, "nama": "FILTER AIR", "img_source": "images/produk/filter-air.jfif"},
  { "nomor": 5, "nama": "HOUSING FILTER", "img_source": "images/produk/housing-filter.jfif"},
  { "nomor": 6, "nama": "GALON AIR", "img_source": "images/produk/galon-air.png"}
]

const produk_list = [
  {"nomor": 1, "nama_produk": "Tutup Gunung", "img_source": "images/tutup_gunung.jfif"},
  {"nomor": 2, "nama_produk": "Meteran Air", "img_source": "images/produk/meteran-air.png"},
  {"nomor": 3, "nama_produk": "Pelampung Radar Daiton", "img_source": "images/produk/pelampung_radar_daiton.png"},
  {"nomor": 4, "nama_produk": "Keran Dispenser", "img_source": "images/produk/keran_dispenser.jfif"},
  {"nomor": 5, "nama_produk": "Pelampung Bola", "img_source": "images/produk/pelampung_bola.png"},
  {"nomor": 6, "nama_produk": "Pelampung Bola Stainless", "img_source": "images/produk/pelampung_bola_stainless.jfif"},
  {"nomor": 7, "nama_produk": "Kran Pelampung Bola", "img_source": "images/produk/kran_pelampung_bola.jfif"},
  {"nomor": 8, "nama_produk": "Elektrolisa", "img_source": "images/produk/elektrolisa.jfif"},
  
]

app.set('view engine', 'ejs')
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.render("beranda", { kategori_list: kategori_list})
})

app.get('/produk', (req, res) => {
  res.render("produk", { produk_list: produk_list })
})

app.get('/lihat', (req, res) => {
  res.render("lihat_produk")
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