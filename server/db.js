const Sequelize = require('sequelize')
const db = new Sequelize('postgres://postgres:w2w2@localhost/firstcontact', {logging: false})

const Contact = db.define('contacts', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING
  }
})

module.exports = {
  db,
  Contact
}
