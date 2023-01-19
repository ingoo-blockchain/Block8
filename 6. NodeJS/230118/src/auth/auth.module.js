const {
    sequelize: {
        models: { User },
    },
} = require("../../models")

const AuthRepository = require("./auth.repository")
const AuthService = require("./auth.service")
const AuthController = require("./auth.contorller")

const JWT = require("../../lib/jwt")
const crypto = require("crypto")

const jwt = new JWT({ crypto })

const authRepository = new AuthRepository({ User })
const authService = new AuthService({ authRepository, jwt })
const authController = new AuthController({ authService })

module.exports = { authController }
