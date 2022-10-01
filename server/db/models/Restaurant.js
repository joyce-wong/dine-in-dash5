const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('restaurant', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1367342542/content-items/000/366/176/laputa_1600-original.jpg?1367342542'
    },
    description: {
        type: Sequelize.TEXT,
    },
});