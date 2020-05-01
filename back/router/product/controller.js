const products = require('../../data/products.json')

const getAll = (req, res) => {
  res.send(products)
}

const getById = (req, res) => {
  const product = products.find(product => product.id == req.params.id)
  if(product == null){
    res.send('Product doesn`t exist')
  }
  else{
    res.send(product)
  }
}

const insert = (req, res) => {
  if(req.body.id <= products.length){
    res.send('Already exist a product with that id')
  }
  else {
    products.push(req.body)
    res.send(`New product added: ${req.body.id} - ${req.body.name}`)
  }
}

const upsert  = (req, res) => {
  const product = products.find(product => product.id == req.params.id)
  if(product == null){
    res.send('Product doesn`t exist')
  }
  else{
    products.splice(product.id-1, 1, req.body)
    res.send(`Product: ${req.params.id} upsert`)
  }
}

const update  = (req, res) => {
  const product = products.find(product => product.id == req.params.id)
  if(product == null){
    res.send('Product doesn`t exist')
  }
  else{
    product[Object.keys(req.body)] = req.body[Object.keys(req.body)]
    res.send(product)
  }
}

const remove = (req, res) => {
  const product = products.find(product => product.id == req.params.id)
  if(product == null){
    res.send('product doesn`t exist')
  }
  else{
    products.splice(product.id-1, 1)
    res.send(`Product: ${req.params.id} removed`)
  }
}

module.exports = {
  getAll,
  getById,
  insert,
  upsert,
  update,
  remove
}