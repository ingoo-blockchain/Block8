const config = require("../config")
const mysql = require("../models")
const CommentRepository = require("./comment.repository")
const CommentService = require("./comment.service")
const CommentController = require("./comment.controller")

const repository = new CommentRepository({ mysql })
const service = new CommentService({ commentRepository: repository, config })
const controller = new CommentController({ commentService: service })

module.exports = {
    repository,
    service,
    controller,
}
