module.exports = (sequelize, Sequelize) => {
    // class 선언
    class User extends Sequelize.Model {
        static initialize() {
            return this.init(
                {
                    userid: {
                        type: Sequelize.STRING(60),
                        primaryKey: true,
                    },
                    userpw: {
                        type: Sequelize.STRING(64),
                        allowNull: false,
                    },
                    username: {
                        type: Sequelize.STRING(30),
                        allownull: false,
                    },
                    provider: {
                        type: Sequelize.ENUM("local", "kakao"),
                        allowNull: false,
                        defaultValue: "local",
                    },
                    snsId: {
                        type: Sequelize.STRING(30),
                        allowNull: true,
                    },
                },
                {
                    sequelize,
                }
            )
        }

        static associate(models) {
            this.hasMany(models.Board, {
                foreignKey: "userid",
            })

            this.hasMany(models.Comment, {
                foreignKey: "userid",
            })

            this.belongsToMany(models.Board, {
                through: "Liked",
                foreignKey: "userid",
            })
        }
    }

    // class 사용
    User.initialize()
}
