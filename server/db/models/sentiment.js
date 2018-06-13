const Sequelize = require('sequelize')
const db = require('../db')

const Sentiment = db.define('sentiment', {
  polarity: {
    type: Sequelize.STRING,
  },
  subjectivity: {
    type: Sequelize.STRING,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  polarityConfidence: {
    type: Sequelize.FLOAT,
  },
  subjectivityConfidence: {
    type: Sequelize.FLOAT,
  }
})

module.exports = Sentiment
