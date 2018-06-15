const router = require('express').Router()
const {Post} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll() // maybe add eager loading of sentiments here
    res.json(posts);
  } catch(err) {
      next(err)
  }
})

router.get('/:postId', async (req, res, next) => {
  try {
    const singlePost = await Post.findById(req.params.postId)
    res.json(singlePost)
  } catch (err) {
      next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body)
    res.json(newPost)
  } catch (err) {
      next(err)
  }
})

