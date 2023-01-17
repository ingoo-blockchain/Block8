module.exports = (sequelize, Sequelize) => {
    class Board extends Sequelize.Model {
        static initialize() {
            this.init(
                {
                    subject: {
                        type: Sequelize.STRING(100),
                        allowNull: false,
                    },
                    content: {
                        type: Sequelize.TEXT,
                        allowNull: true,
                    },
                    createdAt: {
                        type: Sequelize.DATE,
                        defaultValue: sequelize.fn("now"),
                    },
                    hit: {
                        type: Sequelize.INTEGER,
                        defaultValue: 0,
                    },
                },
                {
                    sequelize,
                }
            )
        }

        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: "userid",
            })

            this.hasMany(models.Comment, {
                foreignKey: "boardid",
            })

            this.belongsToMany(models.User, {
                through: "Liked",
                foreignKey: "boardid",
            })

            this.belongsToMany(models.Hash, {
                through: "Hashtag",
                foreignKey: "boardid",
            })
        }
    }

    Board.initialize()
}
