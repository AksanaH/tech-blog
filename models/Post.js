const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Post extends Model { }

Post.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                key: 'id',
                model: 'user',
            },
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        freezeTableName: false,
        underscored: true,
        modelName: 'post',
    },
);

module.exports = Post;