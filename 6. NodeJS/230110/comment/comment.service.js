class CommentService {
    constructor({ commentRepository, config }) {
        this.commentRepository = commentRepository
        this.config = config
        this.HttpException = config.exception.HttpException
    }

    async list() {
        try {
            const list = await this.commentRepository.findAll()
            return list
        } catch (e) {
            throw new this.HttpException(e)
        }
    }
}

module.exports = CommentService
