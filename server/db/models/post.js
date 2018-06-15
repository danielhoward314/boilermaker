const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  text: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Post
