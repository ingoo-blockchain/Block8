const models = require('../models')
const userRepository = require('./user.repository')
const userService = require('./user.service')
const userController = require('./user.controller')
const { SHA256 } = require('crypto-js')
const JWT = require('../lib/jwt')

const jwt = new JWT({ crypto: require('crypto') })
const repository = new userRepository(models)
const service = new userService({ userRepository: repository, SHA256, jwt })
const controller = new userController({ userService: service })

module.exports = {
    repository,
    service,
    controller,
    models,
}
