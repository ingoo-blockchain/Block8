module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "User",
        {
            userid: {
                type: DataTypes.STRING(30),
                allowNull: false,
                unique: true,
            },
            userpw: {
                type: DataTypes.STRING(64),
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            gender: {
                type: DataTypes.STRING(2),
                defaultValue: "여자",
            },
        },
        {
            freezeTableName: true,
            // modelName:'asdf',
            tiemstamps: false,
            charset: "utf8mb4",
            callate: "utf8mb4_general_ci",
        }
    )
}
