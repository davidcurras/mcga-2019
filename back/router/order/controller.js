const orders = require('../../data/orders.json')

const getAll = (req, res) => {
  res.send(orders)
}

const getById = (req, res) => {
  const order = orders.find(order => order.id == req.params.id)
  if(order == null){
    res.send('Order doesn`t exist')
  }
  else{
    res.send(order)
  }
}

const insert = (req, res) => {
  if(req.body.id <= orders.length){
    res.send('Already exist a order with that id')
  }
  else {
    orders.push(req.body)
    res.send(`New order added: ${req.body.id} - ${req.body.name}`)
  }
}

const upsert  = (req, res) => {
  const order = orders.find(order => order.id == req.params.id)
  if(order == null){
    res.send('Order doesn`t exist')
  }
  else{
    orders.splice(order.id-1, 1, req.body)
    res.send(`Order: ${req.params.id} upsert`)
  }
}

const update  = (req, res) => {
  const order = orders.find(order => order.id == req.params.id)
  if(order == null){
    res.send('Order doesn`t exist')
  }
  else{
    order[Object.keys(req.body)] = req.body[Object.keys(req.body)]
    res.send(order)
  }
}

const remove = (req, res) => {
  const order = orders.find(order => order.id == req.params.id)
  if(order == null){
    res.send('order doesn`t exist')
  }
  else{
    orders.splice(order.id-1, 1)
    res.send(`Order: ${req.params.id} removed`)
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