class CommentController {
    constructor({ commentService }) {
        this.commentService = commentService
    }

    async getList(req, res, next) {
        try {
            const comments = await this.commentService.list()
            res.json(comments)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = CommentController
