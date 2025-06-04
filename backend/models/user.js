const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static initiate(sequelize) {
         User.init({
            email: {
                type: Sequelize.STRING(40),
                allowNull: true,
                unique: true,
            },
            nick: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            provider: {
                type: Sequelize.ENUM('local', 'kakao'),
                allowNull: false,
                defaultValue: 'local'
            },
            snsId: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true, // createdAt, updatedAt
            underscored: false, //created_at, updated_at
            modelName: 'User',
            tableName: 'users',
            paranoid: true, //deletedAt 유저 삭제일 // soft delete
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}

module.exports = User;