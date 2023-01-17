module.exports = (sequelize, Sequelize) => {
    class Comment extends Sequelize.Model {
        static initialize() {
            this.init(
                {
                    content: {
                        type: Sequelize.TEXT,
                        allowNull: false,
                    },
                    createAt: {
                        type: Sequelize.DATE,
                        allowNull: false,
                        defaultValue: sequelize.fn("now"),
                    },
                },
                {
                    sequelize,
                }
            )
        }

        static associate(models) {
            this.belongsTo(models.Board, {
                foreignKey: "boardid",
            })

            this.belongsTo(models.User, {
                foreignKey: "userid",
            })
        }
    }

    Comment.initialize()
}
