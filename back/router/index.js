const express = require('express')
const user = require('./user')
const product = require('./product')
const order = require('./order')

const router = express.Router()


router.get('/server-status', (req, res) => res.send({
    status: 'ok'
}))

router.get('/time', (req, res) => res.send({
    time: Date.now()
}))

router.use('/user', user)
router.use('/product', product)
router.use('/order', order)

module.exports = router