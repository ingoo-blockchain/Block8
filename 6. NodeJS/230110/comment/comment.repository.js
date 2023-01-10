class CommentRepository {
    constructor({ mysql }) {
        this.mysql = mysql
    }

    async findAll() {
        try {
            const [list] = await this.mysql.query("select * from Comment")
            return list
        } catch (e) {
            throw new Error(e)
        }
    }

    view() {}

    update() {}

    create() {}
}

module.exports = CommentRepository
