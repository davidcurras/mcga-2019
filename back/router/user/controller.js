const sha256 = require('sha256')
const jwt = require('jsonwebtoken')
const users = require('../../data/users.json')
const User = require('../../models/user')

const createToken = email => {
  const data = { email }
  const secretKey = 'ClaseMCGA'
  const options = { expiresIn: '1d'}
  const token = jwt.sign(data, secretKey, options)
}

const getAll = (req, res) => {
  User.find({}, {password: 0}, (err, users) => {
    if (err) res.send({ msg: 'No se pudo obtener la lista de usuarios', error: err })
    res.send(users)
  })
}

const getById = (req, res) => {
  User.find({
    id: req.param.id
  }, (err, user) => {
    if (err) res.send({ msg: 'No se pudo encontrar el usuario', error: err })
    res.send(user)
  })
}
const insert = (req, res) => { 
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: sha256(req.body.password),
    phone: req.body.phone,
  })

  user.save((err) => {
    if (err) res.send({ msg: 'No se pudo crear el usuario', error: err })
    res.send('Usuario creado exitosamente')
  })
}

const signin = (req, res) => {
  console.log('signin', req.body)
  const { email, password } = req.body
  /*
  res.send({
    id: 345345,
    name: 'David Curras',
    email: 'david.curras@uai.edu.ar',
    role: 'client', 
    token: Date.now()
  })*/

  
  User.findOneAndUpdate(
    { email, password: sha256(password) },
    { password: 0 },
    { token: createToken(email) },
    (err, user) => {
    if (err) return res.status(500).send({ msg: 'Error del servidor', error: err })
    if (!user) return res.status(401).send({ msg: 'Email o contraseña invalidos', error: err })
    res.send(user)
  })
  
}

const upsert  = (req, res) => {
  const user = users.find(user => user.id == req.params.id)
  if(user == null){
    res.send('User doesn`t exist')
  }
  else{
    users.splice(user.id-1, 1, req.body)
    res.send(`User: ${req.params.id} upsert`)
  }
}

const update  = (req, res) => {
  const user = users.find(user => user.id == req.params.id)
  if(user == null){
    res.send('User doesn`t exist')
  }
  else{
    user[Object.keys(req.body)] = req.body[Object.keys(req.body)]
    res.send(user)
  }
}

const remove = (req, res) => {
  const user = users.find(user => user.id == req.params.id)
  if(user == null){
    res.send('User doesn`t exist')
  }
  else{
    users.splice(user.id-1, 1)
    res.send(`User: ${req.params.id} removed`)
  }
}

module.exports = {
  getAll,
  getById,
  insert,
  upsert,
  update,
  remove,
  signin
}