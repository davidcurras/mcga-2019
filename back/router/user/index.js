const express = require('express')
const controller = require('./controller')

const router = express.Router()
const  {
  getAll,
  getById,
  insert,
  upsert,
  update,
  remove,
  signin
} = controller

router.use(express.json())

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', insert)
router.post('/signin', signin)
router.put('/:id', upsert)
router.patch('/:id', update)
router.delete('/:id', remove)

module.exports = router

