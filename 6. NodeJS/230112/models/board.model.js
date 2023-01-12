/*
CREATE TABLE `Board`(
    id INT PRIMARY KEY AUTO_INCREMENT,
    subject VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    userid VARCHAR(30) NOT NULL,
    registerDate datetime default now(),
    hit INT default 0
)
*/

module.exports = (sequelize, Sequelize) => {
    class Board extends Sequelize.Model {
        static initialize() {
            return this.init(
                {
                    subject: {
                        type: Sequelize.STRING(100),
                        allowNull: false,
                    },
                    content: {
                        type: Sequelize.TEXT,
                        allowNull: false,
                    },
                    registerDate: {
                        type: Sequelize.DATE,
                        allowNull: false,
                        defaultValue: Sequelize.fn("now"),
                    },
                    hit: {
                        type: Sequelize.INTEGER,
                        defaultValue: 0,
                    },
                    userid: {
                        type: Sequelize.STRING(100),
                        allowNull: true,
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
        }
    }

    Board.initialize()
    return Board
}
