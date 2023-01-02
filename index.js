const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const dataProduk = require("./dataProduk")
let kategoriList = [] 
dataProduk.forEach(function(kt){
  kategoriList.push({"nama": kt["nama_kategori"], "nomor": kt["nomor_kategori"], "img_source": kt["img_source"]})
})



function pilihKategoriProduk(kategori) {
  return dataProduk.find(kt => kt.nomor_kategori == kategori)
}

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
// app.use("/static", express.static(path.resolve('./public/assets')));


app.get('/', (req, res) => {
  res.render("beranda", { kategori_list: kategoriList})
  // console.log(dataProduk.find(kt => kt.nama_kategori == "Aksesoris"))
  // console.log(dataProduk)
  // console.log(kategoriList)
})


app.get('/produk', (req, res) => {
  var withParams = Object.keys(req.params).length != 0
  console.log(withParams)
  res.render("produk", { withParams, kategoriList  })
  // console.log(Object.keys(req.params).length == 0)
})

app.get('/produk/:kategori/', (req, res) => {
  let selectedKategori = pilihKategoriProduk(req.params['kategori'])
  console.log(kategoriList)
  // console.log(req.params)
  let withParams = Object.keys(req.params).length != 0
  // console.log(withParams)
  // console.log(selectedKategori)
  res.render("produk", { produk_list: selectedKategori["produk_kategori"], withParams, kategoriList })
  // console.log(req.params === 0)
})

app.get('/lihat', (req, res) => {
  res.render("lihat_produk")
})

app.get('/profil', (req, res) => {
  res.render("profil", {"params": req.params})
})

app.get('/profil/:cek', (req, res) => {
  res.render("profil", {"params": req.params})
})

// app.get("/produk", (req, res) => {
//   res.send("Berikut kategori produk")
// })

app.get("/blog", (req, res) => {
  res.send("Berita seputar water treatment")
})

app.get("/bantuan", (req, res) => {
  res.send("masukkan permasalan anda")
})

app.listen(port, () => {
  console.log(`example app running on port ${port}`)
})