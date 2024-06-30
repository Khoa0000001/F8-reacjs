const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db'); // Đảm bảo đường dẫn tới file db.js là chính xác

const Comment = sequelize.define(
    'Comment',
    {
        idComment: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        value: {
            type: DataTypes.STRING(2000),
            allowNull: false,
        },
        commentTypeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'commenttypes',
                key: 'idCommentType',
            },
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'idUser',
            },
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
    },
    {
        tableName: 'comments',
        timestamps: true,
    }
);

module.exports = Comment;
