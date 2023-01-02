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
  // console.log(kategoriList)
  // console.log(req.params)
  let withParams = Object.keys(req.params).length != 0
  // console.log(withParams)
  // console.log(selectedKategori)
  // console.log(selectedKategori["nomor_kategori"])
  res.render("produk", { ctg_num: selectedKategori["nomor_kategori"] ,produk_list: selectedKategori["produk_kategori"], withParams, kategoriList })
  // console.log(req.params === 0)
})

app.get('/lihat/:kategori/:produk', (req, res) => {
  dataKategori = dataProduk.find(kt => kt.nomor_kategori == req.params.kategori)
  // console.log(req.params)
  dataBarang = dataKategori["produk_kategori"].find(prod => prod.seri_produk == req.params.produk)
  // console.log(dataBarang)
  // console.log(dataKategori["produk_kategori"])
  // console.log(dataKategori["nama_kategori"])
  res.render("lihat_produk", { dataBarang, "nama_kategori": dataKategori["nama_kategori"], "nomor_kategori": dataKategori["nomor_kategori"] })
})

app.get('/profil', (req, res) => {
  res.render("profil", {"params": req.params})
})

app.get('/profil/:cek/:ricek', (req, res) => {
  console.log(req.params)
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