const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static initiate(sequelize) {
         User.init({
            user_uuid: {
                type: Sequelize.CHAR(36),
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            email: {
            type: Sequelize.STRING(100),
            allowNull: true
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: true
            },
            phone: {
                type: Sequelize.STRING(20),
                allowNull: true
            },
            address: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            role: {
                type: Sequelize.ENUM('admin','user'),
                allowNull: false,
                defaultValue: "user"
            }
        }, {
            sequelize,
            timestamps: true, // createdAt, updatedAt
            underscored: false, //created_at, updated_at
            modelName: 'User',
            tableName: 'users',
            paranoid: true, //deletedAt 유저 삭제일 // soft delete
            charset: 'utf8',
            collate: 'utf8_general_ci',

            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "user_uuid" }]
                },
                {
                    name: "email",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "email" }]
                }
            ]
        });
    }
}

module.exports = User;